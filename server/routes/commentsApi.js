const express = require('express');
const router = express.Router();
const comments = require('../DataAccsess/comments');
const customer = require('../DataAccsess/customers');
const motoboy = require('../DataAccsess/motoboys');

router.get('/', (req, res) => { 
    comments.getAll().then(data => {
        console.log('gggg'+ data)
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

router.post('/add', (req, res) => {
    comments.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  }).catch((error) => {
    res.send("error:" + error)
});
});



// //NOT DONE
//  router.put('/update/:id',(req,res)=>{
//      console.log('inside API : '+ req.params.id + req.body.comments);
//      companyToUpdate = req.body.company;
//      console.log (companyToUpdate);
//      companyId = req.params.Id;
//      console.log (req.params.id);
//     company.update(companyToUpdate,companyId).then(data => {
//         res.send(JSON.stringify(data));
//         })  
//         err => {
//             console.error(err)
//           } 
//  });

 

router.delete('/delete/:id', (req, res) => {
    comments.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;