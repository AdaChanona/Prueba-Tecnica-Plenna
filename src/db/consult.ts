import mongoose, { Schema, Document } from 'mongoose';

interface IConsulta extends Document {
    fecha: Date;
    doctor: string;
    descripcion: string;
    paciente: string;
}

const ConsultaSchema: Schema = new Schema({
    fecha: { type: Date, required: true },
    doctor: { type: String, required: true },
    descripcion: { type: String, required: true },
    paciente: { type: Schema.Types.ObjectId, ref: 'Paciente', required: true }
});

export const ConsultModel = mongoose.model<IConsulta>('Consulta', ConsultaSchema);

//Todas las consultas
export const getAllConsult = ()=>ConsultModel.find();

//Crear consulta
export const createConsult = (values: Record<string,any>) => new ConsultModel(values).save().then((consult)=>consult.toObject());

//Leer info de la consulta con ID
export const getConsultById = (id:string) => ConsultModel.findById(id);

//Actualizar una consulta con ID
export const updateConsultById = (id:string, values: Record<string,any>) => ConsultModel.findByIdAndUpdate(id, values);

//Eliminar una consulta con ID
export const deleteConsultById = (id:string) => ConsultModel.findOneAndDelete({_id : id});
