const d = document;

function sendFormInfoLogin(){
    d.addEventListener('submit', e =>{
        const formName = e.target.id,
            $form = d.querySelector(`#${formName}`);
        e.preventDefault();
        const dataForm = new FormData($form);
        if(formName == 'formLogin__Admin'){
            console.log('coinciden...');
            axios({
                method: 'POST',
                url: 'http://localhost:3000/admin/login',
                data: dataForm
            })
            .then(async resp =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Bienvenido ${resp.data.message[0].admin_name}`,
                    showConfirmButton: true
                })
                console.log(resp);
                window.location.href = 'adminHome.html'
            })
            .catch(async error =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ocurrio un error, verifica los datos',
                    showConfirmButton: true
                })
                console.log(error)
            })
        }

        if(formName == 'formLogin__Employee'){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/employee/login',
                data: dataForm
            })
            .then(async resp =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Bienvenido ${resp.data.message[0].employee_name}`,
                    showConfirmButton: true
                })
                console.log(resp);
                window.location.href = 'employeeHome.html'
                
            })
            .catch(async error =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ocurrio un error, verifica los datos',
                    showConfirmButton: true
                })
                console.log(error)
            })
        }
        if(formName == 'formSignin__Admin'){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/admin/signin',
                data: dataForm
            })
            .then(async resp =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Te has registrado correctamente ${dataForm.get('name')}`,
                    showConfirmButton: true
                })
                console.log(resp);
                window.location.href = 'loginAdmin.html'
            })
            .catch(async error =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ocurrio un error, verifica los datos',
                    showConfirmButton: true
                })
                console.log(error)
            })
        }
        if(formName == 'formSignin__Employee'){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/employee/signin',
                data: dataForm
            })
            .then(async resp =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Te has registrado correctamente ${dataForm.get('name')}`,
                    showConfirmButton: true
                })
                console.log(resp);
                window.location.href = 'loginEmployee.html'
            })
            .catch(async error =>{
                await Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ocurrio un error, verifica los datos',
                    showConfirmButton: true
                })
                console.log(error)
            })
        }
    })
}
export {sendFormInfoLogin}