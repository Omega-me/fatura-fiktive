import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const Profile = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <UserProfile />
    </div>
  );
};

export default Profile;
