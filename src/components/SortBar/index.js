import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchProducts, setSortMethod } from 'actions/products';

import SORT_METHODS from 'config/sortMethods';

import { SortBarWrapper, SortColumn, SearchColumn, SortControl, SearchControl } from './styled';

class SortBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      sort: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    }, () => this.props.searchProducts(this.state.term));
  }

  onSortChange(event) {
    this.setState({
      sort: event.target.value
    }, () => this.props.setSortMethod(this.state.sort));
  }

  render() {
    return (
      <SortBarWrapper>
        <SortColumn>
          Ordenar por
          <SortControl value={this.state.sort} onChange={this.onSortChange}>
            <option value="" disabled defaultValue>Ninguno</option>
            {SORT_METHODS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </SortControl>
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
    searchProducts,
    setSortMethod
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(SortBar);