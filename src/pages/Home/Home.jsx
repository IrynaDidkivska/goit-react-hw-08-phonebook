import React from 'react';
import { StyledHomeText, Title, WrapperHP } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectLogin, selectUser } from 'redux/selectors';

const Home = () => {
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);
  return isLogin ? (
    <WrapperHP>
      <Title>
        {name}, welcome on the Home page of the Contactville website!
      </Title>
      <StyledHomeText>
        Once upon a digital age, in the virtual town of Contactville, there
        lived a magical tome known far and wide as the "Chronicle of
        Connections." This extraordinary book possessed the ability to store
        memories not in ink, but in the realm of ones and zeros.
      </StyledHomeText>
      <StyledHomeText>
        Inhabitants of Contactville treasure this book for its remarkable
        powers. It held the essence of friendships forged, partnerships formed,
        and bonds that transcended the boundaries of the digital world. When you
        opened its virtual cover, you have the possibility of creating your own
        Chronicle of Connections.
      </StyledHomeText>
      <StyledHomeText>
        The townsfolk often marveled at the book's intuitive magic. To add a
        contact, all they needed to do was whisper a name, and the book would
        create a new contact. If a connection was to be severed, they simply
        clicked a button, and the avatar would dissolve like morning mist,
        leaving behind a faint whisper of what once was.
      </StyledHomeText>
    </WrapperHP>
  ) : (
    <>
      <Title>Welcome on the Home page of the Contactville website!</Title>
      <Title>
        Login to unlock access to magical tome of "Chronicle of Connections."
      </Title>
      <img
        src="https://media.istockphoto.com/id/485946989/photo/customer-file-concept.jpg?s=612x612&w=0&k=20&c=mv_oQlmhh5zkO_CE-2DxyhU2o1nkqLC_vFST176_-ns="
        alt="phonebook"
        loading="lazy"
      />
    </>
  );
};
export default Home;
