import React from 'react';

function ProjectDeletion({ project, onDeleteProject }) {
  const handleDeleteProject = () => {
    // Implement logic to delete the project, including interactions with backend services.
    onDeleteProject(project.id);
  };

  return (
    <div>
      <h2>Delete Project</h2>
      <p>Are you sure you want to delete {project.name}?</p>
      <button onClick={handleDeleteProject}>Yes, Delete</button>
    </div>
  );
}

export default ProjectDeletion;
