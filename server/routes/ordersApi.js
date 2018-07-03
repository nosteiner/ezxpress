const express = require('express');
const router = express.Router();
const order = require('../DataAccsess/orders');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({
  secret: 'thisIsTopSecret'
}); 


router.get('/',checkIfAuthenticated, (req, res) => {
    order.getOrders(req.user).then(data => {
        console.log(data)
        res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

// router.get('/', (req, res) => {
//     order.getAll(req.user).then(data => {
//         res.send(JSON.stringify(data));
//     }).catch((error) => {
//         res.send("error:" + error)
//     });
// });

router.post('/add', (req, res) => {
    order.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  }).catch((error) => {
    res.send("error:" + error)
});
});

 router.put('/update/:id',(req,res)=>{
     console.log("------------------------------------------------------------------")
     console.log('inside API : '+ req.params.id + req.body.order);
     orderToUpdate = req.body.order;
     console.log (orderToUpdate);
     orderId = req.params.Id;
     console.log (req.params.id);
     order.update(orderToUpdate,orderId).then(data => {
         console.log("++++++++++++++++++++++")
         console.log(data[0])
        res.send(JSON.stringify(data));
        })  
        err => {
            console.error(err)
          } 
 });

 

router.delete('/delete/:id', (req, res) => {
    order.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;