import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Banner.scss';
import { Container, Row, Col } from "react-bootstrap";
import profilePic from '../images/profilepic.PNG';
import { motion } from 'framer-motion'
import { fadeIn } from './motion';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ["Full Stack Developer", "UI/UX Designer", "DevOps Engineer"], []);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(400 - Math.random() * 100);
    const period = 1000;

    const navigate = useNavigate(); // Initialize useNavigate

    const tick = useCallback(() => { 
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }, [isDeleting, loopNum, period, text, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => clearInterval(ticker);
    }, [delta, tick]);

    return (
        <div className='banner-section'>
            <Container>
                <Row className='banner-row'>
                    <Col>
                        <motion.span className='tagline' 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.7}}>
                            Welcome to My Portfolio
                        </motion.span>

                        <h1>Hi, I'm Ty!</h1>
                        <motion.h1 
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.5}}>{`I'm a `}<span className='wrap'>{text}</span></motion.h1>

                        <motion.div className='about-me'
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.4}}> 
                            <p>Based in Atlanta, Ga &#127944;GO FALCONS&#127944; I find passion in building web applications and experimenting with new technologies. My journey in the realm of technology has been fueled by my deep love for coding and problem-solving</p>

                            <p>In my spare time I like to run around in the fresh grass with my active 2-year-old son Geno - mostly so he doesn't break anything in the house, take a good ol' pilates class, or spend time on all popular tech sites learning a new tech hack/trick.</p>

                            <p>I hope you enjoy browsing my portfolio, and I look forward to the opportunity to bring your next projects to life.</p>
                        </motion.div>
                        
                        <button onClick={() => navigate('/contact')}>Let's Connect</button> 
                    </Col>
                    <Col>
                        <motion.img src={profilePic} alt='profile pic'
                        variants={fadeIn("left", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.9}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
