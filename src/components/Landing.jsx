import React from 'react'
import '../assets/css/home.css'
import ab from '../assets/images/groupes.png'
import cd from '../assets/images/compatible.jpeg'
import kh from '../assets/images/kh.jpeg'
import tunis from '../assets/images/centre.png'

function Landing() {

  return (

    <div>

      <div >
        <section  id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row">
              <div className="col-xl-8" >
                <h1>REJOIGNEZ-NOUS</h1>
                <h1> DEVENEZ MEMBRE DE NOTRE SITE E-HEALTH!</h1>

              </div>
            </div>
          </div>
        </section>{/* End Hero */}


        <main id="main">
          <section id="services" className="services section-bg ">
            <div className="container" data-aos="fade-up">

              <div className="row">
                <div className="col-md-6">
                  <img src={tunis} alt className="img-fluid" /></div>
                <div className="col-md-6">
                  <div className="section-title">
                    <h2>POURQUOI NOUS REJOINDRE ?</h2></div>
                  <h6>
                    Si vous êtes un medecin vous pouvez recevoir les demandes de consultations en ligne et si vous êtes patient vous vous trouvez dans une plateforme la ou vous pouvez fixez un rendez vous avec un de nos docteurs et vous pouvez aussi consulter tous les diagnostiques et analyses médicales, et si vous êtes une laboratoires médicales vous pouvez posez les analyses médicales en ligne pour chaque patient et vous pouvez être en contact direct en ligne avec les docteurs et les patients.                 </h6>
                </div>
              </div>


            </div>{/* End .content*/}


          </section>{/* End About Section */}

          {/* ======= Tabs Section ======= */}
          <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="section-title">
                        <h3>Pour NOS PATIENTS </h3></div>
                      <h6 className="fst-italic">
                        Consultez des médecins inscrits à l’ordre des médecins : examen de votre dossier ; discussion par messages avec médecin ;demander un rendez vous en ligne ou sue place  ; récupérez votre traitement en ligne.
                        La Téléconsultation contribue fortement à l’amélioration des services de santé. Elle apporte des solutions complémentaires aux prestations habituelles effectuées dans les cabinets médicaux.

                        L’usage le plus connu de la Téléconsultation correspond au suivi d’un patient que le médecin connait déjà. Ainsi, le dimanche ou bien le soir, l’accès au médecin traitant devient possible et convivial. De même, le patient peut récupérer son traitement en ligne si le médecin ou le patient lui-même est en voyage.


                      </h6> <br />
                      <br />

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                      <h5>Notre objectif est que vous trouvez un médecin à tout moment</h5>

                      <img src={cd} alt  style={{height:"300px",width:"600px"}}className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                      <img src={ab}  style={{height:"300px",width:"600px"}} alt className="img-fluid" />
                    </div>


                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="section-title">
                        <h3>POUR NOS Medecins</h3></div>
                      <h6 className="fst-italic">
                        Vous pouvez recevoir des rendez vous en ligne par email et fixer des reunions et faire le chat avec les patients et les laboratoires.
                        Vous pouvez gérer vos rendez-vous et documents de santé ainsi que ceux de vos proches sur une même application
                        Vous pouvez fixer des rendez vous en ligne. Par ailleurs, une première rencontre entre le patient et le médecin à distance peut s’avérer très utile aux patients dans certaines situations, notamment lorsque le patient et le médecin ne sont pas dans le même pays ou ne sont pas dans la même ville. Le patient peut avoir un premier contact avec un spécialiste avant d’engager tout un voyage. Il peut bénéficier ainsi de l’étude de son dossier, appuyé par un interrogatoire en vidéo.

                        Nous attirons l’attention et nos clients, que ne proposons pas de service d’urgence via cette plate-forme.

                      </h6>
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Tabs Section */}
          {/* ======= Services Section ======= */}
          <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay={200}>
                      <img src={kh}  style={{height:"300px",width:"600px"}} alt className="img-fluid" />
                    </div>


                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                      <div className="section-title">
                        <h3>POUR NOS Laboratoires</h3></div>
                      <h6 className="fst-italic">
                        Vous pouvez recevoir des rendez vous en ligne par email par les patients pour faire leurs analyses médicales.
                        Vous pouvez gérer vos rendez-vous et documents de santé ainsi que ceux de vos proches sur une même application
                      </h6>
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Tabs Section */}
          <section id="services" className="services section-bg ">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>POURQUOI CE CONCEPT ?</h2>

              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bi bi-briefcase" />

                    <h4>Parce qu’à l’heure actuelle, tout sera facile derrière nos écrans </h4>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bi bi-card-checklist" />

                    <h4>Les engagements humains sont de plus en plus nombreuse et ça sera mieux d'utiliser l'internet que de se déplacer</h4>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bi bi-bar-chart" />

                    <h4> Chaque jour, des centaines de malades ou accidentés ont besoin des rendez vous et de recevoir les analyses médicales pour survivre et guérir. </h4>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bi bi-binoculars" />

                    <h4>D'un seul click tout sera chez vous 
                    </h4>
                  </div>
                </div>

              </div>
            </div>

          </section>{/* End Services Section */}


          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">

                <h2>Contact</h2>

              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>


                <div className="col-md-4">
                  <div className="info-box">
                    <i className="bx bx-map" />
                    <h3>Notre Adresse</h3>
                    <p>Sahloul Sousse</p>
                    <p>Zahra ben Arous</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box ">
                    <i className="bx bx-envelope" />
                    <h3>Email </h3>
                    <p>info@example.com<br />contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box">
                    <i className="bx bx-phone-call" />
                    <h3>Téléphone</h3>
                    <p>+216 558 955<br />+216 558 955</p>
                  </div>
                </div>

              </div>

            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top mt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>E-health-care<span>.</span></h3>
                  <p>
                    Sahloul/Zahra <br />

                    sousse/ ben arous <br /><br />
                    <strong>Téléphone:</strong> +216 558 955<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>


  )
}

export default Landing 