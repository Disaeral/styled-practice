import React from 'react';
import styled from 'styled-components'
import bg from '../../assets/bg.jpg'

const Background = styled.section`
    height: calc(100vh - 3rem);
    width:100%;
    background:url(${bg}) no-repeat top center / cover;
    z-index: -1;
    &::before {
        content:"";
        height: calc(100vh - 3rem);
    width:100%;
    background-color: #000;
    opacity: .6;
    position: relative;
    display:flex;
    }
`

const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 1;
    width:100%;
    font-size: 3rem;
    position: absolute;
    top: 50vh;
`

const MainSlide = () => {
    return ( 
        <Background>
            
            <MainTitle>
               Hear Worlds Sound
           </MainTitle>
        
           
        </Background>
        
    );
};

export default MainSlide;