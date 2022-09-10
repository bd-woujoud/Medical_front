import axios from 'axios'
import { requests } from '../requests'

// categorie service


export function createdoss(values)  {

        return axios.post(requests.dossmedapi+"/AdddossierMedical" , values)

            .then(res => {

                return res
            })
            .catch(err => {
                return err
            })
    }

    export function getDossbyPatient(patient) {

        return axios.get(requests.dossmedapi +'/getdossierMedicalBypatient/' + patient)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    
    
    }
    export function updateDoss(data) {
        return axios.put(requests.dossmedapi + '/updatedossierMedical/' + data.id, data.data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }