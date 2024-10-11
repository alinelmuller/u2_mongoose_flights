const Flight = require('../models/flight')  

// Get all Flights
const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find()  
        res.json(flights) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

// Get Flight by ID
const getFlightById = async (req, res) => {
    try {
        const { id } = req.params 
        const flight = await Flight.findById(id) 
        if (!flight) {
            return res.status(404).json({ error: "This flight doesn't exist" }) 
        }
        return res.json(flight) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
}

// Create Flight
const createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body)  
        await flight.save() 
        return res.status(201).json(flight) 
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message }) 
        }
        return res.status(500).json({ error: error.message })
    }
} 

// Update Flight
const updateFlight = async (req, res) => {
    try {
        const { id } = req.params 
        const flight = await Flight.findByIdAndUpdate(id, req.body, { new: true }) 
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" }) 
        }
        return res.status(200).json(flight) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

// Delete Flight
const deleteFlight = async (req, res) => {
    try {
        const { id } = req.params 
        const deleted = await Flight.findByIdAndDelete(id)  
        if (!deleted) {
            return res.status(404).json({ error: "Flight not found" }) 
        }
        return res.status(200).json({ message: "Flight deleted" }) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight
}
