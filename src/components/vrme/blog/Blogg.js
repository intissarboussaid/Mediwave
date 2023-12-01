import React, { useState } from 'react'
import './Blog.css';
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import blog3 from "../../../assets/images/blog3.jpg";

function Blogg() {
    const data = [
        {          
          imgUrl:"/static/media/shootPutVR.ba62578c9e82b3b50375.jpg", 
          icon:"", 
          href:"",
          main:"",
          sub:"",
        },
        {       
          imgUrl: "/static/media/kineCou.a077e8c02b9a51f67012.jpg",
          icon:"",
          href:"", 
          main:"",
          sub:"",         
        },
         {          
          imgUrl:"/static/media/kineMain.13c024e1f91e632c45a4.jpg" , 
          icon:"", 
          href:"",
          main:"",
          sub:"",        
        }]       

  return (
    <div> 
        {/* <section id="blog-section">
        <div class="container">
          <div class="title-section">
            <h1>Blog</h1>
          </div>
          <div class="blog-box">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
                  <div class="post-gallery">
                    <img src={blog1} alt="" height={250} />
                  </div>
                  <h2>
                    <a
                      target="_blank" 
                      href="https://www.verywellmind.com/virtual-reality-exposure-therapy-vret-2797340">
                      VIRTUAL REALITY EXPOSURE THERAPY CAN HELP PTSD
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                    Virtual reality exposure therapy (VRET) is being examined as
                    another way to help people recover from PTSD. VRET is a type
                    of exposure therapy that has increasingly been used to treat
                    a variety of anxiety disorders, including specific
                    phobias...{" "}
                  </p>
                  <a class="read-more"
                     target="_blank" 
                     href="https://www.verywellmind.com/virtual-reality-exposure-therapy-vret-2797340">
                    Read More
                  </a>
                </motion.div>
              </div>
              <div class="col-md-4 col-sm-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
                  <div class="post-gallery">
                    <img src={blog2} alt="" height={250} />
                  </div>
                  <h2>
                    <a
                                      target="_blank" 

                    href="https://www.circuitstream.com/blog/virtual-reality-therapy">
                      VIRTUAL REALITY THERAPY ALTERNATIVE
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                    Virtual reality (VR) has grown far beyond its roots and
                    reputation as a video game technology. Over the past few
                    years, it s seen use in entertainment, education, real
                    estate, engineering, and more and now its showing promise in
                    mental health treatment....{" "}
                  </p>
                  <a class="read-more"
                                    target="_blank" 

                  href="https://www.circuitstream.com/blog/virtual-reality-therapy">
                    Read More
                  </a>
                </motion.div>
              </div>
              <div class="col-md-4 col-sm-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
                  <div class="post-gallery">
                    <img src={blog3} alt="" height={250} />
                  </div>
                  <h2>
                    <a 
                                      target="_blank" 

                    href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-081219-115923">
                      VIRTUAL REALITY THERAPY IN MENTAL HEALTH
                    </a>
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                    Initially designed for the treatment of phobias, the use of
                    virtual reality in phobic disorders has expanded to other
                    mental health disorders such as posttraumatic stress
                    disorder, substance-related disorders, eating disorders,
                    psychosis ...{" "}
                  </p>
                  <a class="read-more" 
                  href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-081219-115923"
                  target="_blank" 
                  >
                    Read More
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="blog-section">
        <div class="container">
          <div class="title-section">
            <h1>Blog</h1>
          </div>
          <div class="blog-box">
            <div class="row"> */}
            <div className='blog'>
        <div className="options">
        {data.map((item) => (
              <div
                key={item.id}
                className="option"
                style={{background:`url(${item.imgUrl})`}}
              >
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="des">{item.text1}</div>
                  <div className="des">{item.text2}</div>
                  <div className="des">{item.text3}</div>     

                  <div className="option active" style={{background: `url(${item.imgUrl})`}} >
                <div className="label">
                    <div className="icon">
                        <i className="fas fa-walking"></i>
                    </div>
                    <div className="info">
                        <div className="main">Ultricies</div>
                        <div className="sub">Elit ut aliquam purus sit</div>
                    </div>
                </div>
            </div>

                </div>
              </div>
            ))}
            
            {/*  */}
            {/* <div className="option" style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_02.jpg);">
                <div className="label">
                    <div className="icon">
                        <i className="fas fa-snowflake"></i>
                    </div>
                    <div className="info">
                        <div className="main">Luctus</div>
                        <div className="sub">Arcu cursus vitae congue mauris</div>
                    </div>
                </div>
            </div>
            <div className="option" style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_03.jpg);">
                <div className="label">
                    <div className="icon">
                        <i className="fas fa-tree"></i>
                    </div>
                    <div className="info">
                        <div className="main">Purus</div>
                        <div className="sub">Neque vitae tempus quam pellentesque</div>
                    </div>
                </div>
            </div>
            <div className="option" style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_04.jpg);">
                <div className="label">
                    <div className="icon">
                        <i className="fas fa-tint"></i>
                    </div>
                    <div className="info">
                        <div className="main">Accumsan</div>
                        <div className="sub">Aagittis id consectetur purus ut</div>
                    </div>
                </div>
            </div>
            <div className="option" style="--optionBackground: url(https://raw.githubusercontent.com/Programith/Images/main/background_05.jpg);">
                <div className="label">
                    <div className="icon">
                        <i className="fas fa-sun"></i>
                    </div>
                    <div className="info">
                        <div className="main">Dignissim</div>
                        <div className="sub">Augue ut lectus arcu bibendum</div>
                    </div>
                </div>
            </div>  */}
        </div>
    </div>




            </div>
    //         </div>
    //      </div>
    //   </section>


    // </div>
  )
}

export default Blogg