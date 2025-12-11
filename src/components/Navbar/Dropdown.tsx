import styled from 'styled-components'

const DropdownContainer = styled.div`
    position: absolute;
    min-width: 100%;
    left: -50%;
    top: 100%;
`

const DropdownElement = styled.div`
    white-space: nowrap;
    margin: 1rem;
`

type DropdownProps = {
    items: string[]
    className?: string
}


export const Dropdown: React.FC<DropdownProps> = ({items, className}: DropdownProps) => {
    return <DropdownContainer className={className}>
        {items.map((item) => <DropdownElement>
            {item}
        </DropdownElement>)}
    </DropdownContainer>
}