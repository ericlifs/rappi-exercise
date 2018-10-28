import React from 'react';

import Page from 'components/Page';
import CategoriesMenu from 'components/CategoriesMenu';

const Home = () => (
  <Page direction='row' withHeader>
    <CategoriesMenu/>
  </Page>
);

export default Home;
