const Airport = require('../models/airport')  

// Get all Airports
const getAllAirports = async (req, res) => {
    try {
        const airports = await Airport.find() 
        res.json(airports) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

// Get Airport by ID
const getAirportById = async (req, res) => {
    try {
        const { id } = req.params 
        const airport = await Airport.findById(id) 
        if (!airport) {
            return res.status(404).json({ error: "This airport doesn't exist" }) 
        }
        return res.json(airport) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
}

// Create Airport
const createAirport = async (req, res) => {
    try {
        const airport = new Airport(req.body)  
        await airport.save() 
        return res.status(201).json(airport) 
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message }) 
        }
        return res.status(500).json({ error: error.message })
    }
} 

// Update Airport
const updateAirport = async (req, res) => {
    try {
        const { id } = req.params 
        const airport = await Airport.findByIdAndUpdate(id, req.body, { new: true })
        if (!airport) {
            return res.status(404).json({ error: "Airport not found" }) 
        }
        return res.status(200).json(airport) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

// Delete Airport
const deleteAirport = async (req, res) => {
    try {
        const { id } = req.params 
        const deleted = await Airport.findByIdAndDelete(id)  
        if (!deleted) {
            return res.status(404).json({ error: "Airport not found" }) 
        }
        return res.status(200).json({ message: "Airport deleted" }) 
    } catch (error) {
        return res.status(500).json({ error: error.message }) 
    }
} 

module.exports = {
    getAllAirports,
    getAirportById,
    createAirport,
    updateAirport,
    deleteAirport
}
