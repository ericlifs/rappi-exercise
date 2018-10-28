import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchProducts, setSortMethod } from 'actions/products';

import SORT_METHODS from 'config/sortMethods';
import SORT_ORDERS from 'config/sortOrders';

import { SortBarWrapper, SortColumn, SearchColumn, SortControl, SearchControl } from './styled';

class SortBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      sortMethod: '',
      sortOrder: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSortMethodChange = this.onSortMethodChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        term: '',
        sortMethod: '',
        sortOrder: ''
      });
    }
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    }, () => this.props.searchProducts(this.state.term));
  }

  onSortMethodChange(event, field) {
    this.setState({
      [field]: event.target.value,
    }, () => {
      const { sortMethod, sortOrder } = this.state;

      this.props.setSortMethod(sortMethod, sortOrder);
    });
  }

  getSortMethodInput() {
    return (
      <SortControl value={this.state.sortMethod} onChange={ev => this.onSortMethodChange(ev, 'sortMethod')}>
        <option value="" disabled defaultValue>Ninguno</option>
        {SORT_METHODS.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </SortControl>
    );
  }

  getSortOrderInput() {
    return (
      <SortControl value={this.state.sortOrder} onChange={ev => this.onSortMethodChange(ev, 'sortOrder')}>
        {SORT_ORDERS.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </SortControl>
    );
  }

  render() {
    return (
      <SortBarWrapper>
        <SortColumn>
          Ordenar por
          {this.getSortMethodInput()}
          {this.getSortOrderInput()}
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

export default withRouter(connect(null, mapDispatchToProps)(SortBar));