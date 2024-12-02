import React, { useState } from 'react';

function ProjectPermissions({ project, onPermissionChange }) {
  const [permissions, setPermissions] = useState({ read: true });
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  const handlePermissionChange = (id, obj) => {
    // Implement logic to update project permissions, including interactions with backend services.
    onPermissionChange(id, obj);
  };

  return (
    <div>
      <h2>Project Permissions</h2>
      <p>Manage permissions for {project.name}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <label>
              {user.name}
              <select
                value={permissions[user.id] || 'viewer'}
                onChange={(e) => setPermissions({ ...permissions, [user.id]: e.target.value })}
              >
                <option value="viewer">Viewer</option>
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => { handlePermissionChange(project.id, permissions) }}>Save Permissions</button>
    </div>
  );
}

export default ProjectPermissions;
