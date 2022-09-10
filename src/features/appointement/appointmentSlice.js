import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { createRDV, deleteDemande, getdemandebyDoctor, getdemandebyPatient, getdemandeConfirmed, getdemandeConfirmedDoctor } from './appointmentApi';

const initialState = {

    demandeRDV: '',
    AllDemande: [],
    patientdemande: [],
    demandeConfimed:[],
    delete:''

};

export const demandeRDV = createAsyncThunk(

    'demandeRDV/createdemande',
    async (data) => {

        const response = await createRDV(data);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);


//getdemandebyPatient

export const GetDemandeByPatient = createAsyncThunk(

    'Demande/GetbyPatient',

    async (id) => {
        const response = await getdemandebyPatient(id);
        return response.data;
    }

);

//getdemandebyPatient

export const GetDemandeByDoctor = createAsyncThunk(

    'Demande/GetbyDoctor',

    async (id) => {
        const response = await getdemandebyDoctor(id);
        return response.data;
    }

);
//getdemandebyPatientConfirmed

export const GetDemandeConfirmed = createAsyncThunk(

    'Demande/GetConfirmed',

    async (id) => {
        const response = await getdemandeConfirmed(id);
        return response.data;
    }

);
//getdemandebyDoctorConfirmed

export const GetDemandeConfirmedDoctor = createAsyncThunk(

    'Demande/GetConfirmedDoctor',

    async (id) => {
        const response = await getdemandeConfirmedDoctor(id);
        return response.data;
    }

);


//deleteDemandebyuser

export const DeleteDemande = createAsyncThunk(

    'Demande/delete',

    async (id) => {
        const response = await deleteDemande(id);
        return response.data;
    }

);

export const demandeSlice = createSlice({

    name: 'demandeRDV',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {

        builder

            //create
            .addCase(demandeRDV.pending, (state) => {

            })

            .addCase(demandeRDV.fulfilled, (state, action) => {

                if (state.demandeRDV = 'success') {

                    state.AllDemande.push(action.payload.data.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'votre demande à été envoyer avec succés!',
                    })

                }

                else {
                    state.demandeRDV = 'failure'
                    window.location.href('/home')
                }
            })

            .addCase(demandeRDV.rejected, (state, action) => {

            })

            //getallbyPatient

            .addCase(GetDemandeByPatient.pending, (state) => {

            })

            .addCase(GetDemandeByPatient.fulfilled, (state, action) => {

                console.log(action.payload, "userdemande");
                state.patientdemande = action.payload.data

            })

            .addCase(GetDemandeByPatient.rejected, (state, action) => {

            })

            //getallbyDoctor

            .addCase(GetDemandeByDoctor.pending, (state) => {

            })

            .addCase(GetDemandeByDoctor.fulfilled, (state, action) => {

                console.log(action.payload, "demandedoctor");
                state.patientdemande = action.payload.data

            })

            .addCase(GetDemandeByDoctor.rejected, (state, action) => {

            })

            //getdemande confirmed

            .addCase(GetDemandeConfirmed.pending, (state) => {

            })

            .addCase(GetDemandeConfirmed.fulfilled, (state, action) => {

                console.log(action.payload, "userdemande");
                state.demandeConfimed = action.payload.data

            })

            .addCase(GetDemandeConfirmed.rejected, (state, action) => {

            })
            //getdemande confirmed doctor

            .addCase(GetDemandeConfirmedDoctor.pending, (state) => {

            })

            .addCase(GetDemandeConfirmedDoctor.fulfilled, (state, action) => {

                console.log(action.payload, "userdemande");
                state.demandeConfimed = action.payload.data

            })

            .addCase(GetDemandeConfirmedDoctor.rejected, (state, action) => {

            })


            //delete
            .addCase(DeleteDemande.pending, (state) => {

            })

            .addCase(DeleteDemande.fulfilled, (state, action) => {

                if (action.payload.data) {
                    state.delete = 'success'
                } else {

                    state.delete = 'failure'
                }
            })

            .addCase(DeleteDemande.rejected, (state, action) => {

            })

    }
})

export const { } = demandeSlice.actions;
export const selectdemandeRDV = (state) => state.demandeRDV.demandeRDV;
export const selectdelete = (state) => state.demandeRDV.delete;
export const selectAlldemandeRDV = (state) => state.demandeRDV.AllDemande;
export const selectdemandePatient = (state) => state.demandeRDV.patientdemande;
// export const selectdemandeDoctor = (state) => state.demandeRDV.patientdemande;
export const selectdemandeConfirmed = (state) => state.demandeRDV.demandeConfimed;


export default demandeSlice.reducer;
