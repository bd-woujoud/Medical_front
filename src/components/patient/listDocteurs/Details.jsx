import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
GetDoctorById,
selectgetdocId,
} from "../../../features/doctor/doctorSlice";
import SideBar from "../../SideBar";

import { Link } from "react-router-dom";

function Details() {
const dispatch = useDispatch();
const [open, setOpen] = useState(false);
const single = useSelector(selectgetdocId);

useEffect((id) => {
dispatch(GetDoctorById(id));
}, []);



return (
<div>
  <SideBar />

  {single && (

  <div id="content" style={{ paddingTop: "60px", position: "fixed" }}>
    <div className="inner_page contact_page">
      <div className="container-fluid">
        <div className="row column_title">
          <div className="col-md-12" style={{ marginBottom: "50px" }}>
            <div className="page_title mb-3">
              <h2 style={{ margintop: "25px" }}> Fiche de medecin</h2>
            </div>
          </div>
        </div>

        <div className="row center">
          <div className="col-md-8">
            <div className="white_shd full margin_bottom_30 center">
              <div className="full price_table padding_infor_info" style={{
                      boxShadow:
                        " 0 6px 8px 0 rgba(0, 0, 0, 0.8), 0 10px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}>
                <div className="row">
                  <div className="col-lg-12 col-md-10 col-sm-6 col-xs-12 profile_details margin_bottom_60">
                    <div className="contact_blog">
                      <div className="contact_inner">
                        <div className="row">
                          <div className="left">
                            <h4> Nom du docteur : {single.name}</h4>
                            <h3>Spécialité: {single.specialisation} </h3>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa fa-envelope-o green_color"></i>{" "}
                                {single.email}
                              </li>
                              <li>
                                <i className="fa fa-phone green_color"></i>{" "}
                                : {single.phoneNumber}
                              </li>
                              <li>
                                <i className="fa fa-map-marker green_color"></i>{" "}
                                :{single.adresse}
                              </li>
                            </ul>
                          </div>
                          <div className="right ">
                            <div className="profile_contacts float-right">
                              <img style={{
                                      width: "100px",
                                      height: "100px",
                                    }} className="img-responsive" src={"http://localhost:5000/getfile/" +
                                single.avatar} alt="#" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bottom_list"></div>
                      <div className="row">
                        <p> {single.bio}</p>
                      </div>
                      <div className="bottom_list">
                        <div className="right_button">
 
                          <Link to='/rdv'><button type="button" className="btn btn-primary btn-xs" >
                           Prendre un rendez vous
                          </button> </Link>
                         
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
  )}
</div>
);
}

export default Details;