import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store';

import Navigation from "./components/Navigation.js";
import Search from "./components/SearchW.js";
import Login from "./components/LogIn.js";
import PlayerSong from "./components/PlayerSong.js";
import Profile from "./components/Profile.js";
import FirstWindow from './components/FirstWindow.js';
import Settings from './components/Settings.js';




class App extends React.Component {

  

  render() {

    return (
      <div className="my_body">

      <Provider store={store}>
        <BrowserRouter>
          <div >
            <img className="status_bar" src="../images/phone_status_bar.jpg" alt="" />
            <Navigation />

            <div>
              <Switch>
              <Route exact path="/" component={FirstWindow} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login/profile" component={Profile} />
                <Route exact path="/search/play" component={PlayerSong} />
                <Route exact path="/settings" component={Settings} />
                
              </Switch>
            </div>

          </div>
        </BrowserRouter>
      </Provider>
      </div>

    );
  }

}


export default (App);