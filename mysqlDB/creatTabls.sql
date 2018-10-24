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
 id INT AUTO_INCREMENT PRIMARY KEY,
 userName VARCHAR(10), 
 password  VARCHAR(8),
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
 destAddress VARCHAR(40),
 price INT ,
 orderDate DATETIME,
 collectDate DATETIME,
 deliveryDate DATETIME,
 contactDestination  VARCHAR(20),
 phoneDestination  VARCHAR(20),
 deliveryType VARCHAR(20),
 description LONGTEXT,
 statusId INT,
 active BOOLEAN,
 signature VARCHAR(200),
 FOREIGN KEY(statusId) REFERENCES status(statusId),
 FOREIGN KEY(customerId) REFERENCES customers(customerId),
 FOREIGN KEY(motoboyId) REFERENCES motoboys(motoboyId)
);

 