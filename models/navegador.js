const moogose = require('mongoose');

const {Schema} = moogose;
const UserSchema = new Schema(
    {
        nombre: {type: String, required: true},
        Compañia: {type: String, required: true},
        Annio: {type: Date, required: true}
    }
)

module.exports = UserSchema;

