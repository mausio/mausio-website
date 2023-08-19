import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./styles/global.styles.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
