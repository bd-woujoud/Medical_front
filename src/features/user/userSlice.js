import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteUser, getme, getUser, getUsers, sendmail, updateUser, uploadAvatar } from './userAPI';
import { message } from 'antd';
import { updatePatient } from '../patient/patientApi';


const initialState = {
    getme: {},
    alluser: [],
    avatarstatus: '',
    userById: [],
    user: null,
    updatestatus:"",
    uploadavatar:"",
    sendmail:""
};

// export const Getme = createAsyncThunk( // génere les créateurs d'acttion Redux
//     'users/getme',
//     async () => {
//         const response = await getme();
//         // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
//         return response.data;
//     }
// );
export const GetUser = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await getUsers();
        return response.data
    }
)

export const DeleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id) => {
        const response = await deleteUser(id);
        return response
    }
);
export const SendMail = createAsyncThunk(
    'users/sendmail',
    async (data) => {
        const response = await sendmail(data);

        return response;
    }
);
export const GetUserById = createAsyncThunk(
    'users/getUserById',
    async (id) => {
        const response = await getUser(id);
        return response.data
    }
)


//update user
export const UpdatePAsient = createAsyncThunk(
    'patients/updatePatient',
    async (data) => {
        const response = await  updatePatient(data);

        return response;
    }
)

// uploadd user avatar 
export const UploadAvatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);

        return response;
    }
);


export const userSlice = createSlice({
    name: 'users', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder

            /// upload avaytar
            .addCase(UploadAvatar.pending, (state, action) => {
                state.avatarstatus = 'loading'
            })

            .addCase(UploadAvatar.fulfilled, (state, action) => {

                console.log(action.payload);

                if (action.payload.data) {
                    state.avatarstatus = 'success'
                    state.user = action.payload.data.data
                    message.success("image téléchargé avec succées")
                    window.location.reload()
                }
                else {

                    state.avatarstatus = 'failure'
                }
            })
            .addCase(UploadAvatar.rejected, (state, action) => {
            })


            // GetUser
            .addCase(GetUser.pending, (state) => {

            })
            .addCase(GetUser.fulfilled, (state, action) => {
                console.log('payload', action.payload.data)
                state.alluser = action.payload.data

            })

            .addCase(GetUser.rejected, (state, action) => {

            })
            // DeleteUser
            .addCase(DeleteUser.pending, (state) => {

            })
            .addCase(DeleteUser.fulfilled, (state, action) => {
                console.log('payload', action)
                state.alluser = state.alluser.filter(p => p._id !== action.payload)

            })

            .addCase(DeleteUser.rejected, (state, action) => {

            })
            //updatePatient
          

            // GetuserByid
            .addCase(GetUserById.pending, (state) => {

            })
            .addCase(GetUserById.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userById = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetUserById.rejected, (state, action) => {
            })
             ///sendmail
             .addCase(SendMail.pending, (state) => {

            })
            .addCase(SendMail.fulfilled, (state, action) => {
                console.log('payload', action.payload.data)
                state.sendmail="fulfilled"
            })

            .addCase(SendMail.rejected, (state, action) => {

            })
        // pending, fulfilled, rejected: créateur d'action Redux


    }
})

export const { } = userSlice.actions;

export const selectuser = (state) => state.users.getme;
export const selectusers = (state) => state.users.alluser;
export const selectuserById = (state) => state.users.userById;
export const selectsendmail = (state) => state.users.sendmail;
export const selectavatarstatus = (state) => state.users.avatarstatus;
export const selectuploadavatar = (state) => state.users.uploadavatar;
export default userSlice.reducer;