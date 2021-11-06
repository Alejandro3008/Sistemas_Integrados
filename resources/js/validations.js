const d = document
function init(){
    if(!localStorage.getItem('token')) window.location.href = 'login.html';
}

function formLoginValidation(){
    const $form = d.querySelector('#form__login'),
        $inputs = d.querySelectorAll('#form__login [required]');
    
    $inputs.forEach(input =>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('input__form-error','none');
        input.insertAdjacentElement('afterend',$span);
    })

    d.addEventListener('keyup', e =>{
        if (e.target.matches('#form__login [required]')){
            let $input = e.target,
                pattern = $input.pattern,
                regex = new RegExp(pattern);
            
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.replace('none','is-active')
            : d.getElementById($input.name).classList.replace('is-active','none');
        }
    })
}

function formSigninValidation(){
    const $form = d.querySelector('#form__signin'),
        $inputs = d.querySelectorAll('#form__signin [required]');
    
    $inputs.forEach(input =>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('input__form-error','none');
        input.insertAdjacentElement('afterend',$span);
    })

    d.addEventListener('keyup', e =>{
        if (e.target.matches('#form__signin [required]')){
            let $input = e.target,
                pattern = $input.pattern,
                regex = new RegExp(pattern);
            
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.replace('none','is-active')
            : d.getElementById($input.name).classList.replace('is-active','none');
        }
    })
}

export {init,formLoginValidation,formSigninValidation}