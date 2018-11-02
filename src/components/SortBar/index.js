import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setSearchTerm, setSortMethod } from 'actions/products';

import SORT_METHODS from 'config/sortMethods';
import SORT_ORDERS from 'config/sortOrders';

import { SortBarWrapper, SortColumn, SearchColumn, SortControl, SearchControl, Title } from './styled';

class SortBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      opened: false,
      sortMethod: '',
      sortOrder: SORT_ORDERS[0].value
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSortMethodChange = this.onSortMethodChange.bind(this);
    this.onToggleOpened = this.onToggleOpened.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        term: '',
        opened: false,
        sortMethod: '',
        sortOrder: SORT_ORDERS[0].value
      });
    }
  }

  onToggleOpened() {
    this.setState({
      opened: !this.state.opened
    })
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    }, () => this.props.setSearchTerm(this.state.term));
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
      <SortBarWrapper opened={this.state.opened}>
        <SortColumn>
          <Title onClick={this.onToggleOpened}>Ordenar</Title>
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
    setSearchTerm,
    setSortMethod
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(SortBar));