const express = require('express');
const router = express.Router();
const users = require('../DataAccsess/users');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({
  secret: 'thisIsTopSecret'
}); 

router.get('/', (req, res) => { 
    users.getAll().then(data => {
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});


router.get('/:id', (req, res) => {
    var users = users.getOneById(req.params.id).then((data)=>{
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send("error:" + error)
    });
  });

  router.get('/currentUser', checkIfAuthenticated,  (req, res) => {
    users.getUserType(req.user.id).then((data)=>{
         res.send(data.customerId);
     }).catch((error) => {
         res.send("error:" + error)
     });
   });
 

router.post('/add', (req, res) => {
    users.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  }).catch((error) => {
    res.send("error:" + error)
});
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
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;