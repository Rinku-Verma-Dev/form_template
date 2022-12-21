import { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './path'; // Route list
import { useLocation, useHistory } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    if (pathname == '/') {
      push('/home')
    }
  })

  return (
    <Switch>
      <Suspense
        fallback={<div>Loading...</div>}
      >
        {routes.map(({ component: Component, path, exact }) => (
          <Route
            path={`/${path}`}
            key={path}
            exact={exact}
          >
            <Component />
          </Route>
        ))}
      </Suspense>
    </Switch>
  )
};


export default ProtectedRoutes;