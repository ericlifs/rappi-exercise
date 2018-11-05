import React from 'react'

import FILTERS from 'config/filters'
import { minStock, maxStock } from 'helpers/filters'

import { FilterColumn, RangeInput, RangeLabel, RangeWrapper } from '../styled'

export default class StockFilter extends React.PureComponent {
  state = {
    [FILTERS.MIN_STOCK]: '',
    [FILTERS.MAX_STOCK]: ''
  }

  static getDerivedStateFromProps(props) {
    if (props.filters) {
      return {
        [FILTERS.MIN_STOCK]: props.filters[FILTERS.MIN_STOCK] || '',
        [FILTERS.MAX_STOCK]: props.filters[FILTERS.MAX_STOCK] || ''
      }
    }

    return null
  }

  onFieldChange(field, ev) {
    const { value } = ev.target

    switch (field) {
      case FILTERS.MIN_STOCK:
        this.props.setFilterFunction(FILTERS.MIN_STOCK, minStock(value), value)
        break

      default:
        this.props.setFilterFunction(FILTERS.MAX_STOCK, maxStock(value), value)
        break
    }
  }

  render() {
    return (
      <FilterColumn>
        <RangeLabel>Stock</RangeLabel>
        <RangeWrapper>
          <RangeInput
            value={this.state[FILTERS.MIN_STOCK]}
            onChange={this.onFieldChange.bind(this, FILTERS.MIN_STOCK)}
          />
          <RangeLabel>Hasta</RangeLabel>
          <RangeInput
            value={this.state[FILTERS.MAX_STOCK]}
            onChange={this.onFieldChange.bind(this, FILTERS.MAX_STOCK)}
          />
        </RangeWrapper>
      </FilterColumn>
    )
  }
}
