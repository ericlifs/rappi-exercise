import React from 'react'

import FILTERS from 'config/filters'
import { availability } from 'helpers/filters'

import { CheckboxInput, FilterColumn } from '../styled'

export default class AvailabilityFilter extends React.PureComponent {
  state = {
    available: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        available: false
      })
    }
  }

  onFieldChange(ev) {
    const available = ev.target.checked
    this.props.setFilterFunction(FILTERS.AVAILABILITY, availability(available))

    this.setState({
      available
    })
  }

  render() {
    return (
      <FilterColumn row>
        Disponibilidad
        <CheckboxInput
          name="availability"
          type="checkbox"
          checked={this.state.available}
          onChange={this.onFieldChange.bind(this)}
        />
      </FilterColumn>
    )
  }
}
