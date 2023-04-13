import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('http://localhost:4000/questions')
        const data = await response.json();
        // console.log(data)
        setQuiz(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  function handleChange(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"correctIndex": correctIndex})
    })
    .then(r=>r.json())
    .then(updatedQ=>{
      const updatedQs = quiz.map(question => { 
        if(question.id===updatedQ.id ){ return updatedQ };
        return question;
      })
      setQuiz(updatedQs)
    })
  }

  function handleDeleteQuestion(gone) {
    // console.log(gone)
    setQuiz(quiz.filter(q=>q.id !== gone.id))
  }

  const questionDisplay=quiz.map(question=> (
    <QuestionItem 
      question={question} 
      key={question.id}  
      onDelete={handleDeleteQuestion}
      onChange={handleChange}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionDisplay}
      </ul>
    </section>
  );
}

export default QuestionList;
