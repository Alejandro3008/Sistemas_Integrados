import {changeScreenEmployee, changeScreenAdmin,selectJob, home} from "./changePages.js";
import { sendFormInfoLogin} from "./sendInfo.js";
import {init,formValidation} from "./validations.js";

const d = document;

d.addEventListener('DOMContentLoaded', e =>{
    // window.onload = init(); // *Activar cuando se creen los token :)
    changeScreenEmployee('#btnRegister__employee','#btnLogin__Employee');
    changeScreenAdmin('#btnRegister__Admin','#btnLogin__Admin');
    selectJob('#containerAdmin','#containerEmployee');
    home('#workIT');
    formValidation('#formLogin__Admin');
    formValidation('#formSignin__Admin');
    formValidation('#formLogin__Employee');
    formValidation('#formSignin__Employee');
    sendFormInfoLogin();
})