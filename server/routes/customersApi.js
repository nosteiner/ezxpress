const express = require('express');
const router = express.Router();
const customer = require('../DataAccsess/customers');
var users = require('../DataAccsess/users');

router.get('/', (req, res) => { 
    console.log('inside get');
    customer.getAll().then(data => {
        console.log('get from customer Api'+ data);
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});


router.get('/:id', (req, res) => {
    var Customer = customer.getOneById(req.params.id).then((data)=>{
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send("error:" + error)
    });
  });

router.post('/add', (req, res) => {
    let username = req.body.userName
    let pw = req.body.password
    
    customer.create(req.body).then(result => {
            
            let dataToSend = {userName: username,customerId: result.customerId,password : pw}
            
            users.model.create(dataToSend)
            //console.log('add from customer Api' + data);
            res.send(JSON.stringify(result));
        })
     
   
  
  });


router.put('/update/:id',(req,res)=>{
    console.log(req);
    customer.update(req.body,req.params.id).then(data => {
       console.log(data);
       res.send(JSON.stringify(data));  
       }).catch((error) => {
        res.send("error:" + error)
    });   
});

//delete
router.put('/delete/:id', (req, res) => {
    motoboy.update(req.body.motoboy, req.params.id).then(() => {
        res.send(JSON.stringify(req.body.motoboy));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;