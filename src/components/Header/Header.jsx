import React from 'react'
import Input from '../Input/Input'

import {
    HeaderContainer,
    HeaderLogo,
    HdSearch,
    HdSpan,
    HdOptions,
    List,
    Op
} from './Header.Elements'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogo>Market_Outfit</HeaderLogo>

        <HdSearch>
            <HdSpan>Search</HdSpan>
            <Input />
        </HdSearch>

        <HdOptions>
            <List>
                <Op>Contact</Op>
                <Op>Products</Op>
                <Op>Login</Op>
            </List>
        </HdOptions>
    </HeaderContainer>
  )
}

export default Header