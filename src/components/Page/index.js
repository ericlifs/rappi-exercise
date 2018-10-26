import React from 'react';

import PageBlock from 'components/PageBlock';

import { PageWrapper } from './styled';

const Page = ({ children, direction, justify, align, ...otherProps }) => (
  <PageWrapper {...otherProps}>
    <PageBlock justify={justify} align={align}>
      {children}
    </PageBlock>
  </PageWrapper>
);

export default Page;