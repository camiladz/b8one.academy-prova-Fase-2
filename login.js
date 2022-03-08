/* -- validar email -- */
function validateEmail() {
    var email = document.querySelector('.login-form__input');
    var erro = document.querySelector('.erro');

    if(!email.checkValidity()){
        erro.innerHTML = "Este e-mail não existe, você tem outro?";
    }

}

function changeMessage(){
    var erro = document.querySelector('.erro');
    if(erro.innerHTML == "Este e-mail não existe, você tem outro?"){
        erro.innerHTML = "";
    }
}

/* -- mostrar senha -- */
let mostrarSenha = document.querySelector('.login-form__input--pass');
console.log(mostrarSenha)
let icon = document.querySelector('.visible__button');

  icon.addEventListener("click", function(){
       if(mostrarSenha.type == 'password'){
           mostrarSenha.type ='text';
           icon.src = 'assets/images/login/visible.svg';
       } else {
           mostrarSenha.type = 'password';
           icon.src = 'assets/images/login/visible-off.svg';
       }
   })

