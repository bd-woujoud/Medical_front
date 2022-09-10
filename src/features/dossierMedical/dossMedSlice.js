import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createdoss, getDossbyPatient, updateDoss } from './dossMedAPI';
import Swal from "sweetalert2"


const initialState = {
    createdoss: "",
    AllDoss: [],
    getdoss:"",
    myDoss:null,
    updatestatus:''
};


export const CreateDossMed = createAsyncThunk(

    'dossiermeds/create',
    async (values) => {

        const response = await createdoss(values);
        return response;

    }

);
export const GetDossByPatient = createAsyncThunk( // générer les créateurs d'action Redux
    'dossiermeds/getdossByPAtient',
    async (patient) => {
        const response = await getDossbyPatient(patient);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const UpdateDoss=createAsyncThunk(
    'dossiermeds/updateDoss',
    async (data) => {
        const response = await updateDoss(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)
export const dossierMedSlice = createSlice({
    name: 'dossiermeds', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            .addCase(CreateDossMed.pending, (state) => {
                state.createdoss = 'loading'
            })

            .addCase(CreateDossMed.fulfilled, (state, action) => {

                state.createdoss = 'success'
                console.log("action ",action.payload);

                    state.AllDoss.push(action.payload.data);

                    Swal.fire({
                        icon: 'success',
                        title: 'votre dossier medical a été envoyer avec succés!',
                    })
                
            })

            .addCase(CreateDossMed.rejected, (state, action) => {
                state.createdoss = 'failure'

            })
            //getbypatient
            .addCase(GetDossByPatient.pending, (state,action) => {
                state.getdoss = 'pending'

            })
            .addCase(GetDossByPatient.fulfilled, (state, action) => {
                console.log(action.payload);
                state.myDoss = action.payload.data
                state.getdoss = 'success'
                localStorage.setItem('myDoss', JSON.stringify(state.myDoss))
 
            })

            .addCase(GetDossByPatient.rejected, (state, action) => {
                state.getdoss = 'failure'

            })
            .addCase(UpdateDoss.pending, (state, action) => {
                state.updatestatus = 'loading'
            })
            .addCase(UpdateDoss.fulfilled, (state, action) => {
                console.log(action.payload);
                state.updatestatus = 'success'

            })
            .addCase(UpdateDoss.rejected, (state, action) => {
                state.updatestatus = 'failure'

            })

    }


})

export const { } = dossierMedSlice.actions;

export const selectcreatedoss = (state) => state.dossiermeds.createdoss;
export const selectAllDoss = (state) => state.dossiermeds.createdoss;
export const selectmyDoss = (state) => state.dossiermeds.myDoss;
export const selectgetdoss = (state) => state.dossiermeds.getdoss;
export default dossierMedSlice.reducer