import styled from 'styled-components'

export const FilledButton = styled.button`
    padding: 1rem;
    width: 100%;
    border-radius: .5rem;
    color: white;
    border: none;
    margin-top: .5rem;
    font-weight: 750;
    text-transform:uppercase;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.main};
    transition: all .15s ease-in-out;
    &:focus-visible {
        outline: none
    }
    &:hover {
        background-color: ${({theme}) => theme.colors.secondary};
        color: #f3f3f3;
    }
`