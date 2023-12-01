import React, { useEffect, useState } from "react";
import mediwave from "../../../assets/images/logoMediwave.png";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./Navbar.css";
import flagFR from "../../../assets/images/flagFR.png";
import flagUS from "../../../assets/images/flagUS.png";


const Header = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [ccurrentLanguageCode, setCcurrentLanguageCode] = useState(cookies.get("i18next"));

  const handleLanguageChange = (code) => {
    setCcurrentLanguageCode(cookies.get("i18next"));
    i18next.changeLanguage(code);
  }

  const { width, height } = useResizeScreen();
  const [widthImage, setWidthImage] = useState(150);
  const [dropDown, setDropDown] = useState({
    background: 'rgba(130, 188, 228, 0.9)',
    border: 'rgba(130, 188, 228, 0.9)',
    marginLeft: 'none',
  });
  const [styleImage, setStyleImage] = useState({ margin: "7%" });

  const IconlanguageStyle = {
    fontSize: '22px',
    color: 'white',
    cursor: 'pointer',
    background: 'transparent',
  };

  // langages
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },

  ];

  const Ic_fr = () => <a style={{color:'white', textDecoration:'none' ,cursor:'pointer' }}> <img src={flagFR} style={{width:'20px'}}/> FR</a>;

  const Ic_gb = () => <a style={{color:'white', textDecoration:'none',cursor:'pointer' }} > <img src={flagUS} style={{width:'20px'}}/> US</a>;

  const currentLanguageCode = cookies.get("i18next");
  const { t } = useTranslation();
  useEffect(() => {
    console.log(t("Welcome_to_React"));
  }, []);

  useEffect(() => {
    if (width > 1200) {
      console.log("i sup between 1200");
      setWidthImage(100);
      setStyleImage({ margin: "15%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: 'none',
      })
    }
    else if (width < 1200 && width > 1000) {
      console.log("i am between 1200 and 1000");
      setWidthImage(100);
      setStyleImage({ margin: "15%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: 'none',
      })
    } else if (width > 1200) {
      setWidthImage(150);
      setStyleImage({ margin: "7%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: 'none',
      })
    } else if (width < 769 && width > 563) {
      setWidthImage(90);
      setStyleImage({ top: "9%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: '37%',
        marginTop: '-5%',
      })
    }
    else if (width < 562 && width > 444) {
      setWidthImage(90);
      setStyleImage({ marginTop: "1%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: '37%',
        marginTop: '-5%',
      })
    }
    else if (width < 443 && width > 228) {
      setWidthImage(90);
      setStyleImage({ marginTop: "1%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: '28%',
        marginTop: '-5%',
      })
    }

    else if (width < 228 && width > 200) {
      setWidthImage(90);
      setStyleImage({ marginTop: "6%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: '20%',
        marginTop: '-5%',
        width: '10px',
      })
    } else if (width <= 200) {
      setWidthImage(90);
      setStyleImage({ marginTop: "-50%" });
      setDropDown({
        background: 'rgba(130, 188, 228, 0.9)',
        border: 'rgba(130, 188, 228, 0.9)',
        marginLeft: '20%',
        marginTop: '-5%',
        width: '10px',
      });
    }
    console.log("i am");
    console.log(width);
    console.log(widthImage);
  }, [width]);

  return (
    <div>
      {/* header */}
      <header className="clearfix trans" >
        <nav className="navbarMedi navbar-default navbar-fixed-top" role="navigation" >
          <div className="container">
            <div className="inner-header">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" style={{ background: 'white' }}></span>
                  <span className="icon-bar" style={{ background: 'white' }}></span>
                  <span className="icon-bar" style={{ background: 'white' }}></span>
                </button>
                <a className="navbar-br/and" href="/">
                  <img
                    src={mediwave}
                    alt="Mediwave"
                    width={`${widthImage}+"px"`}
                    style={styleImage}
                  />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav navbar-right ">
                  <li>
                    <a
                      href="/#homeMediwave-section"
                    >
                      {t("h_1")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/VRme"
                    >
                      VRme
                    </a>

                  </li>
                  <li>
                    <a
                      href="/Medilink"
                    >
                      Medilink
                    </a>

                  </li>
                  <li>
                    <a
                      href="/Steriwave">
                      Steriwave
                    </a>

                  </li>
                  <li>
                    <a  href="#ResearchAndDevelopment">
                     R & D
                    </a>

                  </li>
                  <li>
                    <a
                      href="#contact-section">
                      Contact
                    </a>
                  </li>
                  <li >
                    <div className="titleDropdown" style={{cursor:'pointer'}} onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                      {currentLanguageCode === "en" ? <Ic_gb /> : <Ic_fr />}  &#x2193;                     
                    </div>          
                  </li>
                  {isDropdownVisible && (
                      <div className="dropdown" style={{marginLeft:'20%'}}>
                        {languages.map(({ code, name, country_code }) => (
                          <div
                            disabled={code === currentLanguageCode}
                            key={country_code}
                            onClick={() => {
                              handleLanguageChange(code);
                              setIsDropdownVisible(false);
                            }}
                            className="dropdowsStyle"
                            style={{
                              opacity: code === currentLanguageCode ? 0.3 : 1,
                            }}
                          >
                            {country_code === "fr" ? <Ic_fr /> : <Ic_gb />}
                          </div>
                        ))}
                      </div>
                    )}  
                  {/* <div className="dropdown-menu" style={dropDown}   >
                      <li>
                        <a >
                          {languages.map(({ code, name, country_code }) => (
                            <tr
                              disabled={code === currentLanguageCode}
                              key={country_code}
                              onClick={() => i18next.changeLanguage(code)}
                              class="navItemStyle"
                              style={{
                                opacity: code === currentLanguageCode ? 0.3 : 1,
                              }}
                            >
                              {country_code === "fr" ? <Ic_fr /> : <Ic_gb />}

                            </tr>
                          ))}
                        </a>
                      </li>
                      <div>

                      </div>
                    </div> */}
                </ul>
              </div>
            </div>
          </div>
         
        </nav>
       
      </header>
    
    </div>
  );
};

export default Header;