import React from 'react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../Context/AuthContext'
import SideBar from '../../SideBar'
import { message } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { GetDemandeConfirmed, GetDemandeConfirmedDoctor, selectdelete, selectdemandeConfirmed } from '../../../features/appointement/appointmentSlice'
// import { BiCheckDouble } from 'react-icons/bi'
import moment from 'moment'

function demandeConfirmed() {

    const mesdemandesConfirmed = useSelector(selectdemandeConfirmed)
 
    const dispatch = useDispatch()
    const { user,role } = useContext(AuthContext)

    useEffect(() => {

        if (role === "Patient") {


            dispatch(GetDemandeConfirmed(user._id))

        } else  {
            dispatch(GetDemandeConfirmedDoctor(user._id))
        }

    }, [])


   
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
                                            <p><b>Mes demandes du consultation confirmées</b></p>
                                        </div>
                                        <div class="table-responsive-sm">
                                            <table class="table table-striped projects">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        {role === "Patient" ? <>
                                                        <th>#</th>
                                                            <th>medecin </th>
                                                            <th>spécialité</th>
                                                            <th>Date de RDV</th>
                                                            <th>Date de demande</th>
                                                            {/* <th>Etat</th> */}
                                                        </> :
                                                            <>
                                                                <th>Nom_patient </th>
                                                                <th>sexe</th>
                                                                <th>téléphone</th>
                                                                <th>Date de RDV</th>
                                                                <th>Date de demande</th>

                                                            </>
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        mesdemandesConfirmed.map((r, i) => {

                                                            return (


                                                                <tr > {role === "Patient" ? <>
                                                                    <td>{i + 1}</td>
                                                                    <td>{r.doctor.name}</td>
                                                                    <td>{r.doctor.specialisation}</td>
                                                                    <td><h4>{moment(r.date).format('DD-MM-YYYY')}</h4></td>
                                                                    <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                    {/* <td>  <BiCheckDouble style={{ fontSize: '25px', color: 'green' }} /></td> */}
                                                                </>
                                                                    :
                                                                    <>
                                                                        <td>{r.patient.name}</td>
                                                                        <td>{r.patient.gender}</td>
                                                                        <td>{r.patient.phoneNumber}</td>
                                                                        <td><h4>{moment(r.date).format('DD-MM-YYYY')}</h4></td>
                                                                        <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                    </>
                                                                }
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


export default demandeConfirmed
