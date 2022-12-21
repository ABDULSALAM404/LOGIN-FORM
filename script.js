/* 
  const id = (id) => document.getElementById(id)
  const classes = (classes) => document.getElementsByClassName(classes)

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'),

errorMsg = classes('error'),
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon')

form.addEventListener('submit' , (e) => {
  e.preventDefault()

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
})

const engine = (id , serial, message) => {
  if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
} 
   */
const id = (id) => document.getElementById(id)
const classes = (classes) => document.getElementsByClassName(classes)

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'),

errorMsg = classes('error'),
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon')

 
form.addEventListener("submit" , (e) => {
  e.preventDefault()

  engine(username, 0, "enter username")
  engine(email, 1, "enter email")
  engine(password, 2, "enter password") 
}) 
 
let engine = (id, s, message) => {

  if (id.value.trim() === "") {
    errorMsg[s].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[s].style.opacity = "1";
    successIcon[s].style.opacity = "0";
  } 
  
  else{
    errorMsg[s].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[s].style.opacity = "0";
    successIcon[s].style.opacity = "1"; 
  }
}



