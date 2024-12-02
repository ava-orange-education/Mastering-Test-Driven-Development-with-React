import React, { useState, useEffect } from 'react';
import { getProjects } from './api'; // Import project service

const ProjectList = ({ projects: propProjects }) => {
  const [projects, setProjects] = useState(propProjects || []);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!propProjects) {
      fetchProjects();
    }
  }, [propProjects]);

  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (err) {
      setError('Failed to fetch projects');
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.name} - {project.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
