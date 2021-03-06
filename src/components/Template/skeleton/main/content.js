import React, { Component } from 'react';

import Example_page from '../../../pages/example_page/Example';
import ui from '../../../pages/uiTest/uiTest';
import register from '../../../pages/register/register';
import register2 from '../../../pages/register2/register2';
import notFound from '../../../pages/notFound/notFound';

import { Switch, Route } from 'react-router-dom';

class content extends Component {
  render() {
    return (
      <div>
        <div className="overflow-y-auto max-h-screen overflow-x-hidden ml-2">
          <Switch>
            <Route exact path="/Dashboard" component={Example_page}></Route>
            <Route path="/ui" component={ui}></Route>
            <Route path="/register" component={register}></Route>
            <Route path="/register2" component={register2}></Route>
            <Route path="*" component={notFound}></Route>
          </Switch>
          <div className="bottom-0 w-full bg-gray-500 fixed hidden">footer</div>
        </div>
      </div>
    );
  }
}

export default content;
