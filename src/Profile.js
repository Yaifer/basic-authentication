import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Container from './Container';
import '@aws-amplify/ui-react/styles.css';
import { Button } from 'antd';

const Profile = () => {
  useEffect(
    () => {
        checkUser()
    }, []);

  const [user, setUser] = useState({})

  const  checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes, };
      setUser(userInfo);
    }
    
    catch (err) { console.error(err);
    }
  };
  return (
    <Container>
      <h1>Sign in to View The Happy Counting App</h1>
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.attributes.email}</h1>
          <Button onClick={signOut} type='primary' size='large'>Sign out</Button>
        </main>
      )}
    </Authenticator>

     {/* <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Phone: {user.phone_number}</h4>
  <AmplifySignOut />*/}
    </Container>
  );
};

export default Profile