import React from 'react';
import { HeaderContainer } from './HederStyled';
import Navigation from './navigation/Navigation';
const Header = () => {
    return (
        <HeaderContainer>
            <Navigation/>
        </HeaderContainer>
    );
}

export default Header;