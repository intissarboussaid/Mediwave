
import React, { useRef, useEffect, useState } from "react";
import Carousell from '../carouselStyle/Carousell.js';
import "../differentTherapies/DifferentTherapies.css";
import claustrophobie from "../../../assets/images/claustrophobie.jpg";
import assenseur from "../../../assets/images/assenseur.jpg";
import acrophobiee from '../../../assets/images/acrophobia.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie.jpg";
import arachrophobieSolution from "../../../assets/images/arach.jpg";
import agora from "../../../assets/images/agoraphobie.jpg";
import agoraSol from "../../../assets/images/agora.jpg";
import social from "../../../assets/images/social.jpg";
import glossophobie from "../../../assets/images/glossophobie.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";





const DifferentTherapies = (props) => {
  const CARDS = 10;
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '1px 2px #888888',
    },
  }


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal1() {
    setIsOpen(true);
  }

  function closeModal1() {
    setIsOpen(false);
  }
  const Card = ({ src, title, content, content1, content2, subName, SubImg,
    subText1,
    subText2,
    subText3 }) => (
    <div className='card'>
      <div>{src}</div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{content1}</p>
      <p>{content2}</p>
      <p>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          style={{
            marginTop: "2%",
            alignItems: "end",
            width: '40%',
            right: '30%'
          }}
        >
          {t('Buy_Now')}
        </button>
        {/* Modal */}


      </p>

    </div>
  );
  const slideRef = useRef(null);
  const windowDimensions = useResizeScreen();
  const [imageStyle1, setImageStyle1] = useState({
    width: '110%',
    height: '40%',
    marginTop: '0%',
    marginLeft: '-5%'
  });
  const [imgSolution, setImgSolution] = useState({
    width: '50%',
    height: '40%',
  });
  const data = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie} style={imageStyle1}></img>,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
    },
    {
      id: 3,
      imgUrl: <img src={acrophobiee} style={imageStyle1}></img>,
      text1: t("ACROPHOBIA_1"),
      // ,
      text2: t("ACROPHOBIA_2"),
      // ,
      text3: "  ",
      name: t("AGORAPHOBIA"),
    },
    {
      id: 5,
      imgUrl: <img src={arachrophobie} style={imageStyle1}></img>,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
    },
    {
      id: 7,
      imgUrl: <img src={agora} style={imageStyle1}></img>,
      text1: t("AGORAPHOBIA_1"),
      // ,
      text2: t("AGORAPHOBIA_2"),
      //  
      text3: "  ",
      name: t("AGORAPHOBIA"),

    },
    {
      id: 9,
      imgUrl: <img src={social} style={imageStyle1}></img>,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
    },
  ];

  const data1 = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie} style={imageStyle1} />,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
      SubImg: <img src={assenseur} style={{ width: '20%' }} />,
      subText1: t("APPLICATIONS_1"),
      subText2: " ",
      subText3: "  ",
      SubName: t("soll"),
      button: <button onClick={openModal1} >
        <div className="center-button">
          <a className="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
    },
    {
      id: 2,
      imgUrl: <img src={acrophobiee} style={imageStyle1} />,
      text1: t("ACROPHOBIA_1"),
      text2: t("ACROPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      button: <button onClick={openModal1} >
        <div className="center-button">
          <a className="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      subImg: <img src={acrophobieSolution} style={{ width: '20%' }} />,
      subText1: t("APPLICATIONS_2"),
      subText2: "  ",
      subText3: "  ",
      subName: t("soll"),


    },
    {
      id: 3,
      imgUrl: <img src={arachrophobie} style={imageStyle1} />,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
      button: <button onClick={openModal1} >
        <div className="center-button">
          <a className="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      subImg: <img src={arachrophobieSolution} style={{ width: '20%' }} />,
      subText1: t("APPLICATIONS_3"),
      subText2: "",
      subText3: "  ",
      subName: t("soll"),


    },
    {
      id: 4,
      imgUrl: <img src={agora} style={imageStyle1} />,
      text1: t("AGORAPHOBIA_1"),
      text2: t("AGORAPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      button: <button onClick={openModal1} >
        <div className="center-button">
          <a className="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,

      subImg: <img src={agoraSol} style={{ width: '20%' }} />,
      subText1: t("APPLICATIONS_4_1"),
      subText2: t("APPLICATIONS_4_2"),
      subText3: "  ",
      subName: t("soll"),


    },
    {
      id: 5,
      imgUrl: <img src={social} style={imageStyle1} />,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      button: <button onClick={openModal1} >
        <div className="center-button">
          <a className="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      subImg: <img src={glossophobie} style={{ width: '20%' }} />,
      subText1: t('SOCIAL_PHOBIA_Soll_1'),
      subText2: t('SOCIAL_PHOBIA_Soll_2'),
      subText3: t('SOCIAL_PHOBIA_Soll_3'),


    },
  ];


  return (
    <>
      <div
        className="container-fluid"
        style={{ marginLeft: "5%", marginTop: "-10%", marginBottom: "5%" }}
        id="therapies-section" >
        <section className="about-section" >
          <div className="container-fluid">
            <div className="title-section">
              <motion.h1>
                {t("THERAPY")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.8 }}
                style={{ textAlign: "justify", marginTop: "2%" }}
              >
                {t("THERAPY_text")}
                {t("THERAPY_text_2")}
              </motion.p>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  contenttt' >
              <Carousell>
                {data.map((i) => (
                  <div key={i.id}>
                    <Card
                      src={i.imgUrl}
                      title={i.name}
                      content={i.text1}
                      content1={i.text2}
                      content2={i.text3}

                     

                    />
   
                  </div>

                ))}

             
              </Carousell>


            </div>
          </div>
        </section>
        {data.map((item) => (
        <div
                  className="modal fade"
                  id="exampleModalCenter"
                  key={item.id}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 className="modal-title" id="exampleModalLongTitle">
                        {item.SubImg}
                    
                        </h5>
                        <p>{item.subName}</p>
                      </div>
                      <section className="contact-section">
                        <div className="contact-box">
                          <div className="row" style={{ marginLeft: "2%", marginRight: "2%" }}>
                            <div className="col-md-12 col-sm-8">
                         
                      {item.subText1}
                     {item.subText2}
                     {item.subText3}
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
))}


      </div>







    </>
  );
};

export default DifferentTherapies;



