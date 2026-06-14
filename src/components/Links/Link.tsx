import styled from 'styled-components'
import { Link as RRLink, LinkProps } from 'react-router'

const ClickableLink = styled(RRLink)`
    cursor: pointer;
    color: ${({theme}) => theme.palette.secondary};
`

export const Link = ({children, to}: LinkProps) => {
    return <ClickableLink to={to}>
        {children}
    </ClickableLink>
}