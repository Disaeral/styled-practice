import styled from 'styled-components';
import { DynamicInput } from './DynamicInput';
import { Label } from './Label';
import { InputHTMLAttributes } from 'react';

interface LabeledDynamicInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const LabeledDynamicInputContainer = styled.div`
    position: relative;
    padding: .5rem 0;
`
const StyledInput = styled(DynamicInput)`
    &:focus {
        border-color: blue;
    }
`

const PositionedLabel = styled(Label)`
    position: absolute;
    left: .25rem;
    top: 1rem;
    font-size: 1rem;
    color: gray;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    background: white;
    padding: 0 4px;
    ${StyledInput}:focus ~ & {
        color: #0000ffaa;
        top: -.25rem;
        font-size: .75rem;
    }
    ${StyledInput}:not(:placeholder-shown) ~ & {
        top: -.25rem;
        font-size: .75rem;
    }
`


export const LabeledDynamicInput = 
    ({type, label, name}: LabeledDynamicInputProps) => {
        return <LabeledDynamicInputContainer>
            <StyledInput placeholder=" " name={name} type={type} />
            <PositionedLabel htmlFor={name} text={label}></PositionedLabel>
        </LabeledDynamicInputContainer>
    }