const express = require('express'),
    admin = express.Router(),
    jwt = require('jsonwebtoken'),
    multer = require('multer'),
    upload = multer(),
    db = require('../config/database'),
    verifiactions = require('../middleware/dataValidations');

admin.post('/login', upload.none() ,async (req,resp,next) =>{
    const {email,password} = req.body;
    let respEmail = verifiactions.verifyString(email),
        respPassword = verifiactions.verifyString(password);
        lengthPassword = verifiactions.checkLength(8,password);
    if(respEmail && respPassword && lengthPassword){
        const query = `SELECT * FROM admin WHERE admin_mail = '${email}' AND admin_password = '${password}';`,
            rows = await db.query(query);
        if(rows.length == 1){
            return resp.status(200).json({code: 200, message: rows});
        }else{
            return resp.status(401).json({code: 401, message: 'No fuiste encontrado en la base de datos...'});
        }
    }else{
        return resp.status(401).json({code:401, message:'Verifica el tipo de dato o que no esten vacios...'});
    }
});

admin.post('/signin', upload.none(), async (req,resp,next) =>{
    const {name,email,password} = req.body;
    let respName = verifiactions.verifyString(name),
        respEmail = verifiactions.verifyString(email),
        respPassword = verifiactions.verifyString(password),
        lengthPassword = verifiactions.checkLength(8,password);
    if(respName && respEmail && respPassword && lengthPassword){
        const query = `INSERT INTO admin (admin_name,admin_mail, admin_password) VALUES ('${name}', '${email}', '${password}');`
        const rows = await db.query(query);
        rows.affectedRows == 1 ? resp.status(201).json({code: 200, message: 'Administrador agregado.'}) : resp.status(500).json({code: 500, message: 'Hubo un error.'});
    }else{
        return resp.status(200).json({code:200, message:'Verifica los datos.'})
    }
})

module.exports = admin;
