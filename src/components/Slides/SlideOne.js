import React from 'react';
import { MyList, MyListElement, Slide } from '../../globalStyles';
import styled from 'styled-components'

const SlideOneCont = styled(Slide)`
    position:relative;
    @media screen and (max-width: 768px) {
        display:flex;
        flex-direction: column;
        align-items:center;
    }
`

const ListContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding:1rem;
    
    
`

const GenresList = styled(MyList)`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    
`

const GenreElem = styled(MyListElement)`
    border:1px solid black;
    cursor: pointer;
    margin:0 .2rem;
    width: 28vh;
    height: 28vh;
    transition: all .2s ease-out;
    &:hover {
        transform:scale(1.05);
        
    }
    @media screen and (max-width: 768px) {
        height: 20vh;
        width: 20vh;
    }
`
const FlexRow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    &:nth-child(2) {
        justify-content:space-between;
        align-self:flex-end;
        
        @media screen and (max-width: 768px) {
            max-width: 100%;
            align-items:center;
            justify-content:center;
        }
    }
    padding: .2rem 0;
`
const MainTitle = styled.div`
    position: absolute;
    top:36%;
    left: 38%;
    height: 24vh;
    width: 24vw;
    background-color: green;
    font-size: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        position: initial;
        width: 100%;
    }
`

const SlideOne = () => {
    return (
    
        <SlideOneCont lightBg>
            <MainTitle>
                Listen what is interesting for you
            </MainTitle>
            <ListContainer>
            <GenresList>
                <FlexRow>
                <GenreElem>1</GenreElem>
                <GenreElem>2</GenreElem>
                </FlexRow>
                <FlexRow>
                <GenreElem>3</GenreElem>
                <GenreElem>4</GenreElem>
                </FlexRow>
                <FlexRow>
                <GenreElem>5</GenreElem>
                <GenreElem>6</GenreElem>
                </FlexRow>
                
            </GenresList>
            </ListContainer>
        </SlideOneCont>
       
    );
};

export default SlideOne;