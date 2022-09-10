import React, { useContext, useEffect, useState } from 'react'
import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import { AuthContext } from '../../Context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectavatarstatus, selectuploadavatar, UpdateUser, UploadAvatar } from '../../features/user/userSlice';
import Swal from 'sweetalert2';
import SiderBar from '../SideBar';
import { selectupdatestatus, UpdatePAtient, UpdatePatient } from '../../features/patient/patientSlice';

const Profil = () => {

const { user } = useContext(AuthContext)
const [disabled, setdisabled] = useState(true)
const [userdetails, setuserdetails] = useState(user)
const statusUpdate = useSelector(selectupdatestatus)
const statusUpdateavatar = useSelector(selectavatarstatus)

const dispatch = useDispatch()
const handlePicChanged = (e) => {

let fdata = new FormData()
fdata.append('avatar', e.target.files[0])

let data = {
id: user._id,
data: fdata
}
dispatch(UploadAvatar(data))

}

const handleChange = e => {
const { name, value } = e.target;
setuserdetails(prevState => ({
...prevState,
[name]: value
}));
}

const handleupdate = () => {

let data = {
id: user._id,
data: userdetails
}

dispatch(UpdatePAtient(data))
setdisabled(!disabled)
}

return (
<div>

    <SiderBar />

    <div id="content">
        <div class='main' style={{ marginTop: "70px" }}>
            <div class="midde_cont">
                <div class="container-fluid">
                    <div class="row column1 ">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="white_shd full " style={{ boxShadow: "0px 0 30px -8px #000" }}>
                                <div class="full price_table padding_infor_info">
                                    <div class="row">

                                        <div class="col-lg-12">
                                            <div class="full dis_flex center_text">
                                                <div class="profile_img"><img width={180} height={180}
                                                        className="rounded-circle" src={'http://localhost:5000/getfile/'
                                                        + user.avatar} />
                                                    <CameraOutlined onClick={()=>
                                                        document.getElementById('upload').click()}
                                                        style={{ color: "blue", width: "40px", height: "40px", position: "absolute" }}
                                                        className='upload' />
                                                        <div class="contact_inner mt-2 ml-5">
                                                            <h3>{user.name} </h3>

                                                            <ul class="list-unstyled">
                                                                <li><i class="fa fa-envelope-o green_color"></i> :
                                                                    {user.email}</li>
                                                                <li><i class="fa fa-phone green_color"></i> :
                                                                    {user.phoneNumber}</li>
                                                            </ul>
                                                        </div>
                                                </div>
                                                <div class="profile_contant">

                                                    <div className="col-md-12 ">

                                                        <div
                                                            className="d-flex justify-content-between align-items-center  text-right">
                                                            <h4 className="mb-5">Profile Settings</h4>
                                                            <EditOutlined onClick={()=> setdisabled(!disabled)}
                                                                style={{ fontSize: '30px', color: "blue" }} />
                                                        </div>

                                                        <div className="col-md-12"><label>Nom</label><input
                                                                value={userdetails.name} onChange={handleChange}
                                                                type="text" className="form-control" name="name"
                                                                disabled={disabled}
                                                                style={{ fontSize: '13px', color: "black", fontWeight: 'bold', height: "50px" }} />
                                                        </div>
                                                        <div className="col-md-12"><label>adresse</label><input
                                                                value={userdetails.adresse} onChange={handleChange}
                                                                type="text" className="form-control" name="adresse"
                                                                disabled={disabled}
                                                                style={{ fontSize: '13px', color: "black", fontWeight: 'bold', height: "50px" }} />
                                                        </div>
                                                        <div className="col-md-12"><label>Téléphone</label><input
                                                                value={userdetails.phoneNumber} onChange={handleChange}
                                                                name="phoneNumber" type="text" className="form-control"
                                                                disabled={disabled}
                                                                style={{ fontSize: '13px', color: "black", fontWeight: 'bold', height: "50px" }} />
                                                        </div>
                                                        <div className="col-md-12"><label>Email</label><input
                                                                value={userdetails.email} onChange={handleChange}
                                                                type="text" className="form-control" name="email"
                                                                disabled={disabled}
                                                                style={{ fontSize: '13px', color: "black", fontWeight: 'bold', height: "50px" }} />
                                                        </div>
                                                        <div className="mt-5 mb-3 text-right"><button onClick={()=>
                                                                handleupdate()} className="btn btn-primary
                                                                profile-button" type="button">save</button></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <input id='upload' onChange={(e)=> handlePicChanged(e)} type="file" hidden />
</div>
)
}

export default Profil