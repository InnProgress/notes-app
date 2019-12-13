import React from 'react';
import './App.scss';

import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer
} from 'react-notifications';

import Header from './containers/Header';
import MainGrid from './containers/MainGrid';

const App = () => {
  return (
    <div>
      <Header />
      <MainGrid />

      <NotificationContainer/>
    </div>
  );
}

export default App;
