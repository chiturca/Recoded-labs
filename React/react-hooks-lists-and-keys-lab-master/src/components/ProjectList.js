import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 
  const projectElements = projects.map(project =>{return(
    <div key={project.id} className="project-item" >
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <ProjectItem technologies={project.technologies}/>
    </div>
  )})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projectElements}
      </div>
    </div>
  );
}

export default ProjectList;
