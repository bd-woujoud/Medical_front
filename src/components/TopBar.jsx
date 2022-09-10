import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../Context/AuthContext'
/* import { GetcvByUser, selectCV } from '../features/cv/cvSlice'
 */import Login from '../pages/Login'
import AuthService from '../Services/authService'

function TopBar(props) {
   const { isAuth, user } = useContext(AuthContext)
   const { setUser, setIsAuth,role,setRole } = useContext(AuthContext)
   const history = useHistory()
 const {id} = useParams()
   const dispatch = useDispatch()
   

   const LogoutHanlder = () => {
      console.log("..logout")
      AuthService.logout().then(jsonData => {
         if (jsonData.success) {
            setUser(jsonData.user);
            setIsAuth(false)
            setRole("")
            // window.location.href = '/'
            localStorage.clear();



         }

      }
      
      )
   }
   return (
      <div>
         {isAuth ?
            <div className="topbar" style={{ paddingLeft: '280px' }}>
               <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="full">
                     <div className="logo_section">
                     <a href="index.html"><img class="img-responsive" src="images/logo/logo512.png" alt="#" /></a>
                        <Link to="/" style={{ paddingRight: '20px', color: '#fff' }}>ACCUEIL</Link>
                        <Link to="/Home" style={{ paddingTop: '20px', color: '#fff' }}>TB</Link>
                     </div>

                     { user ?
                        <div className="right_topbar">

                        <div className="icon_info">

                           <ul className="user_profile_dd">
                              <li>
                                 
                                 <a className="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" style={{ height: "30px",width:"30px"}}  src={'http://localhost:5000/getfile/' + user.avatar} alt="+" /><span class="name_user"> {user.email} </span></a>
                                 
                                 <div className="dropdown-menu">
                                   
                                 <a className="dropdown-item" onClick={() => window.location.href = '/profil'} ><span>Mon profil</span> <i class="fa fa-user"></i></a>
                                    <a className="dropdown-item" onClick={LogoutHanlder}><span>Se déconnecter</span> <i class="fa fa-sign-out"></i></a>
                                
                                      
                                 </div> 
                              </li>
                           </ul>
                        </div>
                     </div>: 
                     <div className="right_topbar">

                        <div className="icon_info">

                           <ul className="user_profile_dd">
                              <li>
                                 
                                 <a className="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src={'http://localhost:5000/getfile/' + user.avatar} alt="+" /><span class="name_user"> {user.email} </span></a>
                                 
                                 <div className="dropdown-menu">
                                   
                                    <a className="dropdown-item" onClick={() => window.location.href = '/mesOffre'} ><span>Mon profil</span> <i class="fa fa-user"></i></a>
                                    <a className="dropdown-item" onClick={LogoutHanlder}><span>Se déconnecter</span> <i class="fa fa-sign-out"></i></a> 
                                      
                                 </div> 
                              </li>
                           </ul>
                        </div>
                     </div>
                     }
                  </div>
               </nav>
            </div> :
            <div className="topbar" style={{ paddingLeft: '0px' }}>
               <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="full">
                     <div className="logo_section">
                        <a href="index.html"><img class="img-responsive" src="images/logo/logo512.png" alt="#" /></a>
                        <Link to="/Home" style={{ paddingRight: '20px', color: '#fff' }}>ACCUEIL</Link>
                  
                     </div>

                     <div className="right_topbar">

                        <div className="icon_info">
                           <div class="button_block">
                              <button type="button" className="button1 " onClick={() => window.location.href = '/login'} ><i class="fa fa-sign-in"></i> SE CONNECTER</button>
                              <button type="button" className="button2 " onClick={() => window.location.href = '/signUp'}><i class="fa fa-pencil"></i> S'INSCRIRE</button>
                           </div>

                        </div>
                     </div>
                  </div>
               </nav>
            </div>}
      </div>
   )
}

export default TopBar