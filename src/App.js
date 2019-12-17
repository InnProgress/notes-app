import React from 'react';
import './App.scss';

import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer
} from 'react-notifications';

import Header from './containers/Header';
import MainGrid from './containers/MainGrid';

import Loader from './styled_components';

const App = () => {
  return (
    <div>
      <Header />
      <MainGrid />

      <NotificationContainer/>

      <Loader />
    </div>
  );
}

export default App;
