import React from 'react';

import { SortBarWrapper, SortColumn, SearchColumn, SearchControl } from './styled';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchProducts } from 'actions/products';

class SortBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    }, () => this.props.searchProducts(this.state.term));
  }

  render() {
    return (
      <SortBarWrapper>
        <SortColumn>
          Ordenar por
        </SortColumn>
        <SearchColumn>
          Buscar producto
          <SearchControl onChange={this.onSearchChange}/>
        </SearchColumn>
      </SortBarWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchProducts
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(SortBar);