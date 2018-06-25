insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340050','Moran','Gozlan','Tel Aviv');

insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340051','Liron','Dror','Tel Aviv');
insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340052','Tal','Levi','Tel Aviv');
insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340062','Lior','Aviv','Tel Aviv');

insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan88@gmail.com','0524340054','Liam','Tal','Tel Aviv');

insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340055','Lian','Gil','Tel Aviv');

insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340056','Bob','Fik','Tel Aviv');

insert into customers
( email,phoneNumber,firstName,lastName,address)
values
('morangozlan@hotmail.com','0524340057','David','Gir','Tel Aviv');

insert into motoboys
(idNumber,firstName,lastName,email,phoneNumber,rate)
values
('301459848','Tamar','Dir','morangozlan@hotmail.com','053-4740090',4);

insert into motoboys
(idNumber,firstName,lastName,email,phoneNumber,rate)
values
('301459848','Kim','Dror','morangozlan@hotmail.com','053-4740090',3);
insert into motoboys
(idNumber,firstName,lastName,email,phoneNumber,rate)
values
('301459848','Lavi','Dan','morangozlan@hotmail.com','053-4740090',5);
insert into motoboys
(idNumber,firstName,lastName,email,phoneNumber,rate)
values
('301459848','Haim','Hen','morangozlan@hotmail.com','053-4740090',4);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status)
values
(1,1,50,'2018-01-01','2018-01-01','2018-01-01','haim','0524546670','small', 'close');

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status)
values
(2,2,50,'2018-04-01','2018-04-01','2018-04-01','Dina','0524546670','small', 'close');

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status)
values
(3,3,50,'2018-06-01','2018-01-02','2018-01-01','Ziv','0524546670','small', 'close');

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status)
values
(4,4,50,'2018-06-24','2018-06-24',null,'Ziv','0524546670','small', 'Waiting for motoboy');

insert into comments
(comment,customerId,motoboyId,orderId,rate)
values
('nice person',1,1,1,3);

insert into comments
(comment,customerId,motoboyId,orderId,rate)
values
('AWSOME person',2,2,2,3);

insert into comments
(comment,customerId,motoboyId,orderId,rate)
values
('Crazy person',3,3,3,5);