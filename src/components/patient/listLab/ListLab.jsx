import { Modal } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../Context/AuthContext'
import { GETLabos, selectlabos } from '../../../features/labo/laboSlice'
import { selectsendmail, SendMail } from '../../../features/user/userSlice'
import SiderBar from '../../SideBar'

function ListLab() {
    const { user } = useContext(AuthContext)

    const dispatch = useDispatch()
    const labos = useSelector(selectlabos)
    const sendmail = useSelector(selectsendmail)

    useEffect(() => {

        dispatch(GETLabos())

    }, [])

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')



    const contactLabos = () => {
        console.log(labos,'rrrrrrrrrrrrr');
        let demande={
            from:user.email,
            to: localStorage.getItem('emaillabos'),
            subject:subject,
            text:"Je suis "+ user.name +", "+ message +" veuillez svp me répondre sur mon email: "+ user.email
          }
         console.log("aaaaaaaaaaa" , demande)
         dispatch(SendMail(demande))
       
        // let data = {
        //   to: labos.email,
        //   message: message,
        //   voyageur: user._id,
        // }
    
        // axios.post('http://localhost:4000/users/sendContact', data)
        //   .then(res => {
        //     console.log(res, "mail");
        //   })
        if (sendmail==="fulfilled")
        alert('votre message à été envoyé avec succées');
      else

      alert("problème d'envoie");
      }
   


    return (

        <div>
            <SiderBar />
            <div id="content">
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <h2>Liste des laboratoires</h2>
                        </div>
                    </div>
                </div>
                <div className="row ml-3" style={{ marginTop: '20px' }}>

                    {
                        labos.map((l, i) => {
                            return (

                                <div class="col-md-4 col-lg-4">
                                    <div class="full white_shd margin_bottom_30" style={{ boxShadow: "0px 0 15px -8px #000" }}>
                                        <div class="info_people">
                                            <div class="p_info_img">
                                                <img src={'http://localhost:5000/getfile/' + l.avatar} alt="#" />
                                            </div>
                                            <div class="user_info_cont">
                                                <h4>{l.name}</h4>
                                                <ul className="list-unstyled">
                                                    <li><i className="fa fa-envelope-o"></i> {l.email}</li>
                                                    <li><i className="fa fa-phone"></i> : {l.phoneNumber}</li>
                                                    <li><i className="fa fa-map-marker"></i> :{l.adresse}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bottom_list"></div>

                                        <div class="float-right" onClick={() => localStorage.setItem('phonelabos', l.phoneNumber)}>
                                            <button type="button" class="btn btn-success btn-xs" onClick={() => setModal1Visible(true)} >
                                                <i class="fa fa-phone"></i> Appelez
                                            </button>
                                        </div>
                                        <div class="float-right mr-3" onClick={() => localStorage.setItem('emaillabos', l.email)}>
                                            <button type="button" class="btn btn-primary btn-xs" onClick={() => setModal2Visible(true)} >
                                                <i class="fa fa-envelope-o"></i> message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <Modal footer={null}
                    title="Appelez votre laboratoire"
                    visible={modal1Visible}
                    onOk={() => setModal1Visible(false)}
                    onCancel={() => setModal1Visible(false)}
                   
                >
                    <a href= "tel:{localStorage.getItem('phonelabos')}" style={{ fontSize: "25px", marginLeft: "20px" }} >
                     {localStorage.getItem('phonelabos')}
                    </a>

                </Modal>

                <Modal footer={null} title="New message" visible={modal2Visible}
                    onOk={() => setModal2Visible(false)}
                    onCancel={() => setModal2Visible(false)}>

                    <div class="modal-body">
                        <form  >
                            <div className="Follow">
                                <div className="row">
                                    <label class="label" htmlFor="subject">
                                        <h4 style={{ fontWeight: "bold" }}> To :  {localStorage.getItem('emaillabos')} </h4>
                                    </label>

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5" >
                                        <textarea value={subject} onChange={(e) => setSubject(e.target.value)}className="textarea " placeholder="Tapez le sujet de votre email" type="text" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5" >
                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}className="textarea " placeholder="Tapez votre message" type="text" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="ant-modal-footer"><button type="button" class="ant-btn ant-btn-default"><span>annulé</span></button>
                    <button type="button" class="ant-btn ant-btn-primary"onClick={contactLabos} ><span>envoyé</span></button></div>
                </Modal>
            </div>
        </div>

    )
}

export default ListLab