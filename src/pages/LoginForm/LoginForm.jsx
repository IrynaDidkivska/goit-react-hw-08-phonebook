import React, { useState } from 'react';
import { Button } from 'styles/Button';
import { useDispatch } from 'react-redux';
import { Input, StyledLink, Wrapper } from './LoginForm.styled';
import { loginUserThunk } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Form } from 'styles/Form';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginForm = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(loginUserThunk(credentials));
    toast.success(`Welcome to Contactville!`);
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <Form onSubmit={handleLoginForm}>
        <label htmlFor="email">
          Email&#42;
          <Input
            value={email}
            id="email"
            type="email"
            name="email"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter your email..."
            autoFocus
            onChange={({ target }) => {
              setEmail(target.value);
            }}
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
        <Button>Log in</Button>
      </Form>
      <p>
        Not registered yet?
        <StyledLink
          href=" "
          onClick={() => {
            navigate('/reg');
          }}
        >
          Create an Account
        </StyledLink>
      </p>
    </Wrapper>
  );
};
export default LoginForm;
