import { FC, PropsWithChildren } from "react";
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const FancyText = styled.p`
    animation: ${fadeIn} .3s linear;
`;

export const Typography: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
    return <FancyText>{children}</FancyText>
}