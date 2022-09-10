import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../SideBar';
// import { BiCheckDouble } from 'react-icons/bi'
// import { GrSend } from 'react-icons/gr'
import { GetDemandeByDoctor, selectdemandeDoctor, selectdemandePatient } from '../../features/appointement/appointmentSlice';
import { AuthContext } from '../../Context/AuthContext';
import moment from 'moment'
import axios from 'axios';
function GetDemande() {


    const demandes = useSelector(selectdemandePatient)
    const dispatch = useDispatch()
    const { user } = useContext(AuthContext)

    useEffect(() => {

        dispatch(GetDemandeByDoctor(user._id))

    }, [])

    const confirmedDemande = () => {

        axios.put('http://localhost:5000/appointments/updateappointment/' + localStorage.getItem('demandeid'), { isConfirmed: true })
            .then(res => {

            })
    }

    const refusedDemande = () => {

        axios.put('http://localhost:5000/appointments/updateappointment/' + localStorage.getItem('demandeid'), { isRefused: true })
            .then(res => {

            })
    }

    return (

        <div>
            <SideBar />

            <div id="content">
                <div class='main ml-5'>
                    <div class='container-fluid ml-5'>
                        <div className="row column1" style={{ marginTop: "100px", width: "80%" }}>
                            <div class="col-md-12"></div>
                            <div class="dash_blog">
                                <div class="dash_blog_inner">
                                    <div class="dash_head" style={{ backgroundColor: "transparent" }}>
                                        <h3 style={{ color: "blue" }}><span><i class="fa fa-reorder"></i> Les demandes reçues</span></h3>
                                    </div>
                                    <div class="table-responsive-sm">
                                        <table class="table table-striped projects">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nom du patient</th>
                                                    <th>Date_naissance</th>
                                                    <th>sexe</th>
                                                    <th>téléphone</th>
                                                    <th>Date de RDV</th>
                                                    <th>Date_prise_RDV</th>
                                                    <th>Etat</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    demandes.map((r, i) => {

                                                        return (

                                                            <tr>
                                                                <td>{i + 1}</td>
                                                                <td>{r.patient.name}</td>
                                                                <td>{moment(r.patient.birthDate).format('DD-MM-YYYY')}</td>
                                                                <td >{r.patient.gender}</td>
                                                                <td>{r.patient.phoneNumber}</td>
                                                                <td ><h4>{moment(r.date).format('DD-MM-YYYY')}</h4></td>
                                                                <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                <td>
                                                                    {
                                                                        (r.isConfirmed && r.isConfirmed) ?

                                                                            <i class="fa fa-check green_color" style={{ fontSize: '30px' }}></i>
                                                                            :<>
                                                                            {(r.isRefused)?
                                                                                 <i class="fa fa-times" style={{   color: "red",fontSize: '25px' }}></i>
                                                                           :
                                                                            <span onClick={confirmedDemande} ><i class="fa fa-paper-plane" onClick={() => { localStorage.setItem('demandeid', r._id) }} style={{ cursor: 'pointer', fontSize: '25px' }}></i></span>
                                                                   } </> }

                                                                </td>
                                                                <td>
                                                                {
                                                                       (!( r.isConfirmed) && (!r.isRefused) ) &&
                                                                            <span onClick={refusedDemande} ><i class="fa fa-times " onClick={() => { localStorage.setItem('demandeid', r._id) }} style={{ color: "red", cursor: 'pointer', fontSize: '25px' }}></i></span>

                                                                 } </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetDemande