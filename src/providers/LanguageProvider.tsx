import { ELanguage, TLanguage } from '../types/const';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export const LanguageContext = createContext<{lang:TLanguage, setLang: Dispatch<SetStateAction<TLanguage>>}>({lang: "ja", setLang: () => {}});

export const LanguageContextProvider = ({children}:PropsWithChildren) => {
    const [lang, setLang] = useState<TLanguage>("ja");
    return <LanguageContext.Provider value={{lang, setLang}}>
        {children}
    </LanguageContext.Provider>
}