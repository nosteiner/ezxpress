use ezxpress;

ALTER TABLE orders
ADD localAddress VARCHAR(40) ;

ALTER TABLE comments
ADD active boolean;

ALTER TABLE customers
ADD active boolean ;

ALTER TABLE orders
ADD active boolean;

ALTER TABLE motoboys
ADD active boolean;