# 




# Klippa-Tech-Assignment

Create a basic calculator React app.

- Working site : [here](https://klippa-calculation-game.netlify.app/)

## Table of contents

- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Technologies](#technologies)
- [Features](#features)
- [Screenshots](#screenshots)

## Requirements

- The app needs to have a header for a logo and a menu.
- On the first screen of this app, the app selects a random calculation from a database of 5 different. For example a calculation could be: 3 \* 6 . You can make the 5 calculations as complicated as you want. You can use a database of choice. Also store a hash of each calculation in the database.

- In the interface, list the 5 calculations and highlight the selected calculation per session.
- Besides the calculation there should be an input field in the database, which the user can use to give the answer to the calculation. In the example above, the answer should be 18.
- Next to the input field there should be a submit button to send in an answer.

- If the user submits the submit button and the answer is correct, send the user to a thank you page in the app (use a funny GIF on the thank you page). From the thank you page he can go to the default page again to get a new random calculation and go again.

- If the answer is wrong, the user should get a nice notification that his answer is not correct and that he should try again.
- The maximum amount of tries is 3. If the user tries more than 3 times, the user failed and is not allowed to try again.
- Make sure you store in the database how many tries a user does before he gets the answer correct.
- Also make sure to store, which questions the user got right or wrong.
- The webpage can be used by multiple people.

## Technologies

Frontend:

- React
- Semantic UI

Backend:

- NodeJS
- REST API
- MongoDB
- Mongoose
- Express

## Clone this repository

\$ git clone https://github.com/DegirmenciOmer/Klippa-Tech-Assignment.git

## Install backend
\$ npm install

## Run the server with nodemon
\$ npm run dev

## Run the server once
\$ npm start

## Data import / destroy
\$ npm run data:import
<br/>
\$ npm run data:destroy

## Run the client
\$ cd client/
\$ npm start


## Screenshots

<img src="" width="400" />
<img src="" width="400" />
<img src="" width="400" />
<img src="" width="400" />
<br/>
