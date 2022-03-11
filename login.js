const init = () => {
  const inputEmail = document.querySelector('#input_email');
  const inputPassword = document.querySelector('#input_password');
  const submitButton = document.querySelector('.login-enter')

 
    if(submitButton) {
      if(submitButton) {
        submitButton.addEventListener('click', (event) => {
          event.preventDefault();
    
          fetch("https://test-final.b8one.academy/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: inputEmail.value, password: inputPassword.value
            })
          }).then((response) => {
            return response.json();
          }).then((data) => {
            console.log(data)
          })
        }) 
      }
    }
}

window.onload = init;
 







//  /* -- validar email -- */
//   function validateEmail() {
//       var email = document.querySelector('.login-form__input');
//       var erro = document.querySelector('.erro');

//       if(!email.checkValidity()){
//           erro.innerHTML = "Este e-mail não existe, você tem outro?";
//       }

//   }

//   function changeMessage(){
//       var erro = document.querySelector('.erro');
//       if(erro.innerHTML == "Este e-mail não existe, você tem outro?"){
//           erro.innerHTML = "";
//       }
//   }


 /* -- mostrar senha -- */
 let mostrarSenha = document.querySelector('.login-form__input--pass');
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

