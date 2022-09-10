import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registredDoctor, registredLabos, registredPatient } from "./authApi";


const initialState = {
    errors: [],
    registeer: '',
};


/* asyncthunk actions  */

//doctor action
export const RegistredDoctor = createAsyncThunk(

  'Doctor/register',
   async (data) => {
      const response = await registredDoctor(data);
      return response;
  }
);

//labo action
export const RegistredLabos= createAsyncThunk(

  'Labos/register',
   async (data) => {

      const response = await registredLabos(data);
      return response;

  }
);

//patient action
export const RegistredPatient= createAsyncThunk(

  'Patient/register',
   async (data) => {

      const response = await registredPatient(data);
      return response;

  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {

    //depond du server.js
    builder
    //DoctorSlice
    .addCase(RegistredDoctor.pending, (state) => {
      state.registeer = 'loading'
  })

  .addCase(RegistredDoctor.fulfilled, (state, action) => {

      console.log(action.payload.data, 'oooooo');

      if (action.payload.status === 200) {
          state.registeer = 'success'
          alert('Vous êtes inscrit avec succès')
           window.location.href = '/login'
      }

      else {
          state.registeer = 'failure'
          state.errors = action.payload.response.data.errors.details
      }

  })

  .addCase(RegistredDoctor.rejected, (state, action) => {

  })

  //LabosSlice

    .addCase(RegistredLabos.pending, (state) => {
      state.registeer = 'loading'
  })

  .addCase(RegistredLabos.fulfilled, (state, action) => {

      console.log(action.payload, 'oooooo');

      if (action.payload.status === 200) {
          state.registeer = 'success'
          alert('Vous êtes inscrit avec succès')
           window.location.href = '/login'
    
      }

      else {

          state.registeer = 'failure'
          state.errors = action.payload.response.data.errors.details
      }
  })

  .addCase(RegistredLabos.rejected, (state, action) => {

  })
  //patientSlice

    .addCase(RegistredPatient.pending, (state) => {
      state.registeer = 'loading'
  })

  .addCase(RegistredPatient.fulfilled, (state, action) => {

      console.log(action.payload, 'oooooo');

      if (action.payload.status === 200) {
          state.registeer = 'success'
          alert('Vous êtes inscrit avec succès')
           window.location.href = '/login'
    
      }

      else {

          state.registeer = 'failure'
          state.errors = action.payload.response.data.errors.details
      }
  })

  .addCase(RegistredPatient.rejected, (state, action) => {

  })


}
}
)

export const {} = authSlice.actions;
export const selectregister = (state) => state.auth.registeer;
export const selectregistererror = (state) => state.auth.errors;

export default authSlice.reducer
