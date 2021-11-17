import React from 'react';
import { HeaderLogo, Title, Wrapper } from './Header.styles';
import Logo from "../img/IMG_2226.PNG"

import Background from "../img/headerbg.jpg"


const Header = ({ countCartItems }) => {
    
    return (
        <Wrapper img= {Background}> 
            <HeaderLogo src={Logo} alt="logo"/> 
            <Title>
                The Very High Priestess   
            </Title>
            <div>
                Cart { ' '}
                {countCartItems ? (
                    <button>{countCartItems}</button>
                ) : (
                    ' '
                )}
            </div>
        </Wrapper>
    );
    }

export default Header;