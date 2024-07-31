import React from "react";
import Message from "../layout/Message";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";
import styles from "./Projects.module.css";
import ProjectCard from "../project/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              key={project.id}
              category={project.category.name}
            />
          ))}
      </Container>
    </div>
  );
}
