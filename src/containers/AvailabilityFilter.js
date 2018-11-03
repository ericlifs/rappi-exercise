import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AvailabilityFilter from 'components/FilterBar/AvailabilityFilter';

import { setFilterFunction } from 'actions/products'

const mapDispatchToProps = {
  setFilterFunction
};

export default withRouter(connect(null, mapDispatchToProps)(AvailabilityFilter));
