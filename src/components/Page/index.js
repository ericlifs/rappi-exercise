import React, { Fragment } from 'react'

import Header from 'components/Header'
import PageBlock from 'components/PageBlock'

import { PageWrapper } from './styled'

export default function Page({ children, justify, align, ...otherProps }) {
  return (
    <Fragment>
      {otherProps.withHeader && <Header />}
      <PageWrapper {...otherProps}>
        <PageBlock justify={justify} align={align}>
          {children}
        </PageBlock>
      </PageWrapper>
    </Fragment>
  )
}
