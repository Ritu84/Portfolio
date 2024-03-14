import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Coindom from "../../Assets/Projects/Coindom.png"
import Blog from "../../Assets/Projects/Blog.png"
import Appoint from "../../Assets/Projects/Appoint.png"
import gym from "../../Assets/Projects/gym.png"
import Qrcode from "../../Assets/Projects/Qrcode.png"
import todo from "../../Assets/Projects/todo.png"
import github from "../../Assets/Projects/github.png"
import agent from "../../Assets/Projects/agent.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="GCER Blogs"
              description="Welcome to GECR Blogs - a platform designed for college seniors to share their experiences, guide juniors, and engage in meaningful discussions through blogs. Whether you're looking to document your journey, offer advice, or seek insights from others, GECR Blogs provides the perfect avenue for connecting with your peers."
              ghLink="https://github.com/Ritu84/GECR-BLOGS"
              demoLink=" https://gecr-blogs.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coindom}
              isBlog={false}
              title="Coindom"
              description="Coindom is a website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies.
              The website is connected to the Coingecko API, which is a popular source of data for cryptocurrency information. Coingecko provides data on thousands of cryptocurrencies, including their current price, historical price data, trading volume, market cap, and other important metrics. By using this API, the website can provide users with real-time information about the latest cryptocurrency prices and market trends."
              ghLink="https://github.com/Ritu84/Coindom-Crypto"
              demoLink="https://coindom-crypto-search.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appoint}
              isBlog={false}
              title="Appoint-Me "
              description="The Doctor Appointment Booking System is a web-based application that simplifies the process of scheduling appointments with healthcare providers. This system aims to improve the efficiency of healthcare services by reducing waiting times and automating administrative tasks."
              ghLink="https://github.com/Ritu84/Appoint-Me" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym"
              description="Welcome to our Gym Website! This platform is designed to help you stay fit, healthy, and motivated on your fitness journey. Whether you are a beginner or an experienced fitness enthusiast, we have something for everyone."
              ghLink="https://github.com/Ritu84/gym-site"
              demoLink="https://home-gym-by-ritu.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GITHUB-APP"
              description="This is a JavaScript application that uses the GitHub API to display information about a user's profile on GitHub.Displays basic information about the user such as their name, username, bio, and profile picture.
              Shows the user's repositories and
              displays the user's followers"
              ghLink="https://github.com/Ritu84/Github-Profile"
              demoLink="https://ritu84.github.io/Github-Profile/ "
            />
          </Col>

          

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qrcode}
              isBlog={false}
              title="QRCode-Generator "
              description="QRCodeGenerator is a simple command-line tool that generates QR codes for given input data. It provides a quick and easy way to create QR codes for URLs, text, contact information, and more."
              ghLink="https://github.com/Ritu84/QRCodeGenerator"
              demoLink="https://ritu84.github.io/QRCodeGenerator/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agent}
              isBlog={false}
              title="Currency Agent"
              description="The basic idea of this currency agent is that, the user will enter a base currency, and the other currencies which he/she need to monitor. He/She will enter his/her minimum and maximum desired values of the currencies they need to observe with respect to the base currency, If at any time, the value of any of the observed currency either falls below the desired minimum value, or rises above the desired maximum value, the user gets notified, here i have implemented 2 approaches that stuck in my mind, in the first one, the user gets notified via an sms, and in the other one, the another uagents gets notified in an established remote connection server."
              ghLink="https://github.com/Ritu84/Currency-Agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do-List-App"
              description="The To-Do List app is a simple and intuitive tool to help you organize your tasks and stay productive. With a clean and user-friendly interface, managing your daily activities becomes effortless."
              ghLink="https://github.com/Ritu84/To-Do-List-App"
              demoLink="https://ritu84.github.io/To-Do-List-App/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
