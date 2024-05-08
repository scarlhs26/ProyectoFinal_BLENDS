const mongoose = require('mongoose');

const MensajeRecibidoSchema = new mongoose.Schema({
    id_conversacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversacion',
        required: true
    },
    id_usuario_remitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fecha_modificacion: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('MensajeRecibido', MensajeRecibidoSchema);