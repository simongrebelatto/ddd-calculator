import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderApp } from './components/header';
import { AppForm } from './components/form';
 

ReactDOM.render(
  <div className="main_container">
    <div className="app_container">
      <HeaderApp/>
      <AppForm/>
      <div className="calculate_table"></div>
    </div>
  </div>,
  document.getElementById('root')
);