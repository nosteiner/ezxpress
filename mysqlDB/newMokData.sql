insert into customers
(email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340050','Moran','Gozlan','Tel Aviv',true);
insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340051','Liron','Dror','Tel Aviv',true);
insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340052','Tal','Levi','Tel Aviv',true);
insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340062','Lior','Aviv','Tel Aviv',true);

insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan88@gmail.com','0524340054','Liam','Tal','Tel Aviv',true);

insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340055','Lian','Gil','Tel Aviv',true);

insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340056','Bob','Fik','Tel Aviv',true);

insert into customers
( email,phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','0524340057','David','Gir','Tel Aviv',true);

insert into motoboys
(firstName,lastName,email,phoneNumber,rate,active)
values
('Tamar','Dir','morangozlan@hotmail.com','053-4740090',4,true);

insert into motoboys
(firstName,lastName,email,phoneNumber,rate,active)
values
('301459848','Kim','Dror','morangozlan@hotmail.com','053-4740090',3,true);
insert into motoboys
(firstName,lastName,email,phoneNumber,rate,active)
values
('301459848','Lavi','Dan','morangozlan@hotmail.com','053-4740090',5,true);

 insert into status
(statusId,name)
values
(1,'New Order');

 insert into status
(statusId,name)
values
(2,'wating for pickUp');

 insert into status
(statusId,name)
values
(3, 'On the way');
 insert into status
(statusId,name)
values
(4, 'deliverd');
insert into status
(statusId,name)
values
(888, 'Canceled');


insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,statusId,active)
values
(1,1,50,'haim','0524546670','small', 3,true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,statusId,active)
values
(2,2,50,'Dina','0524546670','small', 2,true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,statusId,active)
values
(3,3,50,'0524546670','small', 1,true);


insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('nice person',1,1,1,3,true);

insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('AWSOME person',2,2,2,3,true);

insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('Crazy person',3,3,3,5,true);