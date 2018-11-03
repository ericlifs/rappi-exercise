import { connect } from 'react-redux';

import ProductsList from 'components/ProductsList';
import { filterAndSortProducts, getCategoryProducts } from 'selectors/products';
import { getMenuOpened } from 'selectors/ui';

const mapStateToProps = state => ({
  filteredProducts: filterAndSortProducts(state),
  categoryProducts: getCategoryProducts(state),
  menuOpened: getMenuOpened(state)
});

export default connect(mapStateToProps)(ProductsList);