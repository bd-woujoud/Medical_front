import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPatientByDoctor, register, updatePatient } from './patientApi';

import Swal from 'sweetalert2';

const initialState = {

    errors: [],
    registeer: '',
    loginstatus: '',
    updatestatus: '',
    doctors:[]


};


export const RegistredPatient = createAsyncThunk(

    'patient/register',
    async (data) => {

        const response = await register(data);
        return response;

    }


);
export const UpdatePAtient = createAsyncThunk(
    'patients/updatePatient',
    async (data) => {
        const response = await updatePatient(data);

        return response;
    })
//get Patient by doctor

export const GetPatientByDoctor = createAsyncThunk(

    'patients/GetpatientbyDoctor',

    async (id) => {
        const response = await getPatientByDoctor(id);
        return response.data;
    }

);


export const laboSlice = createSlice({
    name: 'patients', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            .addCase(RegistredPatient.pending, (state) => {
                state.registeer = 'loading'
            })

            .addCase(RegistredPatient.fulfilled, (state, action) => {

                console.log(action.payload, 'oooooo');

                if (action.payload.status === 200) {
                    state.registeer = 'success'


                }

                else {
                    state.registeer = 'failure'
                    state.errors = action.payload.response.data.errors.details
                }
            })

            .addCase(RegistredPatient.rejected, (state, action) => {

            })

            //update patient

            .addCase(UpdatePAtient.pending, (state, action) => {
                state.updatestatus = 'loading'
            })
            .addCase(UpdatePAtient.fulfilled, (state, action) => {
                console.log(action.payload);
                if (action.payload.data) {
                    state.updatestatus = 'success'
                    Swal.fire({
                        icon: 'success',
                        title: 'votre profil est à jour!',

                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, "1000")

                }
                else {

                    window.alert('error')
                }
            })
            .addCase(UpdatePAtient.rejected, (state, action) => {
                state.updatestatus = 'failure'
            })

                //getpatientbyDoctor

                .addCase(GetPatientByDoctor.pending, (state) => {

                })
    
                .addCase(GetPatientByDoctor.fulfilled, (state, action) => {
    
                    console.log(action.payload, "demandedoctor");
                    state.doctors = action.payload.data
    
                })
    
                .addCase(GetPatientByDoctor.rejected, (state, action) => {
    
                })


    }
})

export const { } = laboSlice.actions;

export const selectregister = (state) => state.patients.registeer;
export const selectupdatestatus = (state) => state.patients.updatestatus;
export const selectregistererror = (state) => state.patients.errors;
export const selectpatients = (state) => state.patients.doctors;

export default laboSlice.reducer;