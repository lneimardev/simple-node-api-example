// exemplo de model caso estivesse sendo trabalhado com um banco de dados MongoDB

/*
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    isAdmin: Boolean,
    isActive: Boolean,
    creation_date: Date,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
*/
