import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import doctorReducer from  '../features/doctor/doctorSlice';
import patientReducer from  '../features/patient/patientSlice';
import laboReducer from  '../features/labo/laboSlice';
import dossReducer from  '../features/dossierMedical/dossMedSlice';
import auth from  '../features/auth/authSlice';
import appointment from  '../features/appointement/appointmentSlice';
export const store = configureStore({
  reducer: {
   
    users: userReducer,
    doctors: doctorReducer,
    patients: patientReducer,
    labos: laboReducer,
    dossiermeds: dossReducer,
    auth:auth,
    demandeRDV:appointment
  },
});

