import React from 'react';

import Logo from './logo.png';
import PageBlock from 'components/PageBlock';

import { HeaderWrapper, BaratonLogo } from './styled';

export const HEADER_HEIGHT = 100;

const Header = () => (
  <HeaderWrapper height={HEADER_HEIGHT}>
    <PageBlock align='center' justify='space-between'>
      <BaratonLogo src={Logo} alt='el-baraton'/>
      Carrito
    </PageBlock>
  </HeaderWrapper>
);

export default Header;