import { requests } from "../requests"
import axios from 'axios'
export function getme() {

    return axios.get(requests.userapi + '/getme', { credentials: true })
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

}
export function getUsers(){
    return axios.get(requests.userapi + '/allUser')
    .then(res =>{
        return res
    })
    .catch(err => {
        return err
    })
}
export function deleteUser(id){
    return axios.delete(requests.userapi + '/deleteUserbyid/' + id)
    .then(res =>{
        console.log(res)
        return id
    })
    .catch(err => {
        return err
    })
}

export function getUser(id){
    return axios.get(requests.userapi + '/getUserbyid/' + localStorage.setItem('singleuserId'))
    .then(res =>{
        console.log(res)
        return res          
    })
    .catch(err => {
        return err
    })
}



export function updateUser(data) {
    return axios.put(requests.userapi + '/update/'+data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function uploadAvatar(data) {
    return axios.put(requests.userapi + '/avatar/' +data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
// export function avatar(data){
//     return axios.put(requests.userapi + '/avatar/' + data.id , data.data)
//     .then(res =>{
//         console.log(res)
//         return res
//     })
//     .catch(err => {
//         return err
//     })
// }