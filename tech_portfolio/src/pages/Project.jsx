import WeatherApp from '../images/ProjectPic2.png'
import Vitality from '../images/ProjectPic1.png'


const myProjects = [
  {
    title: 'Weather Application',
    description: 'This Weather App is a sleek and user-friendly application developed using React and JavaScript. It provides real-time weather updates and forecasts for any location worldwide. The app utilizes a modern, responsive design to ensure a seamless user experience across all devices. ',
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
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image"/>
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects




