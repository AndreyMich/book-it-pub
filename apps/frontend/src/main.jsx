import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import i18config from './configs/i18config.js'

//import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    /*<React.StrictMode>
        <Auth0Provider
            domain="dev-and-mich.eu.auth0.com"
            clientId="v4Es9X70Uv7ohWnpDZNSla46XOE0XT49"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>*/

    <React.StrictMode>
            <App />
    </React.StrictMode>

)
