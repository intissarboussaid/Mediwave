import React from "react";
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import blog3 from "../../../assets/images/blog3.jpg";
import { motion } from "framer-motion";
import'./Blog.css';

const Blog = () => {
  return (
    <div>
      <section id="blog-section">
        <div className="container-fluid">
          <div className="title-section">
            <h1>Blog</h1>
            {/* <p>Morbi in sem quis dui placerat ornare.</p> */}
          </div>
          <div className="blog-box">
            <div className="row">
              <div className="col-md-4 col-sm-5 blog1" style={{background:'white', boxShadow: '0 30px 50px #505050',borderRadius: '5%', right:'1%'}}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery"  >
                    <img src={blog1} alt="" height={250} style={{borderRadius: '4%', marginLeft:'-3%',width:'107%'}} />
                  </div>
                  {/* <span>12 December 2018</span> */}
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
                    <br/>
                    <br/>
                  </p>
                  <a className="read-more"
                     target="_blank" 
                     href="https://www.verywellmind.com/virtual-reality-exposure-therapy-vret-2797340">
                    Read More
                  </a>
                </motion.div>
              </div>
              <div className="col-md-4 col-sm-5 blog2" style={{background:'white', boxShadow: '0 30px 50px #505050',borderRadius: '5%'}}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery">
                    <img src={blog2} alt="" height={250} style={{width:'107%',borderRadius: '4%', marginLeft:'-3.5%'}} />
                  </div>
                  {/* <span>12 December 2018</span> */}
                  <h2>
                    <a target="_blank" 

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
                    <br/>
                    <br/>
                  </p>
                  <a className="read-more"
                                    target="_blank" 

                  href="https://www.circuitstream.com/blog/virtual-reality-therapy">
                    Read More
                  </a>
                </motion.div>
              </div>
              <div className="col-md-4 col-sm-5 blog3" style={{background:'white', boxShadow: '0 30px 50px #505050',borderRadius: '5%',left:'1%'}}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
                  <div className="post-gallery">
                    <img src={blog3} className="col-md-6" alt="" height={250} style={{marginTop:'0%',width:'150%', right:'7.2%',borderRadius: '4%'}} />
                  </div>
                  {/* <span>12 December 2018</span> */}
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
                  <a className="read-more" 
                  href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-081219-115923"
                  target="_blank" 
                  >
                    Read More
                  </a>
                </motion.div>
              </div>
            </div>
            {/* <div class="center-button">
              <a href="blog.html" class="button-one">
                View all Posts
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
