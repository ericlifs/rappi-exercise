import React, { Fragment } from 'react';

import Header, { HEADER_HEIGHT } from 'components/Header';
import PageBlock from 'components/PageBlock';

import { PageWrapper } from './styled';

const Page = ({ children, direction, justify, align, ...otherProps }) => (
  <Fragment>
    {otherProps.withHeader && <Header/>}
    <PageWrapper {...otherProps} headerHeight={otherProps.withHeader ? HEADER_HEIGHT : 0}>
      <PageBlock justify={justify} align={align}>
        {children}
      </PageBlock>
    </PageWrapper>
  </Fragment>
);

export default Page;