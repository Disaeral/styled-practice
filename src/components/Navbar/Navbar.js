import React, { useState } from "react";
import styled from "styled-components";
import { MyListElement, MyLink, MyList, MyButton } from "../../globalStyles";

const NavbarContainer = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: #5680e9cc;
  z-index: 100;
  padding: 0 2rem;
  margin: 0 auto;
`;
const NavbarLogo = styled(MyLink)`
  flex: 1;
  display: flex;
`;

const NavIcon = styled.div``;
const NavMenu = styled(MyList)`
  flex: 5;
  justify-content:flex-end;
  align-items: center;
`;
const MenuItem = styled(MyListElement)`
  transition: all 0.6s ease-out;
  &:hover {
    background-color: #84ceeb;
  }
  
  padding: 0 1rem;
  position: relative;
`;
const MenuLink = styled(MyLink)``;
const SubMenuContainer = styled.div`
position: absolute;
  top: 100%;
  left:0;
  width: 10rem;
  display:block;
  background-color: black;
`
const SubMenu = styled(MyList)`
  display:block;//приходится заново прописывать дисплей тк наследуется стиль MyList а не SubMenuContainer
  position: relative;
`;
const SubMenuItem = styled(MyListElement)`
padding: 0 1rem;
display:flex;
align-items:center;
justify-content: space-between;//для иконки внутри внешнего элемента со вложенным списком
`;

const SubMenuLink = styled(MyLink)``;

const SeclvlSubMenu = styled(MyList)`
  
`;

const SeclvlMenuItem = styled(MyListElement)``;

const SeclvlMenuLink = styled(MyLink)``;

const ButtonsSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuContainer = styled.div`
  flex: 5;
  display: flex;
`;
const Button = styled(MyButton)`
  height: 3rem;
`;
const TransparentButton = styled(Button)`
  background: transparent;
`;

const Navbar = () => {
  //const [visible, setVisible] = useState(false)
  return (
    <NavbarContainer>
      <NavbarLogo>
        <NavIcon />
        NavText
      </NavbarLogo>
      <MenuContainer>
        <NavMenu>
          <MenuItem>
            <MenuLink>Category 1</MenuLink>
            <SubMenuContainer>
            <SubMenu>
              <SubMenuItem>
                <SubMenuLink>Subcategory 1</SubMenuLink>
               
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink>Subcategory 2</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink>Subcategory 3</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink>Subcategory 4</SubMenuLink>
              </SubMenuItem>
            </SubMenu>

            </SubMenuContainer>
          </MenuItem>
          <MenuItem>
            <MenuLink>Category 2</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Category 3</MenuLink>
          </MenuItem>
        </NavMenu>
        <ButtonsSection>
          <TransparentButton>Логин</TransparentButton>
          <Button>Регистрация</Button>
        </ButtonsSection>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
