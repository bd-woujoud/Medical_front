import React from 'react'
import { useEffect,  useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../Context/AuthContext'
import { GetPatientByDoctor, selectpatients } from '../../features/patient/patientSlice'

import SideBar from '../SideBar'

function ListPatient() {

    const patients = useSelector(selectpatients)
    const dispatch = useDispatch()
    const { user, role } = useContext(AuthContext)

    useEffect(() => {

        dispatch(GetPatientByDoctor(user._id))

    }, [])

    return (

        <div>
            <SideBar />
            <div id="content">
                <div class='main' >
                    <div class='container mt-5'>
                        <div className="row column1 " >
                            <div className="col-md-10">
                                <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2>Liste de mes Patient</h2>
                                        </div>
                                    </div>
                                    <div className="table_section padding_infor_info">
                                        <div className="table-responsive-sm">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>sexe</th>
                                                        <th>date_naissance</th>
                                                        <th>adresse</th>
                                                        <th>téléphone</th>
                                                        <th>Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{

                                                    patients.map((r, i) => {
                                                        return (
                                                            <tr className="table-success">
                                                               <td>{i + 1}</td>
                                                                <td>{r.name}</td>
                                                                <td >{r.gender}</td>
                                                                <td>{r.birthDate}</td>
                                                                <td>{r.adresse}</td>
                                                                <td>{r.phoneNumber}</td>
                                                                <td>{r.email}</td>
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

export default ListPatient