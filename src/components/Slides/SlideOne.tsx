import styled, { keyframes } from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #444;
`
const orbit = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const GenresContainer = styled.div`
  position: relative;
  flex: 1;
  animation: ${orbit} 15s linear infinite;
 `

const genres = [1,2,3,8, "cHO", "NOK", "tabasko", 6]

const GenreItem = styled.div<{index: number}>`
  border: 1px solid black;
  box-sizing: border-box;
  width: 10vw;
  height: 10vw;
  position: absolute;
  top: ${({index}) => `calc(${Math.sin((index/(genres.length))*2*Math.PI)}* 20vw + 50% - 5vw)`}; 
  left: ${({index}) => `calc(${Math.cos((index/(genres.length))*2*Math.PI)}* 20vw + 50% - 5vw)`};
  background-color: ${({index}) => `color-mix(in srgb, green ${10 * index}%, blue ${90 / index}%)`};
  animation: ${orbit} 15s linear infinite;
  animation-direction: reverse;
`

const CenterPoint = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: red;
  width: 5px;
  height: 5px;
`

const ImageContainer = styled.div`
  flex: 1;
`

const SlideOne: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <GenresContainer>
          <CenterPoint />
          {genres.map((genre, i) => <GenreItem index={i+1}>{genre}</GenreItem>)}
        </GenresContainer>
        <ImageContainer>Imagine? LOL!</ImageContainer>
      </SectionContainer>
    </>
  );
};

export default SlideOne;
