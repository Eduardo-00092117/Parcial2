const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Conecction sucess!'))
    .catch(err=> console.error(err));

module.exports = mongoose;