import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import Global from './globalStyles';

const domNode = document.createElement('div');
document.body.appendChild(domNode);


createRoot(document.getElementById('root') || domNode).render(
    <StrictMode>
        <Global />
        <App />
    </StrictMode>,
);