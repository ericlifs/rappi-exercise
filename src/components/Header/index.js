import React from 'react'

import Logo from './logo.png'
import PageBlock from 'components/PageBlock'
import CartContainer from 'containers/Cart'

import { HeaderWrapper, BaratonLogo } from './styled'

export default function Header() {
  return (
    <HeaderWrapper>
      <PageBlock align="center" justify="space-between">
        <BaratonLogo src={Logo} alt="el-baraton" />
        <CartContainer />
      </PageBlock>
    </HeaderWrapper>
  )
}
