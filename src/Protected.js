import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import { useNavigate } from 'react-router-dom';

const Protected = () => {

  const nav = useNavigate();

  const redirectUserIfNotAuthenticated = async () => {
    try {
      await Auth.currentAuthenticatedUser();
    }
    catch (err) {
      nav('/profile');
    }
  };

  useEffect(
    () => {
      redirectUserIfNotAuthenticated();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <Container>
      <h1>Welcome To The Happy Counter App</h1>
      <h2>Thank you for signing up</h2>
      <div>
        <h2>You Clicked {count} times</h2>
        <button onClick={() => setCount(count + 1)}>
          Click Me For More!!!
        </button>
        <br/><br/>
        <button onClick={() => setCount(count - 1)}>
          Click Me For Less!!!
        </button>
      </div>
    </Container>
  );
};

export default Protected;