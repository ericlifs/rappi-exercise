import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchStaredProducts } from 'actions/products'
import { getStaredProducts } from 'selectors/products'

import Page from 'components/Page';
import CategoriesMenu from 'components/CategoriesMenu';
import ProductsList from 'components/ProductsList';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchStaredProducts(5)
  }

  render() {
    const { staredProducts } = this.props;

    return (
      <Page direction='row' withHeader>
        <CategoriesMenu/>
        <ProductsList products={staredProducts} title='Productos destacados' fullwidth/>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  staredProducts: getStaredProducts(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchStaredProducts
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
