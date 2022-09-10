import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLabos, register } from './laboApi';



const initialState = {

    errors: [],
    registeer: '',
    loginstatus: '',
    labos: []

};


export const RegistredLab = createAsyncThunk(

    'labo/register',
    async (data) => {

        const response = await register(data);
        return response;

    }

);

export const GETLabos = createAsyncThunk(
    'labo/getalll',
    async () => {
        const response = await getLabos();
        return response.data
    }
)




export const laboSlice = createSlice({
    name: 'labos', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire

        builder
            .addCase(RegistredLab.pending, (state) => {
                state.registeer = 'loading'
            })

            .addCase(RegistredLab.fulfilled, (state, action) => {

                console.log(action.payload, 'oooooo');

                if (action.payload.status === 200) {
                    state.registeer = 'success'
                }
                else {
                    state.registeer = 'failure'
/*                     state.errors = action.payload.response.data.errors.details
 */                }
            })
            .addCase(RegistredLab.rejected, (state, action) => {
            })


            // getdoctors
            .addCase(GETLabos.pending, (state) => {

            })
            .addCase(GETLabos.fulfilled, (state, action) => {
                console.log('payload', action.payload.data)
                state.labos = action.payload.data

            })

            .addCase(GETLabos.rejected, (state, action) => {

            })

    }
})

export const { } = laboSlice.actions;

export const selectregister = (state) => state.labos.registeer;
export const selectlabos = (state) => state.labos.labos;
export default laboSlice.reducer;