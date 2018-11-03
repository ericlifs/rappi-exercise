import { connect } from 'react-redux';

import Category from 'pages/Category';
import { fetchProductsByCategory } from 'actions/products';

const mapDispatchToProps = {
  fetchProductsByCategory
};

export default connect(null, mapDispatchToProps)(Category);