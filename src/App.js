import React from 'react';
import './App.scss';

import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer
} from 'react-notifications';

import { connect } from 'react-redux';

import Header from './containers/Header';
import MainGrid from './containers/MainGrid';

import Loader from './styled_components/Loader';
import { mapStateToProps } from './store';

const App = ({ activeNote }) => {
  return (
    <div>
      <Header />
      <MainGrid />

      <NotificationContainer/>

      {activeNote === false && <Loader />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
