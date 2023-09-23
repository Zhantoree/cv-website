import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import App from './App';
import {Provider} from "react-redux";
import setupApp from "./store/store";
const store = setupApp()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>
);

