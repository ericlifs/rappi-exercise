import React from 'react'

import FILTERS from 'config/filters'
import { availability } from 'helpers/filters'

import { CheckboxInput, FilterColumn, InputLabel } from '../styled'

export default class AvailabilityFilter extends React.PureComponent {
  state = {
    [FILTERS.AVAILABILITY]: false
  }

  static getDerivedStateFromProps(props) {
    if (props.filters) {
      return {
        [FILTERS.AVAILABILITY]: props.filters[FILTERS.AVAILABILITY] || false
      }
    }

    return null
  }

  onFieldChange(ev) {
    const available = ev.target.checked

    this.props.setFilterFunction(FILTERS.AVAILABILITY, availability(available), available)
  }

  render() {
    return (
      <FilterColumn row>
        <InputLabel>Disponibilidad</InputLabel>
        <CheckboxInput
          name="availability"
          type="checkbox"
          checked={this.state[FILTERS.AVAILABILITY]}
          onChange={this.onFieldChange.bind(this)}
        />
      </FilterColumn>
    )
  }
}
