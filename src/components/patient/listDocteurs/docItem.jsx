import React  from 'react'
import { useHistory } from 'react-router-dom';

function DocIteme({ docteur }) {

const history=useHistory()

    return (

        <div className="col-md-4">
            <div className="dark_bg full margin_bottom_30">
                <div className="full graph_revenue">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content testimonial">
                                <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item carousel-item active">
                                            <div className="img-box"><img src={'http://localhost:5000/getfile/' + docteur.avatar} className="img-responsive" alt="#" /></div>
                                            <p className="overview"><b>{docteur.name}</b></p>
                                            <p className="overview"><b>{docteur.specialisation} </b></p>
                                            {/* <p >{docteur.bio}</p>  */}
                                            <div class="float-right"> 
                                            <button type="button" class="btn btn-success btn-xs" onClick={() => {localStorage.setItem('docId', docteur._id);history.push("/details");}} >
                                            <i class="fa fa-user"></i> détails
                                                </button>
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
    )
}

export default DocIteme