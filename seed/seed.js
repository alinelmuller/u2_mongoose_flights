const mongoose = require('mongoose')
const db = require('../db')
const Airport = require('../models/airport') 
const Flight = require('../models/flight') 

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedDatabase = async () => {
  await Airport.deleteMany({}) 
  await Flight.deleteMany({}) 
  
    const airports = await Airport.insertMany([
      { name: `JFK International Airport`, location: 'New York, NY', code: 'JFK' },
      { name: `Los Angeles International Airport`, location: 'Los Angeles, CA', code: 'LAX' },
      { name: `O'Hare International Airport`, location: 'Chicago, IL', code: 'ORD' },
      { name: `San Francisco International Airport`, location: 'San Francisco, CA', code: 'SFO' }
    ])
  
    const flights = await Flight.insertMany([
        { 
          airline: 'Delta', 
          flightNumber: 1234, 
          price: 300, 
          numberOfSeats: 150, 
          departingAirport: airports[0]._id, 
          arrivalAirport: airports[1]._id, 
          departureDateTime: new Date('2024-10-15T10:00:00Z') 
        },
        { 
          airline: 'American Airlines', 
          flightNumber: 5678, 
          price: 450, 
          numberOfSeats: 200, 
          departingAirport: airports[2]._id, 
          arrivalAirport: airports[3]._id, 
          departureDateTime: new Date('2024-10-16T12:30:00Z') 
        },
        { 
          airline: 'United Airlines', 
          flightNumber: 9012, 
          price: 350, 
          numberOfSeats: 180, 
          departingAirport: airports[1]._id, 
          arrivalAirport: airports[0]._id, 
          departureDateTime: new Date('2024-10-17T14:45:00Z') 
        },
        { 
          airline: 'Southwest', 
          flightNumber: 3456, 
          price: 250, 
          numberOfSeats: 130, 
          departingAirport: airports[3]._id, 
          arrivalAirport: airports[2]._id, 
          departureDateTime: new Date('2024-10-18T09:00:00Z') 
        },
        { 
          airline: 'JetBlue', 
          flightNumber: 7890, 
          price: 400, 
          numberOfSeats: 170, 
          departingAirport: airports[0]._id, 
          arrivalAirport: airports[2]._id, 
          departureDateTime: new Date('2024-10-19T16:30:00Z') 
        },
        { 
          airline: 'Spirit Airlines', 
          flightNumber: 4321, 
          price: 200, 
          numberOfSeats: 160, 
          departingAirport: airports[1]._id, 
          arrivalAirport: airports[3]._id, 
          departureDateTime: new Date('2024-10-20T18:15:00Z') 
        },
        { 
          airline: 'Alaska Airlines', 
          flightNumber: 6543, 
          price: 370, 
          numberOfSeats: 140, 
          departingAirport: airports[2]._id, 
          arrivalAirport: airports[0]._id, 
          departureDateTime: new Date('2024-10-21T20:45:00Z') 
        }
      ])
  
    console.log('Database seeded!')

  }
  
const run = async () => {
    await seedDatabase ()
    db.close()
}

run()