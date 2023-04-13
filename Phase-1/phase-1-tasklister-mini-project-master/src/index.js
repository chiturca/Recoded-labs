document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const descriptions= document.getElementById("new-task-description")
  const tasks= document.getElementById("tasks")
  const btn= document.getElementById("submit")
  
  btn.addEventListener("click", (e)=>{
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.innerText="Done";

    li.append(`${descriptions.value}  `);
    li.append(delBtn);
    tasks.append(li);

    descriptions.value="";
    
    e.preventDefault();

    delBtn.addEventListener("click", (e)=>{ 
      function remove(element) {
        element.parentNode.removeChild(element);
      }
      remove(li)
      e.preventDefault()
    })
  })
});
