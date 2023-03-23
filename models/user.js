//Requerir dependencia de Mongoose
const mongoose = require('mongoose');

//crear el schema del modelo que tiene la propiedad (especificar que es cada propiedad: string, number, etc)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    verified: {
        type: Boolean,
        default: false
    },
});

//Configurar la respuesta del usuario
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
});

//Dar nombre para poder utilizarlo
const User = mongoose.model('User', userSchema);

module.exports = User;