const express = require('express');
const router = express.Router();
const users = require('../DataAccsess/users');

router.get('/', (req, res) => { 
    users.getAll().then(data => {
    res.send(JSON.stringify(data));
    })
});

router.get('/:id', (req, res) => {
    var users = users.getOneById(req.params.id).then((data)=>{
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send("error:" + error)
    });
  });

router.post('/add', (req, res) => {
    console.log('add new user' + req.body.position)
    users.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  })
});
router.put('/update/:id', (req, res) => {
    users.update(req.body.users, req.params.id).then(() => {
        res.send(JSON.stringify(req.body.users));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

router.get('/getClosesMoto/:lat/:lng', (req, res) => {
    
    users.getClosesMoto(req.params.lat,req.params.lng)
           .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.send("error:" + error)  
            });
    })
     
 

router.delete('/delete/:id', (req, res) => {
    user.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;