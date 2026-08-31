import styled from 'styled-components'
import bg from '../../assets/bg.jpg';
import { Anchor } from '../../globalStyles';

const Background = styled.section`
    height: calc(100vh - 50px);
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0.6)), url(${bg}) no-repeat top center / cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainTitle = styled.div`
    color: white;
    font-size: 3rem;
`

const MainSlide = () => {
    return <>
        <Anchor id="main"/> 
        <Background>
            <MainTitle>
                Hear Worlds Sound
            </MainTitle>
        </Background>
    </>
};

export default MainSlide;