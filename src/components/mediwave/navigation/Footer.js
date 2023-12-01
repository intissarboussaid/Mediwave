import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">

      <footer className="footerMediwave" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-s-12">
              <div className="col-lg-4 col-md-4 col-s-12">
                <ul className="social-icons" style={{ marginLeft: '12%', marginTop: '12%' }}>
                  <li>
                    <a className="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-4 col-md-4 col-s-12 ourServices">
                <h2 className="title">{t("t-Our")}</h2>
                <div className="nosService">
                  <div className="first projets" >
                    <ul><a href="/Medilink">MediLink</a></ul>
                    <ul><a href="/Steriwave">Steriwave</a></ul>
                    <ul><a href="/VRme">VRme</a></ul>
                  </div>
                  <div className="second projets">
                    <ul><a href="#ResearchAndDevelopment"> Heart Artificial</a></ul>
                    <ul> <a href="#ResearchAndDevelopment"> Ventilateur</a></ul>
                    <ul><a href="#ResearchAndDevelopment"> diagnose me</a></ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="col-md-6 col-sm-12 col-md-offset-3 ">
              <h1 style={{color:'white', fontSize:'30px'}}>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div> */}
          </div>
          <p className="copyright">Copyright © 2023 3dwave</p>
          {/* <div className="barr"></div> */}
          {/* <ul>
            <div class="row col-md-12  col-sm-12">
              <li>
                <div class="col-md-3 col-sm-3">
                  <div class="">
                    <h2>{t("address")}</h2>
                    <p>
                      Rue Amouda Mali Khzema est, <br /> Sousse, Tunisia
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="col-md-6 col-sm-6">
                  <div class="contact">
                    <h2>{t("nous_contacter")}</h2>
                    <p>
                      +216 28 899 806 <br />{" "}
                      <a href="mailto:contact@3dwave.tech">
                        contact@3dwave.tech
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="col-md-18 col-sm-18">
                  <div class="">
                    <h2>{t("horaire")}</h2>
                    <p>
                      {t("time")}
                      <br />

                    </p>
                  </div>
                </div>
              </li>
            </div>
          </ul> */}
        </div>



      </footer>





    </div>
  );
};

export default Footer;
