// * ---------- Dependencias ----------
const express = require('express'),
    morgan = require('morgan'),
    app = express();

// * ---------- Rutas ----------
const data = require('./routes/data'),
    user = require('./routes/user');

// * ---------- Middleware ----------
const auth = require('./middleware/authorization'),
    cors = require('./middleware/cors'),
    index = require('./middleware/index'),
    notFound = require('./middleware/notFound');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',index)
app.use('/user',user)
app.use(auth)
app.use('/employee',data)
app.use(notFound)
app.listen(3000, ()=>{
    console.log('Server is running...');
})