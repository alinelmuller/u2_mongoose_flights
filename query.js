const express = require('express') 
const db = require('./db') 
const flightController = require('./controller/flightController') 
const airportController = require('./controller/airportController')  
const bodyParser = require('body-parser') 
const logger = require('morgan') 

const PORT = process.env.PORT || 3001 

const app = express() 
app.use(logger('dev')) 
app.use(bodyParser.json()) 

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:')) 

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)) 

app.get('/', (req, res) => res.send('Search for: /flights or /airports')) 

// Flights
app.get('/flights', flightController.getAllFlights);  
app.get('/flights/:id', flightController.getFlightById); 
app.post('/flights', flightController.createFlight);  
app.put('/flights/:id', flightController.updateFlight);  
app.delete('/flights/:id', flightController.deleteFlight); 

// Airports
app.get('/airports', airportController.getAllAirports);  
app.get('/airports/:id', airportController.getAirportById);
app.post('/airports', airportController.createAirport);  
app.put('/airports/:id', airportController.updateAirport);  
app.delete('/airports/:id', airportController.deleteAirport);