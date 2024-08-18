import WeatherApp from '../images/ProjectPic2.png';
import Vitality from '../images/ProjectPic1.png';
import '../styles/Project.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/motion';

const myProjects = [
  {
    title: 'Weather Application',
    description: 'This Weather App is a sleek and user-friendly application developed using React and JavaScript. It provides real-time weather updates and forecasts for any location worldwide. The app utilizes a modern, responsive design to ensure a seamless user experience across all devices.',
    repositoryLink: 'https://github.com/Chant3l/path2tech-weather-application.git',
    image: WeatherApp,
  },
  {
    title: 'Vitality MarketPlace',
    description: 'This E-commerce Website is a fully-featured online marketplace developed using React and JavaScript. This application offers a seamless shopping experience with a clean, intuitive interface and robust functionality, making it easy for users to browse, search, and purchase products.',
    repositoryLink: 'https://github.com/Chant3l/CtrlAltElite.git',
    image: Vitality,
  },
];

const Projects = () => {
  return (
    <>
      <motion.h1 className="project-title"
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      animate="show"
      viewport={{once: false, amount: 0.6}}>Projects</motion.h1>
      <motion.div
        className="projects-container"
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        animate="show">
        {myProjects.map((project) => (
          <section key={project.title} className="project-item">
            <section className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </section>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
            <p>
              Check out the link to the project repository{' '}
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">Here</a>
            </p>
          </section>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;





