use ezxpress;
ALTER TABLE orders ADD CONSTRAINT status FOREIGN KEY (status) REFERENCES status(status);

 CREATE TABLE status (
 status INT  , 
 name  VARCHAR(20)
 );
 
 insert into status
(status,name)
values
(1,'open');

 insert into status
(status,name)
values
(2,'wating for a Motoboy');

 insert into status
(status,name)
values
(3, 'on the way');

 insert into status
(status,name)
values
(4, 'ressived');

insert into status
(status,name)
values
(5, 'closed');

insert into status
(status,name)
values
(6, 'Canceled');