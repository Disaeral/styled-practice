import React from "react";
import { Anchor, MyList, MyListElement, Slide } from "../../globalStyles";
import styled from "styled-components";

const SlideOneCont = styled(Slide)`
  display: flex;
  
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
flex:1;
    background-color: yellow;
    @media screen and (max-width: 768px) {
    display:none;
  }

`
const ListContainer = styled.div`
flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: 8rem;
  }
  @media screen and (max-width: 566px) {
    overflow-y:scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    
  };
`;

const GenresList = styled(MyList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GenreElem = styled(MyListElement)`
  border: 1px solid black;
  cursor: pointer;
  margin: 0 0.2rem;
  width: 28vh;
  height: 28vh;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    
    height: 20vh;
    width: 44vh;
  }
  @media screen and (max-width: 566px) {
    &:hover {
    transform: none;
  }
    margin-top: 0.25rem;
  };
`;
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 80%;
    
  };
  @media screen and (max-width: 566px) {
    flex-direction:column;
    width:100%;
    padding: 0;
    padding-top: 0.25rem;
  };
  &:nth-child(2) {
    justify-content: space-between;
    align-self: flex-end;
    max-width: 100%;
    
    @media screen and (max-width: 960px) {
      max-width: 82%;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 768px) {
      max-width: 80%;
      align-items: center;
      justify-content: center;
      
    
    }
  }
  padding: 0.25rem 0;
`;

const MainTitle = styled(GenreElem)`
  flex: 2;
  &:hover {
    transform: initial;
    background-color: black;
    color: white;
    transition: all 0.4s ease;
  }
  border: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    position: absolute;
    top:-0.25rem;
    background-color: black;
    color: white;
  }
`;

const SlideOne = () => {
  return (
    <>
    <Anchor  id="genres" />
    <SlideOneCont lightBg >
      <ListContainer>
        <GenresList>
          <FlexRow>
            <GenreElem>1</GenreElem>
            <GenreElem>2</GenreElem>
          </FlexRow>
          <FlexRow>
            <GenreElem>3</GenreElem>
            <MainTitle>Listen what is interesting for you</MainTitle>
            <GenreElem>4</GenreElem>
          </FlexRow>
          <FlexRow>
            <GenreElem>5</GenreElem>
            <GenreElem>6</GenreElem>
          </FlexRow>
        </GenresList>
      </ListContainer>
      <ImageContainer>
          asd
      </ImageContainer>
    </SlideOneCont>
    </>
  );
};

export default SlideOne;
