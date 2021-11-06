const d = document;

function sendFormInfoLogin(){
    d.addEventListener('submit', e =>{
        const $form = d.querySelector('#form__login');
        e.preventDefault();
        let data = new FormData($form);
        
        // * Envio con axios de la informacion del inicio de sesion
    })
}

function sendFormInfoSignin(){
    d.addEventListener('submit', e =>{
        const $form = d.querySelector('#form__signin');
        e.preventDefault();
        let data = new FormData($form);
        
        // * Envio con axios de la informacion del registro
    })
}

export {sendFormInfoLogin,sendFormInfoSignin}