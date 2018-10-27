import React from 'react';

import Page from 'components/Page';
import CategoriesMenu from 'components/CategoriesMenu';
import ProductsList from 'components/ProductsList';

const Home = () => (
  <Page direction='row' withHeader>
    <CategoriesMenu/>
    <ProductsList/>
  </Page>
);

export default Home;
