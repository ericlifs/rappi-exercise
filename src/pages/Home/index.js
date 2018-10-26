import React from 'react';

import CategoriesMenu from 'components/CategoriesMenu';
import Page from 'components/Page';

class Home extends React.Component {
  render() {
    return (
      <Page direction='row'>
        <CategoriesMenu/>
      </Page>
    );
  }
}

export default Home;
