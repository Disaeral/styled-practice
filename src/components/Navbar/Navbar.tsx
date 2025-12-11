import { useContext, useState } from "react";
import styled from "styled-components";
import { FaCentercode } from "react-icons/fa6";
import { AiOutlineTranslation } from "react-icons/ai";
import { Dropdown } from './Dropdown';
import { Typography } from '../Typography/Typography';
import { ELanguage, TLanguage } from '../../types/const';
import { LanguageContext } from '../../providers/LanguageProvider';
import { useTranslation } from 'react-i18next';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #0022ff55;
  padding: 0 4rem;
`
const MainMenuContainer = styled.div`
  display: flex;
  align-items:center;
  height: ${({theme}) => theme.heights.header};
`
const LogoIconContainer = styled.div`
  display: flex;
  height: 100%;
  align-items:center;
`
const LogoIcon = styled(FaCentercode)`
  color: white;
  font-size: 2rem;
`
const MenuItem = styled.div`
  padding: .5rem;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const DropdownMenuItem = styled(MenuItem)`
  position: relative;
  cursor: pointer;
`
const NavbarGenreDropdown = styled(Dropdown)`
  background-color: gray;
  max-height: 0px;
  overflow: hidden;
  transition: all .15s ease-in-out;
  ${DropdownMenuItem}:hover & {
    max-height: 200px;
  }
`

const TranslationIcon = styled(AiOutlineTranslation)`
  color: white;
  font-size: 1.5rem;  
`
const TranslationMenu = styled.div<{shown: boolean}>`
  position: absolute;
  transition: all .15s ease-in-out;
  max-height: ${({shown}) => shown ? "100px" : "0px"};
  min-width: 100%;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0); 
  overflow: hidden;
  white-space: nowrap;
`

const TranslationMenuItem = styled(MenuItem)`
  position: relative;
  height: 100%;
`
const TranslationOption = styled.div<{activeLanguage: boolean}>`
  cursor: pointer;
  background-color: ${({activeLanguage}) => activeLanguage ? "white" : "grey" };
`

const Navbar = () => {
  const [isTranslationMenuShown, setIsTranslationMenuShown] = useState(false);
  const {i18n} = useTranslation();
  const {lang, setLang} = useContext(LanguageContext);
  const changeLanguage = (lang: TLanguage) => {
    i18n.changeLanguage(lang);
    setLang(lang);
    setIsTranslationMenuShown(false);
  }
  return (
    <NavbarContainer>
      <LogoIconContainer>
        <LogoIcon />
      </LogoIconContainer>
      <MainMenuContainer>
          <TranslationMenuItem>
              <TranslationIcon onClick={() => setIsTranslationMenuShown(prev => !prev)} onBlur={() => setIsTranslationMenuShown(false)}/>
              <TranslationMenu shown={isTranslationMenuShown}>
                {Object.entries(ELanguage).map(
                  ([displayed, value]) =>
                    <TranslationOption activeLanguage={value === lang} onClick={() => changeLanguage(value)}>{displayed}</TranslationOption>
                )}
              </TranslationMenu>
          </TranslationMenuItem>
          <DropdownMenuItem>
            <Typography>Genres</Typography>
            <NavbarGenreDropdown items={["JRock","Progressive House","Hardstyle"]}></NavbarGenreDropdown>
          </DropdownMenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Login</MenuItem>
      </MainMenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
