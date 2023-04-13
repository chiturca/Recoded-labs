// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMsg=document.querySelector("#modal")
errorMsg.setAttribute("class", "hidden")
const likeBtn=document.getElementsByClassName("like-glyph")

function fetch(e) {
  const btn=e.target
  mimicServerCall()
  .then(()=> {
    if (btn.innerHTML===EMPTY_HEART) {
      btn.innerHTML=FULL_HEART
      btn.setAttribute("class","activated-heart")
    } else if(btn.innerHTML===FULL_HEART){
      btn.innerHTML=EMPTY_HEART
      btn.classList.remove("activated-heart")
    }
  })
  .catch(()=>{
    errorMsg.removeAttribute("class")
    setTimeout(function(){
      errorMsg.setAttribute("class", "hidden")
  }, 3000);
  })
}

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", fetch)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
