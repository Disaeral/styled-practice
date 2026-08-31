import styled from 'styled-components';

export const Container = styled.div`
    height: ${({theme}) => theme.heights.content};
    display: flex;
    align-items:center;
    justify-content:center;
`