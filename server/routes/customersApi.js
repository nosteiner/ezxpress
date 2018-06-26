const express = require('express');
const router = express.Router();
const customer = require('../DataAccsess/customers');

router.get('/', (req, res) => { 
    console.log('inside get');
    customer.getAll().then(data => {
        console.log('get from customer Api'+ data);
    res.send(JSON.stringify(data));
    })
});

router.post('/add', (req, res) => {
    customer.create(req.body).then(data => {
    console.log('add from customer Api' + data);
    res.send(JSON.stringify(data));
  })
});
router.put('/update/:id',(req,res)=>{
    console.log(req);
    customer.update(req.body,req.params.id).then(data => {
       console.log(data);
       res.send(JSON.stringify(data));  
       })   
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