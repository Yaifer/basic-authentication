import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

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
        <Button onClick={() => setCount(count + 1)} type='primary' size='large'>
          Click Me For More!!!
        </Button>
        <br/><br/>
        <Button onClick={() => setCount(count - 1)} type='primary' size='large'>
          Click Me For Less!!!
        </Button>
      </div>
    </Container>
  );
};

export default Protected;