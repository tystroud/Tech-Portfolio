import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../pages/Project';
import Contact from '../pages/Contact';


const Home = () => {
  
  const bannerControls = useAnimation();
  const skillsControls = useAnimation();
  const projectsControls = useAnimation();
  const contactControls = useAnimation();

  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const bannerInView = useInView(bannerRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  
  useEffect(() => {
    if (bannerInView) {
      bannerControls.start("visible");
    }
  }, [bannerInView, bannerControls]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    }
  }, [skillsInView, skillsControls]);

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start("visible");
    }
  }, [projectsInView, projectsControls]);

  useEffect(() => {
    if (contactInView) {
      contactControls.start("visible");
    }
  }, [contactInView, contactControls]);

  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="home-container">
      <motion.div
        ref={bannerRef}
        variants={motionVariants}
        initial="hidden"
        animate={bannerControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Banner />
      </motion.div>

      <motion.div
        ref={skillsRef}
        variants={motionVariants}
        initial="hidden"
        animate={skillsControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Skills />
      </motion.div>

      <motion.div id='projects'
        ref={projectsRef}
        variants={motionVariants}
        initial="hidden"
        animate={projectsControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Projects/>
      </motion.div>

      <motion.div id='contact'
        ref={contactRef}
        variants={motionVariants}
        initial="hidden"
        animate={contactControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;

