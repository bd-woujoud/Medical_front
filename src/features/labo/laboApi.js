

import axios from 'axios'
import { requests } from '../requests'

export function register (data) {

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
export function getLabos(){
    return axios.get(requests.laboapi + '/allLabo')
    .then(res =>{
        return res
    })
    .catch(err => {
        return err
    })
}
