import React from 'react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../Context/AuthContext'
import SideBar from '../../SideBar'
import { message } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { DeleteDemande, GetDemandeByPatient, selectdelete, selectdemandePatient } from '../../../features/appointement/appointmentSlice'

import moment from 'moment'

function listDemandeRdv() {

    const mesdemandes = useSelector(selectdemandePatient)
    const deletereservation = useSelector(selectdelete)
    const dispatch = useDispatch()
    const { user } = useContext(AuthContext)

    useEffect(() => {

        dispatch(GetDemandeByPatient(user._id))

    }, [deletereservation])




    return (

        <div>
            <SideBar />
            <div id="content">
                <div class='main' >
                    <div class='container'>
                        <div className="row column1 " style={{ marginTop: "100px" }}>
                            <div class="col-md-8 col-lg-12">
                                <div class="dash_blog" style={{ fontSize: '16px' }}>
                                    <div class="dash_blog_inner">
                                        <div class="list_cont">
                                            <p><b>Mes demandes du consultation</b></p>
                                        </div>
                                        <div class="table-responsive-sm">
                                            <table class="table table-striped projects">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>medecin </th>
                                                        <th>spécialité</th>
                                                        <th>Date de RDV</th>
                                                        <th>Date de demande</th>
                                                        <th>Etat</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        mesdemandes.map((r, i) => {
                                                            return (
                                                                <tr>
                                                                   
                                                                    <td>{r.doctor.name}</td>
                                                                    <td>{r.doctor.specialisation}</td>
                                                                    <td><b>{moment(r.date).format('DD-MM-YYYY')}</b></td>
                                                                    <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                    <td> 
                                                                        
                                                                    {
                                                                        (r.isConfirmed && r.isConfirmed) ?

                                                                        <p  style={{  color: 'green', fontWeight :'bold' ,textDecoration:'underline',textDecorationColor:"green"}} >confirmé</p>
                                                                            :<>
                                                                            {(r.isRefused)?
                                                                                <p  style={{  color: 'red', fontWeight :'bold' ,textDecoration:'underline',textDecorationColor:"red"}} >refusé</p>
                                                                           :
                                                                           <p  style={{ fontSize: '15px',fontWeight :'bold', color: 'gray',}}>en cours...</p>
                                                                   } </> }
                                                                   
                                                                    </td>

                                                                    <td> {r.isConfirmed && r.isConfirmed ?
                                                                        <button type="button" class="btn btn-danger" disabled="true" >retiré</button>
                                                                        :
                                                                        <button onClick={() => { dispatch(DeleteDemande(r._id))}} type="button" class="btn btn-danger" >retiré</button>
                                                                    }</td>
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
        </div>
    )
}


export default listDemandeRdv
