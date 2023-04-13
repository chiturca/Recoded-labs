import React from "react";
// import user from "../data/user"

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const technologyElements = technologies.map(technology =>{return(
    <div key={technology} >
    <span>{technology}</span>
    </div>
  )})
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologyElements}
      </div>
    </div>
  );
}

export default ProjectItem;
