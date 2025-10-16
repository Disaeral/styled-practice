import React, { useState } from "react";
import styled from "styled-components";
import { MyListElement, MyLink, MyList, MyButton, MyHashLink } from "../../globalStyles";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";


const NavbarContainer = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #5680e9;
  z-index: 100;
  padding: 0 2rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
`;
const NavbarLogo = styled(MyHashLink)`
  flex: 1;
  display: flex;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    flex: none;
  }
`;

const NavIcon = styled.div``;
const NavMenu = styled(MyList)`
  flex: 5;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const MenuItem = styled(MyListElement)`
  transition: all 0.6s ease-out;
  &:hover {
    background-color: #84ceeb;
  }

  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const MenuLink = styled(MyHashLink)`
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
const SubMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 10rem;
  display: block;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  transition: all 0.1s ease-out;
  ${MenuItem}:hover > & {
    opacity: 1;
    pointer-events: auto;
  }
  @media screen and (max-width: 768px) {
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: auto;
    width: 100%;
    display: none;
    ${MenuItem}:hover > & {
      display: block;
    }
  }
`;
const SubMenu = styled(MyList)`
  //display:block;//приходится заново прописывать дисплей тк наследуется стиль MyList а не SubMenuContainer
  position: relative;
  display: block;
`;

const SubMenuLink = styled(MyLink)``;

const SubMenuItem = styled(MyListElement)`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between; //для иконки внутри внешнего элемента со вложенным списком
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
    & > ${SubMenuLink} {
      color: #000;
    }
  }
`;

const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: space-between;
  }
`;
const MenuContainer = styled.div`
  flex: 5;
  display: flex;
  @media screen and (max-width: 768px) {
    //display: ${({ visible }) => (visible ? "flex" : "none")};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: ${({ visible }) => (visible ? "100%" : "-100vh")};
    left: 0;
    width: 100%;
    background-color: #5680e9;
    height: calc(100vh - 4rem);
    padding: 1rem 0;
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
    transition: all 0.6s ease;
  }
`;
const Button = styled(MyButton)`
  height: 3rem;
`;
const TransparentButton = styled(Button)`
  background: transparent;
`;
const MobileIcon = styled.div`
  cursor: pointer;
  color: white;
  font-size: 24px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ArrowDown = styled(FaChevronDown)`
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-left: 0.5rem;
`;
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const isMobile = window.innerWidth <= 768 ? true : false;

  const handleClick = () => {
    return setVisible(!visible);
  };
  return (
    <NavbarContainer>
      <NavbarLogo smooth to={'/#main'} onClick={isMobile?()=>handleClick(false):null}>
        <NavIcon />
        HWSound
      </NavbarLogo>
      <MenuContainer visible={visible}>
        <NavMenu>
          <MenuItem>
            <MenuLink smooth to={"/#genres"} onClick={isMobile?()=>handleClick(false):null}>
              <span>Жанры</span>
              <ArrowDown />
            </MenuLink>

            <SubMenuContainer>
              <SubMenu>
                <SubMenuItem>
                  <SubMenuLink>Rock</SubMenuLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SubMenuLink>Electronica</SubMenuLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SubMenuLink>Rap</SubMenuLink>
                </SubMenuItem>
                <SubMenuItem>
                  <SubMenuLink>Indie</SubMenuLink>
                </SubMenuItem>
              </SubMenu>
            </SubMenuContainer>
          </MenuItem>
          <MenuItem>
            <MenuLink>Библиотека</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Плейлисты</MenuLink>
          </MenuItem>
        </NavMenu>
        <ButtonsContainer>
          <TransparentButton to="/login">Логин</TransparentButton>
          <Button to="/login">Регистрация</Button>
        </ButtonsContainer>
      </MenuContainer>

      <MobileIcon onClick={handleClick}>
        {visible ? <FaTimes /> : <FaBars />}
      </MobileIcon>
    </NavbarContainer>
  );
};

export default Navbar;
