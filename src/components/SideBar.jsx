import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'


function SideBar() {

   const { user, role } = useContext(AuthContext)
   const dispatch = useDispatch()
   console.log('userrole', user, role)
   console.log(user.name)


   return (

      <div>
         <nav id="sidebar">
            <div className="sidebar_blog_1">
               <div className="sidebar-header">
                  <div className="logo_section">
                     <a href="index.html"><img class="logo_icon img-responsive rounded-circle" src="images/logo/logo_icon.png" alt="#" /></a>
                  </div>
               </div>
               <div className="sidebar_user_info">
                  <div className="icon_setting"></div>
                  <div className="user_profle_side">
                     <div className="user_img">
                        <img className="img-responsive" style={{ height: "70px",width:"180px"}}  src={'http://localhost:5000/getfile/' + user.avatar} alt="#" /></div>
                     <div className="user_info">
                        <h6>{user.name}</h6>
                        <p><span className="online_animation"></span> Online</p>
                     </div>
                  </div>
                  <br />
               </div>
            </div>
            <div className="sidebar_blog_2"> <h4>{role}</h4>
               <ul className="list-unstyled components" >
                  { (role === "Patient") &&
                     <div>
                        <li><Link to ="/listrdv"><i class="fa fa-paper-plane yellow_color"></i> <span>mes Demande envoyées</span></Link></li>
                        <li><Link to ="/rdvConfirmed"><i class="fa fa-calendar blue1_color"></i> <span>mes Demandes confirmées</span></Link></li>
                        <li><Link to="listdoc"><i class="fa fa-heart red_color"></i> <span>Liste des medecins</span></Link></li>
                        <li><Link to="/listlab"  ><i class="fa fa-list green_color"></i> <span>Liste des Laboratoires</span></Link></li>
                        <li><Link to="/createdossierMedical"><i class="fa fa-folder  blue2_color"></i><span> Dossier Médical</span></Link></li>
                        <li><Link to="/profil"  ><i class="fa fa-user purple_color2"></i> <span>Profil</span></Link></li>
                     </div>
                  }
                      {(role === "Doctor") &&
                       <div>
                       <li><Link to ="/demandedoctor"><i class="fa fa-level-down yellow_color"></i> <span>les demandes reçus</span></Link></li>
                       <li><Link to ="/rdvConfirmed"><i class="fa fa-calendar blue1_color"></i> <span>liste des RDV confirmées</span></Link></li>
                       <li><Link to="/listpatient"><i class="fa fa-list green_color"></i> <span>Liste des Patients</span></Link></li>
                       <li><Link to="/createdossierMedical"><i class="fa fa-folder  blue2_color"></i><span> Dossier Médical</span></Link></li>
                       <li><Link to="/profil"><i class="fa fa-user purple_color2"></i> <span>Profil</span></Link></li>
                       </div>
                    }
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default SideBar