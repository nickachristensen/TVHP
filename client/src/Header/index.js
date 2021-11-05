import React from 'react';

import { HeaderLogo, Title, Wrapper } from './Header.styles';
import Logo from "../img/IMG_0238.jpg"

const Header = () => {
    return (
        <Wrapper> 
            <HeaderLogo src={Logo} alt="logo" />
            <Title>
                The Very High Priestess   
            </Title>
        </Wrapper>
    );
    }

export default Header;