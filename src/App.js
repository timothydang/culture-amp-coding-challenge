import React from 'react';
import { Header } from 'semantic-ui-react';
import AppRouter from './Routes';

const style = {
  h1: {
    marginTop: '1em',
    marginBottom: '1em'
  }
}

function App() {
  return (
    <div>
      <Header as="h1" content='Surveys' textAlign="center" style={style.h1}/>
      <AppRouter />
    </div>
  );
}

export default App;
