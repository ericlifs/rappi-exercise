import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FILTERS from 'config/filters';
import { setFilterFunction } from 'actions/products'
import { availability } from 'helpers/filters';

import { CheckboxInput, FilterColumn } from '../styled';

class AvailabilityFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      available: false,
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(ev) {
    const available = ev.target.checked;
    this.props.setFilterFunction(FILTERS.AVAILABILITY, availability(available));

    this.setState({
      available
    })
  }

  render() {
    return (
      <FilterColumn row>
        Disponibilidad
        <CheckboxInput
          name='availability'
          type='checkbox'
          checked={this.state.available}
          onChange={this.onFieldChange}
        />
      </FilterColumn>
    )
  }
}

const mapDispatchToProps = {
  setFilterFunction
};

export default withRouter(connect(null, mapDispatchToProps)(AvailabilityFilter));