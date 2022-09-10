import React, { useContext, useEffect } from 'react';
import './App.css';

/* import SiderBar from './components/SiderBar';
 */import TopBar from './components/TopBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home';
 import PrivateRoute from './higherOrderComponents/PrivteRoute';
 import PublicRoute from './higherOrderComponents/PublicRoute';
 import CreateDossierMed from './components/patient/dossMedical/CreatedossierMedical';
 import Details from './components/patient/listDocteurs/Details';
 import DocList from './components/patient/listDocteurs/listdoc';
 import ListLab from './components/patient/listLab/ListLab';
 import RDVprise from './components/patient/priseRDV/RDVprise';
 import Profil from './components/patient/Profil';
import QSN from './components/QSN';
import FAQ from './components/FAQ';

import Landing from './components/Landing';
import listDemandeRdv from './components/patient/priseRDV/listDemandeRdv';
import demandeConfirmed from './components/patient/priseRDV/demandeConfirmed';
import GetDemande from './components/doctor/GetDemande';
import ListPatient from './components/doctor/ListPatient';





function App() {
  // const dispatch = useDispatch()
  // const { user } = useContext(AuthContext)
  // useEffect(() => {
  //   dispatch(GetDossByPatient(user._id))
  //   dispatch(GETLabos())


  // }, [])
  
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/createdossierMedical" component={CreateDossierMed} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/details" component={Details} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listdoc" component={DocList} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listlab" component={ListLab } />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/home" component={Home} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/rdv" component={RDVprise} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/profil" component={Profil} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listrdv" component={listDemandeRdv} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/rdvconfirmed" component={demandeConfirmed} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/demandedoctor" component={GetDemande} />
          <PrivateRoute roles={["Patient", "Doctor", "Laboratoire", "Admin"]} path="/listpatient" component={ListPatient} />
          <PublicRoute path="/QSN" component={QSN} />
          <PublicRoute path="/FAQ" component={FAQ} />
          <PublicRoute path="/users/search" component={QSN} />
          <Route path="/NotFound" component={NotFound} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signUp" component={SignUp} />
          <PublicRoute exact path="/" component={Landing} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;