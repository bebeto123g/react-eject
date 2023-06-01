import React from 'react';
import { ReactComponent as ReactLogo } from './logo.svg';
import 'Styles/global.scss';
import 'Styles/App.scss';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ReactLogo width={400} className="App-logo Logo" />
                <ReactLogo width={200} className="Logo" fill="#61DAFB" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};
