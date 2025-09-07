import mongoose from "mongoose";
const userSchema = new mongoose.Schema (
    {
        nombre_institucion: {
            type: String, 
            required: true,
            trim:true
        },
        email: {
            type: String, 
            unique: true,
            trim:true,
            lowercase:true
        },
         telefono: {
            type: String,
             trim:true  
        },
        tipoUsuario: {
            type: String, 
            require: true,
            trim:true
        },
        direccion: {
            type: String,
            trim:true 
        },
             
        fecha_registro: {
            type: Date, 
            default: Date.now
        }
        //productos_publicados: {
          //  type: Array, 
          //  default:[]
       // },
        //solicitudes: {
         //   type: Array, 
         //  default:[]}
    },
     {
    timestamps: true // opcional: agrega createdAt y updatedAt
});

export default mongoose.model("Users",userSchema); 