const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const AirportSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        code: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Airport', AirportSchema)