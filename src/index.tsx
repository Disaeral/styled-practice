import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Theme } from './Theme';
import Global from './globalStyles';
import { BrowserRouter } from 'react-router';
import { App } from './App';
import { LanguageContextProvider } from './providers/LanguageProvider';
import "./i18n"

const domNode = document.createElement('div');
document.body.appendChild(domNode);


createRoot(document.getElementById('root') || domNode).render(
    // <StrictMode>
        <BrowserRouter>
            <LanguageContextProvider>
                <Theme>
                    <App />
                    <Global />
                </Theme>
            </LanguageContextProvider>
        </BrowserRouter>
    // </StrictMode>,
);