
import axios from 'axios'

export function register (data) {


    return axios.post("http://localhost:5000/patients/register" ,data, {credentials : 'include'})
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )

}


export function updatePatient(data) {

    return axios.put("http://localhost:5000/patients/updatePatient/"+ data.id, data.data)

        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}

export function getPatientByDoctor(id) {

    return axios.get("http://localhost:5000/patients/getpatientbydoctor/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}

