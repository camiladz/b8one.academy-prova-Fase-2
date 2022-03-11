const init = () => {
  const inputEmail = document.querySelector('#input_email');
  const inputPassword = document.querySelector('#input_password');
  const submitButton = document.querySelector('.login-enter')


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
            const emailError = document.querySelector('.input-email__erro')
            data === true ? window.location.href = "./index.html" : emailError.style.display = "block"
            setTimeout(() => {
                emailError.style.display = "none"
              }, 2000)
          })
        }) 
      }
    

window.onload = init;




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

