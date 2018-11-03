import React from 'react';
import { connect } from 'react-redux';

import { fetchProductsByCategory } from 'actions/products';

import Page from 'components/Page';
import CategoriesMenuContainer from 'containers/CategoriesMenu';
import ProductsListContainer from 'containers/ProductsList';

class Category extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchProductsByCategory(Number(id));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchProductsByCategory(Number(this.props.match.params.id));
    }
  }

  render() {
    return (
      <Page direction='row' withHeader>
        <CategoriesMenuContainer/>
        <ProductsListContainer/>
      </Page>
    )
  }
}

const mapDispatchToProps = {
  fetchProductsByCategory
};

export default connect(null, mapDispatchToProps)(Category);