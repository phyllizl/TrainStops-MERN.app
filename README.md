# TrainStops
An app that gives users "point-of-interests" locations nearby MRT stations. 

## Description
The project is to help you find hotspots and interesting locations within a 500m radius of MRT stations. It's use is mainly convenience - it has a simple interface and it is fun to explore around our MRT stations.  

### Technical Used
- Javascript
- React
- Express
- Mongoose
- MongoDB
- Bulma


### Wireframes

1. The Landing Page
<img width="441" alt="Screenshot 2021-07-29 at 9 10 02 PM" src="https://user-images.githubusercontent.com/78044759/127498054-8ff347e0-c495-4f2b-94ab-66ad60e8d3ec.png">

2. Example of a Hotspot Page
<img width="468" alt="Screenshot 2021-07-29 at 9 10 18 PM" src="https://user-images.githubusercontent.com/78044759/127498145-82ac8e14-707c-4c91-bb57-1289eb65289b.png">

3. Example of a User Profile Page
<img width="453" alt="Screenshot 2021-07-29 at 9 10 25 PM" src="https://user-images.githubusercontent.com/78044759/127498239-46aa062b-cae4-4bbb-8b2d-53a6660064f3.png">


### User Stories
A user should be able to see a landing page with lists of MRT Lines. Upon selecting the MRT line, the list drops down to show the MRT stations in that line. A user should be able to click on the chosen station - this will redirect user to a page that shows 20 "hotspots" within 500m from the chosen MRT stations. 

To view details and reviews on a specific "hotspot", the user simply has to click on it. 

A visitor must sign up + log in to be able to write reviews. A logged-in user must be able to view his/her profile with all past reviews written. 

### Planning and Development Process
Development of Model Schema for the User, Hotspot, Mrt and Reviews. Basic Express + React framework was set up. Fetched data of from Google Maps API - set radius to 500m of MRT station + filtered out location type of "point of interest". User autentication created. 

### Problem-Solving Strategy
We decided to revise our models schema to make fetching the required data cleaner and more straightforward. 
In order for our entire App to register a "logged in" user, we had to useContext in our React App to store a state that tracks the "logged in" user. 

### APIs Used
- Google Maps: https://developers.google.com/maps/documentation/places/web-service/overview

### Acknowledgments
MRT list taken from https://github.com/xkjyeah/singapore-postal-codes/blob/master/mrt_stations.json
