import React from 'react';
import styled from 'styled-components'
import { MyLink, MyList, MyListElement } from '../../globalStyles';

const AppFooter = styled.div`
    background-color: ${props => props.theme.colors.navyBlue};
    padding-bottom: 5rem;
    flex-wrap:wrap;
    display:flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
    @media screen and (max-width: 769px) {
        flex-direction:column;
    }
`
const FooterColumn = styled.div`
    display:flex;
    flex-direction: column;
    color: #000;
    width: 24vw;
    
`
const FooterList = styled(MyList)`
display:flex;
    flex-direction: column;
`
const FooterEl = styled(MyListElement)``

const FooterLink = styled(MyLink)`
color: white;
`

const FooterElHeading = styled.h2`
font-size:1.1rem;
`

const Footer = () => {
    return (
        <AppFooter>
            <FooterColumn>
                <FooterList>
                    <FooterElHeading>
                        <FooterLink>link1 heading1</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>link2</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link3</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link4</FooterLink>
                    </FooterEl>
                </FooterList>
            </FooterColumn>
            <FooterColumn>
                <FooterList>
                    <FooterElHeading>
                        <FooterLink>link5 heading2</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>link6</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link7</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link8</FooterLink>
                    </FooterEl>
                </FooterList>
            </FooterColumn>
            <FooterColumn>
                <FooterList>
                    <FooterElHeading>
                        <FooterLink>link9 heading3</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>link10</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link11</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link12</FooterLink>
                    </FooterEl>
                </FooterList>
            </FooterColumn>
            <FooterColumn>
            <FooterList>
                    <FooterElHeading>
                        <FooterLink>link13 heading4</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>link14</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link15</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>link16</FooterLink>
                    </FooterEl>
                </FooterList>
            </FooterColumn>
        </AppFooter>
    );
};

export default Footer;