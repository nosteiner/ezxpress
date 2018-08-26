const express = require('express');
const router = express.Router();
const order = require('../DataAccsess/orders');
const expressJwt = require('express-jwt');
const checkIfAuthenticated = expressJwt({
  secret: 'thisIsTopSecret'
}); 


router.get('/',checkIfAuthenticated, (req, res) => {
    order.getOrders(req.user).then(data => {
        console.log("===============================================================")
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

router.post('/add',checkIfAuthenticated, (req, res) => {
   let  newOrder = req.body;
   newOrder.customerId = req.user.customerId;
    order.create(newOrder).then(data => {
    res.send(JSON.stringify(data));
  }).catch((error) => {
    res.send("error:" + error)
});
});

//  router.put('/update/:id',(req,res)=>{
//      dataUpdate = req.body
     
//      orderId = req.params.id;
//      console.log(orderId)
//      order.update(dataUpdate, orderId).then(data => {
//          console.log("first wrong api")
//         res.send(JSON.stringify(data));
//         })  
//         err => {
//             console.error(err)
//           } 
//  });

 router.put('/updateStatus/:id',checkIfAuthenticated ,(req,res)=>{
    let  data = req.body;
    data.motoboyId = req.user.motoboyId;
    orderId = req.params.id;
    order.update(data, orderId).then(data => {
        console.log("good api")
       res.send(JSON.stringify(data));
       }).catch((error) => {
        res.send("error:" + error)
    });
});
 

router.delete('/delete/:id', (req, res) => {
    order.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router;