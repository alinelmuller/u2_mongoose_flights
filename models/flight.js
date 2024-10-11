const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const FlightSchema = new Schema(
    {
        airline: { type: String, required: true },
        flightNumber: { type: Number, required: true },
        price: { type: Number, required: true },
        numberOfSeats: { type: Number, required: true },
        departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport', required: true },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport', required: true  },
        departureDateTime: { type: Date, required: true }       
    },
    { timestamps: true },
)

module.exports = mongoose.model('Flight', FlightSchema)