const express = require('express');
const router = express.Router();
const motoboy = require('../DataAccsess/motoboys');

router.get('/', (req, res) => { 
    motoboy.getAll().then(data => {
    res.send(JSON.stringify(data));
    })
});
router.get('/:id', (req, res) => {
    var motoBoy = motoboy.getOneById(req.params.id).then((data)=>{
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send("error:" + error)
    });
  });

router.post('/add', (req, res) => {
    motoboy.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  })
});
router.put('/update/:id', (req, res) => {
    motoboy.update(req.body, req.params.id).then(() => {
        res.send("changes saved");
    }).catch((error) => {
        res.send("error:" + error)
    });
});


//  router.put('/update/:id',(req,res)=>{
//      console.log('inside API : '+ req.params.id + req.body.motoboy);
//      motoboyToUpdate = req.body.motoboy;
//      console.log (motoboyToUpdate);
//      motoboyId = req.params.Id;
//      console.log (req.params.id);
//      motoboy.update(motoboyToUpdate,motoboy).then(data => {
//         res.send(JSON.stringify(data));
//         })  
//         err => {
//             console.error(err)
//           } 
//  });

 

router.delete('/delete/:id', (req, res) => {
    motoboy.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;