const Visitor = require('../models/visitor');

const bcrypt = require('bcrypt');  

exports.visitorCtrl = async(req, res, next)=> {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;

    try{

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt); 

        const vistor = await Visitor.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password_hash:hashed,   
            mobile: mobile
        });

        res.status(200).send(vistor);

    }catch(err) {
        res.status(401).send(err);
    }
    



   


  //  res.send(mobile);

}

exports.getVisitors = async(req, res, next)=> {
   
    try{
        const visitor = await Visitor.findAll();
        res.status(200).send(visitor);
    }
    catch(error) {

    }
}