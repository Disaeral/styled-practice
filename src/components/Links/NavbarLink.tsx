import { LinkProps } from 'react-router'
import styled from 'styled-components'

import { Link } from './Link'

const StyledNavbarLink = styled(Link)`
    color: ${({theme}) => theme.palette.main};
`

export const NavbarLink = ({to, children}: LinkProps) => {
    return <StyledNavbarLink to={to}>
        {children}
    </StyledNavbarLink>
}