import React, { useState, useEffect } from 'react';

function MembershipManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users and membership data from backend service.
    // Populate the 'users' state.
  }, []);

  const handleAddUserToProject = () => {
    // Add logic to add the selected user to the project with appropriate roles and permissions.
  };

  return (
    <div>
      <h2>Membership Management</h2>
      <select data-testid="user-select" onChange={(e) => setSelectedUser(e.target.value)}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddUserToProject}>Add User to Project</button>
    </div>
  );
}

export default MembershipManagement;
