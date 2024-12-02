import React from 'react';

function ProjectDashboard({ projectData = {} }) {
  const { name, members, tasks } = projectData;
  if (Object.keys(projectData).length === 0) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      <h2>Project Dashboard</h2>
      <p>Project Name: {name}</p>
      <p>Members: {members}</p>
      <p>Tasks: {tasks}</p>
    </div>
  );
}

export default ProjectDashboard;
