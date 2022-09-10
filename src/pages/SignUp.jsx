import React, { useContext, useState } from 'react'
import Doctor from '../images/doctor.png'
import Patient from '../images/malade.png'
import Laboratoire from '../images/Labo.png'
import '../css/Register.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RegistredDoctor, RegistredLabos, RegistredPatient, selectregistererror } from '../features/auth/authSlice'

export default function SignUp(props) {

   const dispatch = useDispatch()
   const [values, setValues] = useState({})
   const errors = useSelector(selectregistererror)
   const [role, setrole] = useState('');
   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      console.log('Success:', values);
      if (role === "Docteur") {
         dispatch(RegistredDoctor(values))
        
      }
      else if(role === "Patient") {

         dispatch(RegistredPatient(values))
   
      }
      else{
         dispatch(RegistredLabos(values))
        
      }

    
   }
   const ErrorHandler = ({ name }) => { 

      return (
          <>
              {
                 errors.map(e => {console.log(errors,"errrrrrrrrrrrr");
                      return (
                          <>
                              {
                                  e.path[0] === name
                                  &&
                                  <span style={{ color: "red" }}  >{e.message}</span>
                              }
                          </>
                      )
                  })
  
              }
          </>
      )
  }

   return (
      <div>
         <div className='registerform' >
            {role === '' &&
               <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                  <div  >
                     <span className='spanf' style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}  >
                        Vous êtes?
                     </span>
                  </div>
                  <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                     <div >
                        <div className="Author">
                           <img onClick={() => setrole('Docteur')} src={Doctor} alt="" align="center" />
                           <h4>Docteur</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('Patient')} src={Patient} alt="" align="left" />
                           <h4>Patient</h4>
                        </div>
                     </div>
                     <div   >
                        <div className="Author">
                           <img onClick={() => setrole('Laboratoire')} src={Laboratoire} alt="" align="left" />
                           <h4> Laboratoire </h4>
                        </div>
                     </div>
                  </div>

               </div>
            }
            {
               (role === 'Laboratoire' || role === 'Docteur' || role === 'Patient') && <>

                  <div className="registre" >
                     <div className="container "  >
                        <div className="center verticle_center full_height">
                           <div className="login_section mt-5">

                              <div className="login_form">
                                 <form onSubmit={onSubmit} >
                                    <fieldset>
                                       <div className="field">
                                          <label className="label_field">Nom <color style={{ color: 'red' }}>*</color> </label>
                                          <input type="name" name="name" placeHolder="Nom" onChange={onChangeHandler}  />
                                          <div className="text-danger"> <ErrorHandler name='name' /></div>

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Téléphone <color style={{ color: 'red' }}>*</color> </label>
                                          <input type="PhoneNumber" name="phoneNumber" placeHolder="Numéro de téléphone" onChange={onChangeHandler}  />
                                          <div className="text-danger"> <ErrorHandler name='phoneNumber' /></div>

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Adresse <color style={{ color: 'red' }}>*</color></label>
                                          <input type="Adress" name="adresse" placeHolder="Adresse" onChange={onChangeHandler}  />
                                          <div className="text-danger"> <ErrorHandler name='adresse' /></div>

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Email <color style={{ color: 'red' }}>*</color></label>
                                          <input type="email" name="email" placeHolder="E-mail" onChange={onChangeHandler}  />
                                          <div className="text-danger"> <ErrorHandler name='email'/></div>

                                       </div>
                                       <div className="field">
                                          <label className="label_field">Mot de passe <color style={{ color: 'red' }}>*</color></label>
                                          <input type="password" name="password" placeHolder="Mot de passe" onChange={onChangeHandler}  />
                                          <div className="text-danger"> <ErrorHandler name='password' /></div>

                                       </div>
                                       {(role === 'Docteur' || role === 'Patient') &&
                                          <div className="field">
                                              <label className="label_field">gender<color style={{ color: 'red' }}>*</color></label>
                                              <select name='gender' onChange={onChangeHandler}  placeholder="gender" >
                                              <option value={"Male"}>Male</option>
                                              <option value={"Femelle"}>Femelle</option> 
                                              </select>
                                              <div className="text-danger">  <ErrorHandler name='gender' /></div>
             
                                          </div>
                                       }
            
                                       {role === 'Docteur' &&
                                          <div className="field">
                                             <label className="label_field">Spécialité <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="specialisation" placeHolder="specialisation" onChange={onChangeHandler}  />
                                             <div className="text-danger"> <ErrorHandler name='specialisation' /></div>

                                          </div>}
                                       {role === 'Docteur' &&
                                          <div className="field">
                                             <label className="label_field">Education <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="education" placeHolder="education" onChange={onChangeHandler}  />
                                           
                                             <div className="text-danger"> <ErrorHandler name='education' /></div>

                                          </div>}
                                       {role === 'Docteur' || role === 'Laboratoire' &&
                                          <div className="field">
                                             <label className="label_field">Bio <color style={{ color: 'red' }}>*</color></label>
                                             <input type="text" name="bio" placeHolder="bio" onChange={onChangeHandler}  />
                                             <div className="text-danger"> 
                                             <ErrorHandler name='bio' /></div>

                                          </div>}
                                       {role === 'Patient' &&
                                          <div className="field">
                                             <label className="label_field">Date naissance<color style={{ color: 'red' }}>*</color></label>
                                             <input type="date" name="birthDate" placeHolder="Date de naissance" onChange={onChangeHandler}  />
                                             <div className="text-danger"> <ErrorHandler name='birthDate' /></div>

                                          </div>
                                       }
                                       <div className="field margin_0">
                                          <label className="label_field hidden">hidden label</label>
                                          <button id="btnn" class="btn">S'inscrire</button>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            }

         </div>
      </div>
   )

}

