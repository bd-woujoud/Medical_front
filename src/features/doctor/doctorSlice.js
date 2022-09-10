import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDoctorById, getDoctors, register } from './doctorApi';

const initialState = {

    errors: [],
    registeer: '',
    loginstatus: '',
    alldoc:[],
    getId: "",

};


export const RegistredDoc = createAsyncThunk(

    'doctor/register',
    async (data) => {

        const response = await register(data);
        return response;
    }
);
export const GETDoctors = createAsyncThunk(
    'doctor/GETDoctors',
    async () => {
        const response = await getDoctors();
        return response.data
    }
)

export const GetDoctorById = createAsyncThunk(
    "Doctors/getDoctorById",
    async (id) => {
      const response = await getDoctorById(id);
      return response.data;
    }
  );

export const doctorSlice = createSlice({
    name: 'doctors', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            .addCase(RegistredDoc.pending, (state) => {
                state.registeer = 'loading'
            })

            .addCase(RegistredDoc.fulfilled, (state, action) => {

                console.log(action.payload, 'oooooo');

                if (action.payload.status === 200) {
                    state.registeer = 'success'


                }

                else {
                    state.registeer = 'failure'
                    state.errors = action.payload.response.data.errors.details
                }
            })

            .addCase(RegistredDoc.rejected, (state, action) => {

            })
             // getdoctors
             .addCase(GETDoctors.pending, (state) => {
                 
            })
            .addCase(GETDoctors.fulfilled, (state, action) => {
                console.log('payload',action.payload.data)
                state.alldoc = action.payload.data
                
            })

            .addCase(GETDoctors.rejected, (state, action) => {
               
            })
                 //GetDoctorById
      .addCase(GetDoctorById.pending, (state) => {})

      .addCase(GetDoctorById.fulfilled, (state, action) => {

        if ((state.getId = "success")) {
          console.log(action.payload.data,'loooog');
          state.getId = action.payload.data;
        } else {
          state.getId = "failure";
        }
      })

      .addCase(GetDoctorById.rejected, (state, action) => {})




    }
})

export const { } = doctorSlice.actions;

export const selectregister = (state) => state.doctors.registeer;
export const selectregistererror = (state) => state.doctors.errors;
export const selectalldoc = (state) => state.doctors.alldoc;
export const selectgetdocId = (state) => state.doctors.getId;
export default doctorSlice.reducer;