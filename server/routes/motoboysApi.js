const express = require('express');
const router = express.Router();
const motoboy = require('../DataAccsess/motoboys');

router.get('/', (req, res) => { 
    motoboy.getAll().then(data => {
    res.send(JSON.stringify(data));
    })
});

router.post('/add', (req, res) => {
    motoboy.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  })
});

 router.put('/update/:id',(req,res)=>{
     console.log('inside API : '+ req.params.id + req.body.motoboy);
     motoboyToUpdate = req.body.motoboy;
     console.log (motoboyToUpdate);
     motoboyId = req.params.Id;
     console.log (req.params.id);
     motoboy.update(motoboyToUpdate,motoboy).then(data => {
        res.send(JSON.stringify(data));
        })  
        err => {
            console.error(err)
          } 
 });

 

router.delete('/delete/:id', (req, res) => {
    motoboy.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;