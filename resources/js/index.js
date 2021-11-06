import {changeScreenLogin,changeScreenSignin} from "./changePages.js";
import { sendFormInfoLogin, sendFormInfoSignin } from "./sendInfo.js";
import {init,formLoginValidation, formSigninValidation} from "./validations.js";

const d = document;

d.addEventListener('DOMContentLoaded', e =>{
    // window.onload = init(); // *Activar cuando se creen los token :)
    changeScreenLogin('#btn__register');
    changeScreenSignin('#btn__login');
    formLoginValidation();
    formSigninValidation()
    sendFormInfoLogin()
    sendFormInfoSignin()
})