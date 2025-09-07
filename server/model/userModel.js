import mongoose from "mongoose";
const userSchema = new mongoose.Schema (
    {
        nombre_institucion: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            unique: true
        },
        direccion: {
            type: String, 
        },
        telefono: {
            type: String, 
        },
        tipoUsuario: {
            type: String, 
            require: true
        },
        fechaRegistro: {
            type: Date, 
            default: Date.now
        },
        productos_publicados: {
            type: Array, 
            default:[]
        },
        solicitudes: {
            type: Array, 
            default:[]
        }

    }
)
export default mongoose.model("Users",userSchema);