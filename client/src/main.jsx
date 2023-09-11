/* eslint-disable no-unused-vars */
import './index.css'
import App from './App.jsx'
import axios from 'axios'
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store.js'

axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
)