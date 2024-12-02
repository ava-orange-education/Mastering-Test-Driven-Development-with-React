import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>Project Details</h2>
      <p>Project Name: {project.name || ''}</p>
      <p>Project Description: {project.description}</p>
      {project.status && <p>Status: {project.status}</p>}
    </div>
  );
};

export default ProjectDetails;
