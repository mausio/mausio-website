import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./styles/global.styles"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
