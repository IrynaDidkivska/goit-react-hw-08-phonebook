import React from 'react';
import { Title } from './Home.styled';

export const Home = () => {
  return (
    <main>
      <Title>Welcome! 👋 Login to unlock access to our full application.</Title>
      <img
        src="https://media.istockphoto.com/id/485946989/photo/customer-file-concept.jpg?s=612x612&w=0&k=20&c=mv_oQlmhh5zkO_CE-2DxyhU2o1nkqLC_vFST176_-ns="
        alt="phonebook"
        loading="lazy"
      />
    </main>
  );
};
