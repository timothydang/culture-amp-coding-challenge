import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import Home from './pages/Home';
import SurveyDetails from './pages/SurveyDetails';
import ErrorPage from './pages/ErrorPage';

function AppRouter () {
  return (
    <Suspense fallback={<Loader active inline='centered' />}>
      <NetworkErrorBoundary fallbackComponent={ErrorPage}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/survey/:id" component={SurveyDetails} />
        </Router>
      </NetworkErrorBoundary>
    </Suspense>

  )
}

export default AppRouter;
