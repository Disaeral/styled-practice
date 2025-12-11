import styled, { keyframes } from 'styled-components';

type SkeletonTextProps = {
    width?: string;
};

const loading = keyframes`
    0% {
        background-color: #777;
    }
    50% {
        background-color: #c3c3c3;
    }
    100% {
        background-color: #777;
    }
`;

const SkeletonTextContainer = styled.div<SkeletonTextProps>`
    background-color: white;
    width: ${({width}) => width?.toString()};
    height: 1.5rem;
    margin: .5rem;
    animation: ${loading} linear 1.5s infinite;
    border-radius: .5rem;
`;


export const SkeletonText: React.FC<SkeletonTextProps> = ({width}) => {
    return (
        <SkeletonTextContainer width={width}/>
    );
};
