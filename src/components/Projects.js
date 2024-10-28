import React from "react";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import movieWeb from "../assets/img/movie-website.png";
import personalWeb from "../assets/img/personal-website.png";
import expenseWeb from "../assets/img/expense-tracker-website.png";
import weatherWeb from "../assets/img/weatherWebsite.png";
import nikeWeb from "../assets/img/nike-web.png";
import educity from "../assets/img/educity.png"
import Redberry from "../assets/img/redberry.png";
import Library from "../assets/img/library.png";


const Projects = () => {
  const projects = [
    {
      title: "Movie Website",
      description: "(REACT, Rest API, SCSS, fully responsive)",
      imgUrl: movieWeb,
      githubLink: "https://kaxeta007.github.io/Movie-website-using-API/"
    },

    {
      title: "Another personal website",
      description: "(SCSS/SASS, fully responsive)",
      imgUrl: personalWeb,
      githubLink: "https://kaxeta007.github.io/Project-1/"
    },

    {
      title: "Mini project - Expense Tracker",
      description: "React Hooks",
      imgUrl: expenseWeb,
      githubLink: "https://kaxeta007.github.io/Mini-expense-tracker-React-project/"
    },

    {
      title: "Weather forecast website",
      description: "Using React(API,axios)",
      imgUrl: weatherWeb,
      githubLink: "https://kaxeta007.github.io/Mini-weather-website-React/"
    },

    {
      title: "Nike Website Clone",
      description: "Using React(Tailwind CSS, Responsive)",
      imgUrl: nikeWeb,
      githubLink: "https://kaxeta007.github.io/Nike-Web-Clone/"
    },
    
    {
      title: "EduCity Website",
      description: "Using React(Tailwind CSS, Responsive)",
      imgUrl: educity,
      githubLink: "https://kaxeta007.github.io/EduCity-project/"
    },
    
    {
      title: "Redberry Project",
      description: "Using React(Validations,SCSS,Responsive)",
      imgUrl: Redberry,
      githubLink: "https://chess-project-kappa.vercel.app/"
    },
    
    {
      title: "Library Project(Try with incognito mode)",
      description: "Using React(Validations,SCSS,Responsive,API and lots of functionalities.)",
      imgUrl: Library,
      githubLink: "https://library-project-react-rmq9-giorgis-projects-3ddad499.vercel.app/"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>All my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project}  />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
