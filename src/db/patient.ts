import mongoose, { Schema, Document } from 'mongoose';

interface IPatient extends Document {
    nombre: string;
    apellido: string;
    contacto: string;
    historialMedico: string[];
}

const PatientSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    contacto: { type: String, required: true },
    historialMedico: [{ type: Schema.Types.ObjectId, ref: 'Consulta' }]
});

export const PatientModel = mongoose.model<IPatient>('Paciente', PatientSchema);

//Crear paciente
export const createPatient = (values: Record<string,any>) => new PatientModel(values).save().then((patient)=>patient.toObject());

//Leer info del paciente con ID
export const getPatientById = (id:string) => PatientModel.findById(id);

//Actualizar un paciente con ID
export const updatePatientById = (id:string, values: Record<string,any>) => PatientModel.findByIdAndUpdate(id, values);

//Eliminar UN paciente con ID
export const deletePatientById = (id:string) => PatientModel.findOneAndDelete({_id : id});