import React from 'react';
import { Route, useParams } from 'react-router-dom';

// components
import Layout from '@layout';

function RouteApp({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>(        
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default RouteApp;