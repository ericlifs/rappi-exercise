import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProductsByCategory } from 'actions/products';

import Page from 'components/Page';
import CategoriesMenu from 'components/CategoriesMenu';
import ProductsList from 'components/ProductsList';

class Category extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchProductsByCategory(Number(id));
  }

  render() {
    return (
      <Page direction='row' withHeader>
        <CategoriesMenu/>
        <ProductsList/>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchProductsByCategory
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Category);