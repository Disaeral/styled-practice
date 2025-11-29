import { MouseEvent as ReactMouseEvent } from 'react';
import styled, { keyframes } from "styled-components";

const SectionContainer = styled.section`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #444;
`;

const orbit = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const genres = [1, 2, 3, 8, "cHO", "NOK", "tabasko", 6];
const TOTAL_GENRES = genres.length;
const RADIUS = 20;
const ITEM_SIZE = 10;
const TWO_PI = 2 * Math.PI;

const GenreItem = styled.div<{ index: number }>`
    border-radius: 1rem;
    box-sizing: border-box;
    width: ${ITEM_SIZE}vw;
    height: ${ITEM_SIZE}vw;
    position: absolute;
    top: ${({ index }) => {
        const angle = (index / TOTAL_GENRES) * TWO_PI;
        return `calc(${Math.sin(angle)} * ${RADIUS}vw + 50% - ${ITEM_SIZE / 2}vw)`;
    }};
    left: ${({ index }) => {
        const angle = (index / TOTAL_GENRES) * TWO_PI;
        return `calc(${Math.cos(angle)} * ${RADIUS}vw + 50% - ${ITEM_SIZE / 2}vw)`;
    }};
    animation: ${orbit} 15s linear infinite reverse;
    pointer-events: auto;
    scale: 1;
    transition: scale 0.3s ease;
    &:hover {
        animation-play-state: paused;
        scale: 1.2;
    }
`;

const InnerGenreItem = styled.div<{ index: number }>`
    background-color: #ff000033;
    border: 1px solid black;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ index }) =>
        `color-mix(in srgb, green ${10 * index}%, blue ${90 / index}%)`};
    ${GenreItem}:hover & {
        transform: perspective(1000px) 
            rotateX(var(--rotateX, 0deg))
            rotateY(var(--rotateY, 0deg));
    }
`;

const GenresContainer = styled.div`
    position: relative;
    flex: 1;
    animation: ${orbit} 15s linear infinite;
    pointer-events: none;
    &:hover {
        animation-play-state: paused;
        ${GenreItem} {
            animation-play-state: paused;
        }
    }
`;

const CenterPoint = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: red;
    width: 5px;
    height: 5px;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const SlideOne: React.FC = () => {
    const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normalizedX = (x / rect.width - 0.5) * 2;
        const normalizedY = (y / rect.height - 0.5) * 2;    
        const rotateY = normalizedX * 20;
        const rotateX = -normalizedY * 20;    
        e.currentTarget.style.setProperty("--rotateX", `${rotateX}deg`);
        e.currentTarget.style.setProperty("--rotateY", `${rotateY}deg`);
    };

    return (
        <SectionContainer>
            <GenresContainer>
                <CenterPoint />
                {genres.map((genre, i) => (
                    <GenreItem key={i} index={i + 1}>
                        <InnerGenreItem index={i + 1} onMouseMove={handleMouseMove}>{genre}</InnerGenreItem>
                    </GenreItem>
                ))}
            </GenresContainer>
            <ImageContainer>Imagine? LOL!</ImageContainer>
        </SectionContainer>
    );
};

export default SlideOne;
