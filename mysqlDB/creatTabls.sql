use ezxpress;
 
CREATE TABLE customers (
  customerId INT AUTO_INCREMENT PRIMARY KEY, 
  email VARCHAR(40),
  phoneNumber VARCHAR(20) ,
  firstName VARCHAR(20),
  lastName VARCHAR(20), 
  address VARCHAR(20),
  active BOOLEAN
);

CREATE TABLE motoboys (
  motoboyId INT AUTO_INCREMENT PRIMARY KEY, 
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  email VARCHAR(40),
  phoneNumber VARCHAR(20) ,
  rate INT,
  photo  VARCHAR(150),
  latitude FLOAT,
  longitude FLOAT,
  active BOOLEAN,
  position GEOMETRY
);

 CREATE TABLE users (
 userId   INT AUTO_INCREMENT PRIMARY KEY,
 userName VARCHAR(10), 
 password  VARCHAR(5),
 customerId INT,
 motoboyId INT, 
 FOREIGN KEY(customerId) REFERENCES customers(customerId),
 FOREIGN KEY(motoboyId) REFERENCES motoboys(motoboyId)
 );

 CREATE TABLE status (
 statusId INT PRIMARY KEY, 
 name  VARCHAR(20)
 );
 
CREATE TABLE orders (
 orderId INT not null  AUTO_INCREMENT PRIMARY KEY, 
 customerId INT,
 motoboyId INT,
 localAddress VARCHAR(40),
 latitudeOriginAddress float,
 longitudeOriginAddress float,
 latitudeDestAddress float,
 longitudeDestAddress float,
 price INT ,
 orderDate DATETIME,
 collectDate DATETIME,
 deliveryDate DATETIME,
 contactDestination  VARCHAR(20),
 phoneDestination  VARCHAR(20),
 deliveryType VARCHAR(20),
 description VARCHAR(100),
 statusId INT,
 active BOOLEAN,
 FOREIGN KEY(statusId) REFERENCES status(statusId),
 FOREIGN KEY(customerId) REFERENCES customers(customerId),
 FOREIGN KEY(motoboyId) REFERENCES motoboys(motoboyId)
);
CREATE TABLE comments (
 commentId INT  not null AUTO_INCREMENT PRIMARY KEY, 
 comment  VARCHAR(20),
 customerId INT,
 motoboyId INT,
 orderId INT,
 rate INT,
 active BOOLEAN,
 FOREIGN KEY(customerId) REFERENCES customers(customerId),
 FOREIGN KEY(motoboyId) REFERENCES motoboys(motoboyId),
 FOREIGN KEY(orderId) REFERENCES orders(orderId)
 );
 