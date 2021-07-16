import { gql, useQuery } from '@apollo/client';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '../components/Loading';

export const ProfileContext = createContext({});

const USER_PROFILE = gql`
  query profile{
    profile{
      id
      imageUrl
      bio
      createdAt
      user {
        firstName
        lastName
        email
        id
      }
    }
  }
`;

export const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const {
    error, loading,
    data: { profile } = {},
  } = useQuery(USER_PROFILE);

  if (error) {
    <Loading />;
  }

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    if (profile) {
      setUserProfile(profile);
    }
  }, []);

  console.log(profile);

  return (
    <ProfileContext.Provider value={{ userProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
