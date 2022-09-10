import React, { useEffect ,useState ,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../Context/AuthContext";
import { demandeRDV} from "../../../features/appointement/appointmentSlice";
import { GETDoctors, selectalldoc, selectgetdocId } from "../../../features/doctor/doctorSlice";
import SideBar from "../../SideBar";

function RDVprise(props) {

  const dispatch = useDispatch();
  const docteurs = useSelector(selectalldoc);
  const single = useSelector(selectgetdocId);
  const { user } = useContext(AuthContext);
  const[date,setDate]=useState('');
  const[message,setMessage]=useState('')

  useEffect(() => {
    dispatch(GETDoctors());
  }, []);


const handleDemande=(e)=>{

  e.preventDefault();
  let data={
  date:date,
  message:message,
  doctor:single._id,
  patient:user._id
}

dispatch(demandeRDV(data))
props.history.replace("/listrdv")

}

  return (

    <div>
      <SideBar />{ single &&
      <div id="content">
        <div className="row column_title">
          <div className="col-md-12">
            <div className="page_title">
              <h2>Demande du rendez vous</h2>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <form style={{width:"500px",marginLeft:'200px'}} >
            <fieldset>
              <div className="form-group">
                <label for ="nom">Entrez votre nom</label><br></br><br></br>
                <input type="text" className="form-control" id="nom"  placeholder="Nom complet svp " disabled="true" value={user.name} />
              </div>

              <div className="form-group">
                <label for="email"> votre adresse  mail</label><br></br><br></br>
                <input type="email" className="form-control" id="email" disabled="true" value={user.email}/>
              </div>
              <div className="form-group">
                <label for="email"> Docteur</label><br></br><br></br>
                <input type="text" className="form-control" id="email" disabled="true" value={single.name}/>
              </div>

              {/*<div className="form-group">
                <label for="selection">Choisissez votre docteur</label><br></br><br></br>
                <input type="text" id="selection" name="trip-start" disabled="true" value={single.name} />
                 <select id="selection" class="form-control">
                  <option value="">Liste de choix...</option>

                  {docteurs.map((docteur, i) => {
                    return <option value="">{docteur.name}</option>;
                  })}
                </select>
              </div> */}
              <div class="form-group">
                <label for="selection">
                  Choisir le jour du rendez vous pour vous fixer une heure
                </label>
                <br></br><br></br>
                <input type="date" id="selection" name="trip-start" value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div class="form-group">
                <label for="bio">Message complémentaire à la demande </label><br></br><br></br>
                <textarea class="form-control" id="bio" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
            </fieldset> 
            <button type="button" class="btn btn-success float-right " onClick={handleDemande}>
            envoyer ma demande
          </button>
          </form>
         
        </div>
      </div> }
     
    </div>
  );
}

export default RDVprise;
