import React, { useState } from 'react';
import { Button } from 'styles/Button';
import { Input } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/auth/operations';
import { StyledLink, Wrapper } from 'pages/LoginForm/LoginForm.styled';
import { Form } from 'styles/Form';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginForm = e => {
    e.preventDefault();
    const credentials = { name, password, email };
    dispatch(registerUserThunk(credentials));
    toast.success(`Congradulation! Now you can create your Chronicle of
        Connections!`);
  };

  return (
    <Wrapper>
      <h1>Create an account</h1>
      <Form onSubmit={handleLoginForm}>
        <label htmlFor="name">
          Login/Name&#42;
          <Input
            value={name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //   required
            placeholder="Enter your login/name..."
            autoFocus
            onChange={({ target }) => {
              setName(target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          Email&#42;
          <Input
            value={email}
            id="email"
            type="text"
            name="email"
            required
            placeholder="Enter your email..."
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            autoFocus
          />
        </label>
        <label htmlFor="password">
          Password&#42;
          <Input
            value={password}
            id="password"
            type="password"
            name="password"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            required
            placeholder="Enter your password..."
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>
        <Button>Register</Button>
      </Form>
      <p>
        Already have an account?
        <StyledLink
          href=" "
          onClick={() => {
            navigate('/login');
          }}
        >
          Sign in
        </StyledLink>
      </p>
    </Wrapper>
  );
};

export default RegisterForm;
