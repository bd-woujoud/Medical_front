

import axios from 'axios'
import { requests } from '../requests'

export function register (data)  {

    return axios.post("http://localhost:5000/doctors/register" ,data, {credentials : 'include'} )
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )

}

export function getDoctors(){
    return axios.get(requests.doctorapi + '/alldoctor')
    .then(res =>{
        return res
    })
    .catch(err => {
        return err
    })
}

export function getDoctorById(id) { 
    
    return axios
      .get(requests.doctorapi+"/getdoctorbyid/"+ localStorage.getItem("docId"))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
     

  }
  