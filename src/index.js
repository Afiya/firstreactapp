import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import AppHook from './AppHook';
//import SetIntervalHook from './SetIntervalHook';
//import UserForm from './UserForm';
//import ToDoList from "./ToDoList"
//import FetchDataFromAPI from "./FetchDataFromAPI";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
