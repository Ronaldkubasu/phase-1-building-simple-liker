// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')
modal.setAttribute('class','hidden')
const like = document.querySelector(".like-glyph")

like.addEventListener('click', () =>{
      mimicServerCall()
      .then(resp =>
      handleResponse()
      )
      .catch(err => {
      handleError()})
})

function addHidden(){
  modal.classList.add('hidden')
}
function handleError(){
  modal.classList.remove('hidden')
  setTimeout(addHidden,3000 )
}

function handleResponse(){
  like.classList.toggle('activated-heart')
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
