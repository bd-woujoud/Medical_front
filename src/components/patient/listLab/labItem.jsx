import React, { useContext } from 'react'
function DocIteme({ docteur }) {
  

    return (
        <div className="full progress_bar_inner">
            <div className="row">
                <div className="col-lg-12">
                    <div className="msg_section">
                        <div className="msg_list_main">
                            <ul className="msg_list">
                                <li>
{                                    <span><img  src={'http://localhost:5000/getfile/' + docteur.avatar}  className="img-responsive" alt="#" /></span>
}                                    <span>
                                        <span className="name_user">{docteur.name}</span>

                                        <span className="msg_user"><p><strong>Titre: </strong>{docteur.specialisation}</p>
                                            <p><strong> Type d'emploi: </strong>{docteur.education} </p></span><br />
                                        <span className="msg_user"><p><strong> bio: </strong>{docteur.bio} </p></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default DocIteme