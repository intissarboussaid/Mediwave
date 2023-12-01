import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            {/* <div class="title-section col-md-3 col-sm-3">
              <div class="media-title">
                <h1>{t("f-m-t")}</h1>
              </div>
              <ul class="social-icons">
                <li>
                  <a class="facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="instagram">
                  <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin">
                  <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="col-md-6 col-sm-6 col-md-offset-3 ">
              <h1>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div>
          </div>
          <p className="copyright">Powered by 3D WAVE</p>
          {/* <div className="barr"></div>
          <ul>
            <div class="row col-md-12  col-sm-12">
              <li>
                <div class="col-md-3 col-sm-3">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>
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
                  <i class="fa fa-phone" aria-hidden="true"></i>
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
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
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
