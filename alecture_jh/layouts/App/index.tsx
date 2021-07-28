import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

// import LogIn from '@pages/LogIn';
// import SignUp from '@pages/SignUp';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login"></Redirect>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/workspace/channel" component={Channel}></Route>
    </Switch>
  );
};

export default App;
