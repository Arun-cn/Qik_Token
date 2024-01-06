import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
     <createBrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </createBrowserRouter>
  </React.StrictMode>
);

