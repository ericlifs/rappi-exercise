import React from 'react'

import FILTERS from 'config/filters'
import { maxValue, minValue } from 'helpers/filters'

import { FilterColumn, RangeInput, RangeLabel, RangeWrapper } from '../styled'

export default class PriceFilter extends React.PureComponent {
  state = {
    [FILTERS.MIN_VALUE]: '',
    [FILTERS.MAX_VALUE]: ''
  }

  static getDerivedStateFromProps(props) {
    if (props.filters) {
      return {
        [FILTERS.MIN_VALUE]: props.filters[FILTERS.MIN_VALUE] || '',
        [FILTERS.MAX_VALUE]: props.filters[FILTERS.MAX_VALUE] || ''
      }
    }

    return null
  }

  onFieldChange(field, ev) {
    const { value } = ev.target

    switch (field) {
      case FILTERS.MIN_VALUE:
        this.props.setFilterFunction(FILTERS.MIN_VALUE, minValue(value), value)
        break

      default:
        this.props.setFilterFunction(FILTERS.MAX_VALUE, maxValue(value), value)
        break
    }
  }

  render() {
    return (
      <FilterColumn>
        <RangeLabel bold>Precio</RangeLabel>
        <RangeWrapper>
          <RangeLabel>Desde</RangeLabel>
          <RangeInput
            value={this.state[FILTERS.MIN_VALUE]}
            onChange={this.onFieldChange.bind(this, FILTERS.MIN_VALUE)}
          />
          <RangeLabel>Hasta</RangeLabel>
          <RangeInput
            value={this.state[FILTERS.MAX_VALUE]}
            onChange={this.onFieldChange.bind(this, FILTERS.MAX_VALUE)}
          />
        </RangeWrapper>
      </FilterColumn>
    )
  }
}
