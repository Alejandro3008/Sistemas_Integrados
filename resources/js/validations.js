const d = document

function init(){
    if(!localStorage.getItem('token')) window.location.href = 'login.html';
}

function formValidation($form){
    const $formInfo = d.querySelector(`${$form}`),
        $inputs = d.querySelectorAll(`${$form} [required]`);
    $inputs.forEach(input =>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('input__form-error','none');
        input.insertAdjacentElement('afterend',$span);
    })

    d.addEventListener('keyup', e =>{
        if (e.target.matches(`${$form} [required]`)){
            let $input = e.target,
                pattern = $input.pattern,
                regex = new RegExp(pattern);
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.replace('none','is-active')
            : d.getElementById($input.name).classList.replace('is-active','none');
        }
    })
}

export {init,formValidation}