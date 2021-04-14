import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        overflow: hidden;
        background-color: #5ab9ea;
        font-family: 'Poppins', sans-serif;
    }
    
    
    
`;

export const MyLink = styled(Link)`
  color:white;
  transition: all .2s ease-out;
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
  margin: 0 .5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all .2s ease-out;
  width:90%;
  &:hover{
    border: 1px solid #ffffffcc;
  }

`

export default Global;
