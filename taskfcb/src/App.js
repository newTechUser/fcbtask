import Container from './components/Container';
import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Facebook - log in or sign up</title>
      </Helmet>
      <Container/>
    </>
  );
}

export default App;
