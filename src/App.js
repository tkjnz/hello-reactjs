import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

console.log("11122");


const MainContent = styled.div`
  height: 100%;
`;

class App extends Component {

  constructor(props) {
    super(props);
  }
  

  AppContainer = () => (
    <>
      <MainContent>
        <div>asdfdsfa</div>
      </MainContent>
    </>
  )

  render() {
    return (
      <Switch>
          <Route component={this.AppContainer} />
        </Switch>
    );
  }
}

export default withRouter(hot(App));