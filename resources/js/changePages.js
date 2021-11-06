const d = document;
function changeScreenLogin($btnRegister){
    d.addEventListener('click', e =>{
        if(e.target.matches($btnRegister)){
            window.location.href = 'signin.html';
        }
    })
}
function changeScreenSignin($btnSignIn){
    d.addEventListener('click', e =>{
        if(e.target.matches($btnSignIn)){
            window.location.href = 'login.html';
        }
    })
}

export{changeScreenLogin, changeScreenSignin}