import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Global from './globalStyles';
import { BrowserRouter } from 'react-router';
import { App } from './App';
import { Theme } from './Theme';

const domNode = document.createElement('div');
document.body.appendChild(domNode);


createRoot(document.getElementById('root') || domNode).render(
    <StrictMode>
        <Global />
        <BrowserRouter>
            <Theme>
                <App />
            </Theme>
        </BrowserRouter>
    </StrictMode>,
);