const btn = document.getElementById('btn');

const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirm = document.getElementById('confirm');

const ul = document.getElementById('u-l')
const li = document.createElement('li');



function passError(e){
 if(pass.value === "" || null || confirm.value === "" || null || email.value === "" || null){
   ul.append(li);
   li.innerText = " Please fill in all the required fields.";
 }
 e.preventDefault()
}
btn.addEventListener("click", passError);


function check(){
  if(pass.value !== confirm.value){
    ul.append(li);
    li.innerText = "password does not match";
  }else{
    
  }
}

btn.addEventListener("click", check);