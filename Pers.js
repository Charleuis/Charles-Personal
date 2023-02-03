var tablinks = document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}
var sidemen = document.getElementById("sidemenu");

function openmenu(){
  sidemen.style.right ="0";
}
function closemenu(){
  sidemen.style.right ="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ9Pkw3ZAxBXc3wm1zFsWWr64fCiDZNSihlntUBQZ_G7E7dlAoYIXglI9k2KazSd1i/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent Sucessfully"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })