import React from 'react';
import styled from 'styled-components'
import { MyLink, MyList, MyListElement } from '../../globalStyles';

const AppFooter = styled.div`
    background-color: ${props => props.theme.colors.navyBlue};
    padding-bottom: 5rem;
    flex-wrap:wrap;
    display:flex;
    width: 100%;
    justify-content:space-around;
    align-items: center;
    @media screen and (max-width: 769px) {
        flex-direction:column;
    }
    
`
const FooterColumn = styled.div`
    display:flex;
    flex-direction: column;
    color: #000;
    max-width: 14vw;
    
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
                        <FooterLink>Соцсети</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>Youtube</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>Instagram</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>Twitter</FooterLink>
                    </FooterEl>
                </FooterList>
            </FooterColumn>
            <FooterColumn>
                <FooterList>
                    <FooterElHeading>
                        <FooterLink>О нас</FooterLink>
                    </FooterElHeading>
                    <FooterEl>
                        <FooterLink>Компания</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>Вакансии</FooterLink>
                    </FooterEl>
                    <FooterEl>
                        <FooterLink>Контакты</FooterLink>
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