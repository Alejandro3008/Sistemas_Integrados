const express = require('express'),
    user = express.Router(),
    jwt = require('jsonwebtoken'),
    multer = require('multer'),
    upload = multer(),
    db = require('../config/database'),
    verifiactions = require('../middleware/dataValidations');


user.post('/login', upload.none(), async (req,resp,next) =>{
    const {email,password} = req.body;
    let respEmail = verifiactions.verifyString(email),
        respPassword = verifiactions.verifyString(password),
        lengthPassword = verifiactions.checkLength(8,password);
    if(respEmail && respPassword && lengthPassword){
        const query = `SELECT * FROM employees WHERE employee_email = '${email}' AND employee_password = '${password}';`,
            rows = await db.query(query);
        if(rows.length == 1){
            return resp.status(200).json({code: 200, message: rows});
        }else{
            return resp.status(200).json({code: 200, message:'No fuiste encontrado en la base de datos...'})
        }
    }else{
        return resp.status(200).json({code: 200, message: 'Verifica el tipo de dato o que no esten vacios...'});
    }
})

user.post('/signin',upload.none(), async (req,resp,next) =>{
    const {name,lastname,cellphone,email,emailAdmin,password} = req.body;
    const intCell = parseInt(cellphone);
    let respName = verifiactions.verifyString(name),
        resplastN = verifiactions.verifyString(lastname),
        respCell = verifiactions.verifyNumber(intCell),
        respEmail = verifiactions.verifyString(email),
        respEmailAdmin = verifiactions.verifyString(emailAdmin),
        respPassword = verifiactions.verifyString(password),
        lengthPassword = verifiactions.checkLength(8,password)
        lengthCell = verifiactions.checkLength(10,intCell);

    if(respName && resplastN && respCell && respEmail && respEmail && respEmailAdmin && respPassword && lengthPassword && lengthCell){
        const admin = `SELECT * FROM admin WHERE admin_mail = '${emailAdmin}';`;
        resp = await db.query(admin);
        if (resp.length == 1){
            const idAdmin = resp[0].admin_id;
            const query = `INSERT INTO employees(employee_name, employee_lastnames,employee_phone, employee_email, employee_password, employee_admin) VALUES ('${name}', '${lastname}', ${intCell},'${email}', '${password}', '${idAdmin}');`
            rows = await db.query(query);
            if(rows.affectedRows == 1){
                resp.status(201).json({code: 201, message: 'Administrador agregado.'});
            }else{
                resp.status(500).json({code: 500, message: 'Hubo un error.'});
            }
        }else{
            return resp.status(201).json({code:201, message:'Administrador no encontrado.'});
        }
    }else{
        return resp.status(201).json({code:201, message:'Verifica los campos'});
    }
})

// user.post('/login', async (req,resp,next) =>{
//     const {admin_mail,admin_password} = req.body;
//     const query = `SELECT * FROM Administrators WHERE admin_mail = '${admin_mail}' AND admin_password = '${admin_password}';`;
//     const rows = await db.query(query);

//     if(admin_mail && admin_password){
//         if(rows.length == 1){
//             const token = jwt.sign({
//                 admin_id : rows[0].admin_id,
//                 admin_mail : rows[0].admin_mail
//             },'debugkey')
//             return resp.status(200).json({code: 200, message: token});
//         }else{
//             return resp.status(401).json({code: 401, message: 'email y/o contraseña incorrectos.'});
//         }
//     }
//     return resp.status(500).json({code: 500, message: 'Campos incompletos'});
// })

module.exports = user;