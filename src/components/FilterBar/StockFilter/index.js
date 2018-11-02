import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FILTERS from 'config/filters';
import { setFilterFunction } from 'actions/products'
import { minStock, maxStock } from 'helpers/filters';

import { FilterColumn, RangeInput, RangeLabel, RangeWrapper } from '../styled';

class PriceFilter extends React.Component {
  state = {
    [FILTERS.MIN_STOCK]: '',
    [FILTERS.MAX_STOCK]: '',
  };

  onFieldChange(field, ev) {
    const { value } = ev.target;

    switch (field) {
      case FILTERS.MIN_STOCK:
        this.props.setFilterFunction(FILTERS.MIN_STOCK, minStock(value));
        break;

      default:
        this.props.setFilterFunction(FILTERS.MAX_STOCK, maxStock(value));
        break;
    }

    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <FilterColumn>
        <RangeLabel>Stock</RangeLabel>
        <RangeWrapper>
          <RangeInput value={this.state[FILTERS.MIN_STOCK]} onChange={this.onFieldChange.bind(this, FILTERS.MIN_STOCK)}/>
          <RangeLabel>Hasta</RangeLabel>
          <RangeInput value={this.state[FILTERS.MAX_STOCK]} onChange={this.onFieldChange.bind(this, FILTERS.MAX_STOCK)}/>
        </RangeWrapper>
      </FilterColumn>
    )
  }
}

const mapDispatchToProps = {
  setFilterFunction
};

export default withRouter(connect(null, mapDispatchToProps)(PriceFilter));