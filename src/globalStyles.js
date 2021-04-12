import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        overflow: hidden;
        background-color: #5680e9;
    }
    
    
    
`;

export const MyLink = styled(Link)`
  color: white;
  background-color: #5ab9ea;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all .6s ease-out;
  &:hover{
      background-color: #84ceeb
  }
`;
export const MyListElement = styled.li`
  width: 100%;
  text-align: center;
  position: relative;
`;
export const MyList = styled.ul`
  display: flex;
  list-style: none;
`;

export default Global;
