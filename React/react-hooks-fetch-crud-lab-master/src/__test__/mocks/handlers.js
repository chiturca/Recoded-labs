import { rest } from "msw";
import { data } from "./data";

let questions = data;

export const handlers = [
  rest.get("http://localhost:4000/questions", (req, res, ctx) => {
    return res(ctx.json(questions));
  }),
  rest.post("http://localhost:4000/questions", (req, res, ctx) => {
    const id = questions[questions.length - 1]?.id + 1 || 1;
    const question = { id, ...req.body };
    questions.push(question);
    return res(ctx.json(question));
  }),
  rest.delete("http://localhost:4000/questions/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    questions = questions.filter((q) => q.id !== parseInt(id));
    return res(ctx.json({}));
  }),
  rest.patch("http://localhost:4000/questions/:id", (req, res, ctx) => {
    const { id } = req.params;
    const { correctIndex } = req.body;
    const question = questions.find((q) => q.id === parseInt(id));
    if (!question) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    question.correctIndex = correctIndex;
    return res(ctx.json(question));
  }),
];
