import axios from "axios"

export function createRDV(data) {

    return axios.post("http://localhost:5000/appointments/Addappointment",data, {credentials : 'include'})
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}

export function getdemandebyPatient(id) {

    return axios.get("http://localhost:5000/appointments/getappointmentBypatient/"+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }

export function getdemandebyDoctor(id) {

    return axios.get("http://localhost:5000/appointments/getappointmentBydoctor/"+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }

export function getdemandeConfirmed(id) {

    return axios.get("http://localhost:5000/appointments/getappointmentConfirmed/"+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }
export function getdemandeConfirmedDoctor(id) {

    return axios.get("http://localhost:5000/appointments/getappointmentConfirmedDoctor/"+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }

    //delete
    export function deleteDemande(id) {

        return axios.delete("http://localhost:5000/appointments/deleteappointment/"+id)
    
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
    
        }