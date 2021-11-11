const d = document;

//* --------------- Direccionar hacia registro o inicio de sesion de empleados ---------------
function changeScreenEmployee($btnRegister,$btnLogin){
    d.addEventListener('click', e =>{
        if(e.target.matches($btnRegister)){
            window.location.href = 'signinEmployee.html';
        }
    })

    d.addEventListener('click', e =>{
        if(e.target.matches($btnLogin)){
            window.location.href = 'loginEmployee.html';
        }
    })
}

//* --------------- Direccionar hacia registro o inicio de sesion de administradores ---------------
function changeScreenAdmin($btnRegister,$btnLogin){
    d.addEventListener('click', e=>{
        if(e.target.matches($btnRegister)){
            window.location.href = 'siginAdmin.html'
        }
    })

    d.addEventListener('click', e=>{
        if(e.target.matches($btnLogin)){
            window.location.href = 'loginAdmin.html'
        }
    })
}

//* --------------- Direccionar hacia Administradores o Empleados en el index --------------- 
function selectJob($btnAdmin,$btnEmployee){
    d.addEventListener('click', e=>{
        if(e.target.matches($btnAdmin) || e.target.matches(`${$btnAdmin} *`)){
            window.location.href = 'loginAdmin.html'
        }
        if(e.target.matches($btnEmployee) || e.target.matches(`${$btnEmployee} *`)){
            window.location.href = 'loginEmployee.html'
        }
    })
}

//* --------------- Regresar al index --------------- 
function home($titleHome){
    d.addEventListener('click', e =>{
        if(e.target.matches($titleHome)){
            window.location.href = 'index.html'
        }
    })
}

export{changeScreenEmployee, changeScreenAdmin, selectJob, home}