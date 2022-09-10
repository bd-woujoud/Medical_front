

import axios from "axios";


export function registredDoctor(data) {
  
    return axios.post("http://localhost:5000/doctors/register",data, {credentials : 'include'} )
    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )


  }

  export function registredLabos(data) {
  
    return axios.post("http://localhost:5000/laboratoires/register" ,data, {credentials : 'include'} )
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
  }

  export function registredPatient(data) {
  
    return axios.post("http://localhost:5000/patients/register" ,data, {credentials : 'include'} )
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
  }



    