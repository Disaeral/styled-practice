import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyListElement, MyLink, MyList } from "../../globalStyles";

const NavbarContainer = styled.nav`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5ab9ea;
`;
const NavbarLogo = styled(MyLink)``;

const NavIcon = styled.div``;
const NavMenu = styled(MyList)``;
const MenuItem = styled(MyListElement)``;
const MenuLink = styled(MyLink)``;
const SubMenu = styled(MyList)`
display: none;
  ${MenuItem}:hover & {
    display:block;
  }
`;
const SubMenuItem = styled(MyListElement)`
    
`;

const SubMenuLink = styled(MyLink)``;

const SeclvlSubMenu = styled(MyList)`
  display: none;
  ${SubMenuItem}:hover & {
    display: flex;
  }
`;

const SeclvlMenuItem = styled(MyListElement)``;

const SeclvlMenuLink = styled(MyLink)``;

const Navbar = () => {

    const [visible, setVisible] = useState(false)
  return (
    <NavbarContainer>
      <NavbarLogo>
        <NavIcon />
        NavText
      </NavbarLogo>
    <NavMenu>
      <MenuItem>
        <MenuLink>Category 1</MenuLink>
        <SubMenu>
          <SubMenuItem>
            <SubMenuLink>Subcategory 1</SubMenuLink>
            <SeclvlSubMenu>
              <SeclvlMenuItem>
                <SeclvlMenuLink>Subsubcategory 1</SeclvlMenuLink>
              </SeclvlMenuItem>
              <SeclvlMenuItem>
                <SeclvlMenuLink>Subsubcategory 2</SeclvlMenuLink>
              </SeclvlMenuItem>
              <SeclvlMenuItem>
                <SeclvlMenuLink>Subsubcategory 3</SeclvlMenuLink>
              </SeclvlMenuItem>
            </SeclvlSubMenu>
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
      </MenuItem>
      <MenuItem>
        <MenuLink>Category 2</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Category 3</MenuLink>
      </MenuItem>
    </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
