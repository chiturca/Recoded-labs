
  
function submitData() {
  
  return  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
    }),
  }
)
        .then(function (response) {
         return response.json();
        })
        .then(obj=>{
          document.querySelector("body").append(obj.id);
        })
        .catch(error=>{
          //alert("Unauthorized Access")
          document.querySelector("body").innerHTML= error.message
          console.log(document.querySelector("body").innerHTML)
        })
}
submitData();
