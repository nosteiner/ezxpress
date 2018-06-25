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
  idNumber VARCHAR(9),
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  email VARCHAR(40),
  phoneNumber VARCHAR(20) ,
  rate INT,
  photo  VARCHAR(20),
  latitude FLOAT,
  longitude FLOAT,
  active BOOLEAN
);
 
CREATE TABLE orders (
 orderId INT not null  AUTO_INCREMENT PRIMARY KEY, 
 customerId INT,
 motoboyId INT,
 latitudeOriginAddress float,
 longitudeOriginAddress float,
 latitudeDestAddress float,
 longitudeDestAddress float,
 price int ,
 orderDate DATE,
 collectDate DATE,
 deliveryDate DATE,
 contactDestination  VARCHAR(20),
 phoneDestination  VARCHAR(20),
 deliveryType VARCHAR(20),
 status VARCHAR(20),
 active BOOLEAN,
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