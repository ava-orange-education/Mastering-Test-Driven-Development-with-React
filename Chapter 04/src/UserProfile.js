import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Render user details
  return (
    <div>
      <h1>User Profile</h1>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Age: {user.age}</div>
    </div>
  );
};

export default UserProfile;
