import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PriceFilter from 'components/FilterBar/PriceFilter';
import { setFilterFunction } from 'actions/products'

const mapDispatchToProps = {
  setFilterFunction
};

export default withRouter(connect(null, mapDispatchToProps)(PriceFilter));
