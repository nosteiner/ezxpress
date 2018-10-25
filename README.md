# Ezxpress

The website is a platform for package deliveries
Our vision was to allow people who need a delivery person to easily find that person, and vice versa. Anyone can sign up for either giving or receiving service quickly and simply.

## Development server

Run `ng server.js` for a dev server. Navigate to `http://localhost:3000/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Description

This Angular 6 and nodejs project was created as a final project for a WEB bootcamp by 4 students, as a 10 day hackathon.

After the hackathon had ended, I have solved all of the remaining bugs, rewrote the authentication system, and refactored the entire front end by myself.


The website is a platform for package deliveries
Our vision was to allow people who need a delivery person to easily find that person, and vice versa. Anyone can sign up for either giving or receiving service quickly and simply.


The end goal is for a matchmaking system to find the best relevant delivery guy for a requested job, and to find the best job for a delivery guy, based on real-time distance.


A connected client can place a new delivery request, and their location will be auto-completed by google’s API. They can change their address manually to any other address.
After filling in all of the details, the system calculates the delivery price by distance to the destination, and by the package’s weight.
Then, the client is prompted to approve the order

After the client approves the order, it is added to the DB. It then appears for the client in their orders table personal page. The order also appears in the "open orders" page for delivery persons for assignment.


Delivery persons can either see their own orders, or the unassigned (open) orders.
Clients can only see their own orders.


Any user (client or delivery person) can click on the "eye" icon in the right hand side of a delivery table, in order to see a delivery's details on a separate page.

In the delivery's page, the delivery person can update the package's status.
Once a delivery person has assigned a package to themselves, an SMS message is sent to the relevant client.

A package is not marked "sent" until the delivery person had been delivered, and the client has signed in the delivery person's smartphone. The signature is then sent to the delivery person's provided e-mail.

## Known Bugs and Missing Features

All the forms lack validations
Some server error messages are currently unhandled, such as “no gps” or “no internet connection”
Updates are currently done using Observables. It is planned to use socket.io
It is planned to update delivery person’s locations in real time, and to display relevant packages.
It is planned to add secure money transfer inside the platform.

## Further help

Contact me: no.steiner@gmail.com
