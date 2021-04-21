import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {HashLink} from 'react-router-hash-link'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        overflow-y: auto;
        font-family: 'Poppins', sans-serif;
    }
    

    
`;

export const MyLink = styled(Link)`
  color: white;
  transition: all 0.2s ease-out;
  //background-color: #5ab9ea;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;
export const Anchor = styled.div`
display: block;
position: relative;
top: -4rem;
visibility: hidden;
`
export const MyHashLink = styled(HashLink)`
  color: white;
  transition: all 0.2s ease-out;
  //background-color: #5ab9ea;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;
export const MyListElement = styled.li`
  text-align: center;
  position: relative;
`;
export const MyList = styled.ul`
  display: flex;
  list-style: none;
`;
export const MyButton = styled(MyLink)`
  background-color: #8860d0;
  padding: 0 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.2s ease-out;
  width: 90%;
  &:hover {
    border: 1px solid #ffffffcc;
  }
`;

export const Slide = styled.div`
  height: calc(100vh - 4rem);
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  z-index: 0;
  display: flex;
  padding: 0 2rem;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};
  //overflow-y:scroll;
`;

export default Global;
