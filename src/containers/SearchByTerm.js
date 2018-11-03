import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchByTerm from 'components/SearchByTerm';
import { setSearchTerm } from 'actions/products';

const mapDispatchToProps = {
  setSearchTerm
};

export default withRouter(connect(null, mapDispatchToProps)(SearchByTerm));
