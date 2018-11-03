import { connect } from 'react-redux';
import { addProductToCart } from 'actions/cart';

import AddToCart from 'components/AddToCart/index';

const mapDispatchToProps = {
  addProductToCart
};

export default connect(null, mapDispatchToProps)(AddToCart)
