const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesVarios = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}
let Schema = mongoose.Schema;

let usuarioSquema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerido']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesVarios
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    }
});

usuarioSquema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioSquema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});

module.exports = mongoose.model('Usuario', usuarioSquema);