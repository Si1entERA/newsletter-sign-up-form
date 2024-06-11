const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.querySelector(".error");

// button
const submit = document.getElementById("submit");
const returnBtn = document.querySelector(".dismiss-btn");

// success text
const userEmail = document.querySelector(".userEmail");

//displays
const newsletter = document.querySelector(".container");
const success = document.querySelector(".success-container");

form.addEventListener("submit" , (e)=> {
  e.preventDefault();
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!email.value.match(emailReg)){
    error.style.display = 'block';
    email.style.color = "var(--Tomato)";
    email.style.border = "1px solid var(--Tomato)";

    setTimeout(() => {
      email.style.color = "black";
      email.style.border = "1px solid var(--Grey)";
      error.style.display = 'none';
    }, 2000);
  }
  else{
    newsletter.style.display = "none";
    success.style.display = "flex";
    userEmail.innerHTML = email.value;
  }
  // console.log(email.value);
});


//return button
returnBtn.addEventListener("click", () => {
  newsletter.style.display = "flex";
  email.innerHTML = "";
  success.style.display = "none";
})

