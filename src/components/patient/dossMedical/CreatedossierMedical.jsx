import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../SideBar'
import { AuthContext } from '../../../Context/AuthContext'
import { CreateDossMed, GetDossByPatient, selectmyDoss, UpdateDoss } from '../../../features/dossierMedical/dossMedSlice'
import { EditOutlined } from '@ant-design/icons';

function CreateDossierMed() {
   const dispatch = useDispatch()
   const { user } = useContext(AuthContext)
   const [values, setValues] = useState({})
   const [disabled, setdisabled] = useState(true)
   // const dossmeddetails = useSelector(selectmyDoss)
   const dossmeddetails = JSON.parse(localStorage.getItem('myDoss'))[0]
   const doss = localStorage.getItem('myDoss')[0]
   const [dossmedDetails, setDossmedDetails] = useState(dossmeddetails)


   const handleChange = e => {
      const { name, value } = e.target;
      setDossmedDetails(prevState => ({
         ...prevState,
         [name]: value
      }));

   };
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setValues({
         ...values,
         [name]: value
      });
   }



   const HandleCreateDossierMed = (e) => {
      e.preventDefault();
      values.patient = user._id
      dispatch(CreateDossMed(values))
   }

   const handleupdate = () => {
      let data = {
         id: dossmeddetails._id,
         data: dossmedDetails
      }
      dispatch(UpdateDoss(data))
      setdisabled(!disabled)
   }


   return (

      <div class="row" style={{ display: "flex" }}>
         <div>
            <SiderBar />
         </div>

         <div  >
            <div id="content">
               <div className="container">
                  <div className="center verticle_center full_height">
                     <div className="login_section">
                        <div className="login_form">
                           {(dossmedDetails) &&
                              <div>
                                 <form >
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                       <h4 className="text-right">Mise à jour de votre dossier médical</h4>
                                       <EditOutlined className="upload" onClick={() => setdisabled(!disabled)} />
                                    </div>
                                    <fieldset>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput1" className="active">Poids <color style={{ color: 'red' }}>*</color></label>
                                          <input type="number" className="form-control" name='weight' id="formGroupExampleInput1" value={dossmedDetails.weight} disabled={disabled} onChange={handleChange} required />
                                       </div>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput2" className="active">Taille <color style={{ color: 'red' }}>*</color></label>
                                          <input type="number" className="form-control" name='height' value={dossmedDetails.height} id="formGroupExampleInput2" onChange={handleChange}  disabled={disabled} required />
                                       </div>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput3" className="active"> Groupe Sanguin<color style={{ color: 'red' }}>*</color></label>
                                          <textarea className="form-control" name='bloodType' value={dossmedDetails.bloodType} id="formGroupExampleInput3" onChange={handleChange} disabled={disabled} required />
                                       </div>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput4" className="active">Allergies <color style={{ color: 'red' }}>*</color></label>
                                          <input type="text" name='allergies' className="form-control" value={dossmedDetails.allergies} id="formGroupExampleInput4" onChange={handleChange} disabled={disabled} required />
                                       </div>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput4" className="active">Analyse de la santé<color style={{ color: 'red' }}>*</color></label>
                                          <input type="text" name='analytics' className="form-control" value={dossmedDetails.analytics} id="formGroupExampleInput4" onChange={handleChange} disabled={disabled} required />
                                       </div>
                                       <div className="form-group">
                                          <label for="formGroupExampleInput4" className="active">Autre infos <color style={{ color: 'red' }}>*</color></label>
                                          <input type="text" name='otherInfos' className="form-control" value={dossmedDetails.otherInfos} id="formGroupExampleInput4" onChange={handleChange} disabled={disabled} required />
                                       </div>
                                       <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleupdate}>save</button></div>

                                    </fieldset>
                                 </form>
                              </div>}
                           {(doss&& (!dossmeddetails))&&
                              <form >
                                 <fieldset>
                                    <div className="form-group">
                                       <label for="formGroupExampleInput1" className="active">Poids <color style={{ color: 'red' }}>*</color></label>
                                       <input type="number" className="form-control" name='weight' id="formGroupExampleInput1" onChange={onChangeHandler} placeHolder="Saisissez votre poids" required />
                                    </div>
                                    <div className="form-group">
                                       <label for="formGroupExampleInput2" className="active">Taille <color style={{ color: 'red' }}>*</color></label>
                                       <input type="number" className="form-control" name='height' id="formGroupExampleInput2" onChange={onChangeHandler} placeHolder="Saisissez votre taille" required />
                                    </div>
                                    <div class="form-group" style={{ height: "50px" }}> Groupe Sanguin
                                       <select name='bloodType'
                                          onChange={onChangeHandler}
                                          id="formGroupExampleInput2"
                                          class="form-control"
                                          style={{ height: "50px", color: "black", fontSize: "15px" }}
                                          placeholder="groupe_sanguin"
                                       >
                                          <option value={"O+"}>O+</option>
                                          <option value={"O-"}>O-</option>
                                          <option value={"A+"}>A+</option>
                                          <option value={"AB"}>AB</option>
                                          <option value={"A-"}>A-</option>
                                       </select>
                                    </div>
                                    <div className="form-group">
                                       <label for="formGroupExampleInput4" className="active">Allergies <color style={{ color: 'red' }}>*</color></label>
                                       <input type="text" name='allergies' className="form-control" id="formGroupExampleInput4" placeHolder="Saisissez si vous avez des allergies" onChange={onChangeHandler} required />
                                    </div>
                                    <div className="form-group">
                                       <label for="formGroupExampleInput4" className="active">Analyse de la santé<color style={{ color: 'red' }}>*</color></label>
                                       <input type="text" name='analytics' className="form-control" id="formGroupExampleInput4" placeHolder="Analyses" onChange={onChangeHandler} required />
                                    </div>
                                    <div className="form-group">
                                       <label for="formGroupExampleInput4" className="active">Autre infos <color style={{ color: 'red' }}>*</color></label>
                                       <input type="text" name='otherInfos' className="form-control" id="formGroupExampleInput4" placeHolder="autre informations" onChange={onChangeHandler} required />
                                    </div>
                                    <div className="field margin_0">
                                       <label className="label_field hidden">hidden label</label>
                                       <button className="main_bt" onClick={HandleCreateDossierMed} >Ajouter votre dossier medical</button>
                                    </div>
                                 </fieldset>
                              </form>}

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div >

   )
}

export default CreateDossierMed