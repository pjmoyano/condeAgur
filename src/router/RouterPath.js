import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CondeAgur from '../pages/conde_agur/CondeAgur';


const RouterPath = (props) => {

  return (
    <Router>
      <Switch>

        {/* <Route path='/admin' exact={true} component={Admin} /> */}
        <Route path='*' exact={true} component={CondeAgur} />
      </Switch>
    </Router>
  )
}

export default RouterPath;