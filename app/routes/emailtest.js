var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/*router.get('/',function(req,res){
    res.render('emailtest');
});*/

router.get('/', function(req,res){
    var transporter = nodemailer.createTransport({
        host: 'email.cloud.compas.cs.stonybrook.edu',
        port:24,
        auth: {
            user: 'cse356',
            pass: 'cse356'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    var mailOpton = {
        from:'cse356@email.cloud.compas.cs.stonybrook.edu',
        to: '892971405@qq.com',
        subject: "test email",
        text:"123"
    };

    transporter.sendMail(mailOpton, function(error, info){
        if (error) {
          console.log("error is:");
          console.log(error);
        } 
          else{console.log('Email sent: ');
          res.send('get');}
        });
    
});

module.exports = router;
