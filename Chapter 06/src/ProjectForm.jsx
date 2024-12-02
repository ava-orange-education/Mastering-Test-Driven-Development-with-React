import React, { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName.trim()) {
      setError('Please provide a project name.');
      return;
    }
    // Here you would typically call an API to create the project
    console.log('Creating project:', { name: projectName, description: projectDescription });
    // Reset form after submission
    setProjectName('');
    setProjectDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
