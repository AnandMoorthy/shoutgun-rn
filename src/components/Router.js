import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SignInComponent from './SignInComponent';
import HomeComponent from './HomeComponent';
import HearComponent from './HearComponent';
import ShoutComponent from './ShoutComponent';
import BootComponent from './BootComponent';
import ReplyComponent from './ReplyComponent';


class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="welcome" panHandlers={null}>
          <Scene
            key="boot"
            component={BootComponent}
            hideNavBar initial
          />
          <Scene
            key="signin"
            component={SignInComponent}
            hideNavBar
          />
          <Scene
            key="home"
            component={HomeComponent}
            hideNavBar
          />
          <Scene
            key="shout"
            component={ShoutComponent}
            hideNavBar
          />
          <Scene
            key="hear"
            component={HearComponent}
            hideNavBar
          />
          <Scene
            key="reply"
            component={ReplyComponent}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
