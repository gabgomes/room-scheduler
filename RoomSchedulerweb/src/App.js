import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SYSTEM_ROUTES } from './constants'
import { NewSchedulePage, NewRoomPage, HomePage } from './pages';
import { MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route
          exact
          component={HomePage}
          path={SYSTEM_ROUTES.HOME.ROUTE}
        />
        <Route
          exact
          component={NewSchedulePage}
          path={SYSTEM_ROUTES.NEW_SCHEDULE.ROUTE}
        />
        <Route
          exact
          component={NewRoomPage}
          path={SYSTEM_ROUTES.NEW_ROOM.ROUTE}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
