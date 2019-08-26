import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import AppRouter from './Routes';

const style = {
  h1: {
    marginTop: '1em',
    marginBottom: '1em'
  }
}

function App() {
  return (
    <Grid>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Header as="h1" content='Surveys' textAlign="center" style={style.h1}/>
      <AppRouter />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
}

export default App;
