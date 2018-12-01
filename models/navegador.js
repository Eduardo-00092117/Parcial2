const moongose = require('mongoose'); 
const {Schema} = moongose;
const UserSchema = new Schema(
    {
        nombre: {type: String, required: true},
        compania: {type: String, required: true},
        annio: {type: String, required: true}
    }
)

let user = moongose.model('info', UserSchema)

module.exports = user;

