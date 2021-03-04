const express = require('express');
const bodyParser = require('body-parser');

const visitor = require('./routes/visitor');
//const db = require('./util/database');
const sequelize = require('./util/database');

const Visitor = require('./models/visitor');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());


app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});



//routers
app.use('/api/visitor', visitor);

//PORT


const port = process.env.PORT || 3000;
sequelize
    .sync()
    .then( result => {
        //console.log(result);
        app.listen(port, ()=>{console.log(`Listening in ${port}...`)});
    })
    .catch(err => {
        console.log(err)
    })

