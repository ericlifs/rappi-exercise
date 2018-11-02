import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { minValue, maxValue, minStock, maxStock, availability } from 'config/filters';
import { setFilterFunction, setSortMethod, clearFilters } from 'actions/products';

import { FilterBarWrapper, FilterColumn, RangeWrapper, RangeInput, Title, CheckboxInput } from './styled';

class FilterBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      minPrice: '',
      maxPrice: '',
      minStock: '',
      maxStock: '',
      availability: false
    };

    this.onToggleOpened = this.onToggleOpened.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        opened: false,
        minPrice: '',
        maxPrice: '',
        minStock: '',
        maxStock: '',
        availability: false
      }, () => this.props.clearFilters())
    }
  }

  onToggleOpened() {
    this.setState({
      opened: !this.state.opened
    })
  }

  onFieldChange(value, field) {
    switch (field) {
      case 'minPrice':
        this.props.setFilterFunction('minPrice', minValue(value));
        break;

      case 'maxPrice':
        this.props.setFilterFunction('maxPrice', maxValue(value));
        break;

      case 'minStock':
        this.props.setFilterFunction('minStock', minStock(value));
        break;

      case 'maxStock':
        this.props.setFilterFunction('maxStock', maxStock(value));
        break;

      default:
        this.props.setFilterFunction('availability', availability(value));
        break;
    }

    this.setState({
      [field]: value
    })
  }

  getPriceFilter() {
    return (
      <FilterColumn>
        Rango de precio
        <RangeWrapper>
          <RangeInput value={this.state.minPrice} onChange={(ev) => this.onFieldChange(ev.target.value, 'minPrice')}/>
          Hasta
          <RangeInput value={this.state.maxPrice} onChange={(ev) => this.onFieldChange(ev.target.value, 'maxPrice')}/>
        </RangeWrapper>
      </FilterColumn>
    )
  }

  getStockFilter() {
    return (
      <FilterColumn>
        Cantidad en stock
        <RangeWrapper>
          <RangeInput value={this.state.minStock} onChange={(ev) => this.onFieldChange(ev.target.value, 'minStock')}/>
          Hasta
          <RangeInput value={this.state.maxStock} onChange={(ev) => this.onFieldChange(ev.target.value, 'maxStock')}/>
        </RangeWrapper>
      </FilterColumn>
    )
  }

  getAvailabilityFilter() {
    return (
      <FilterColumn row>
        Con disponibilidad
        <CheckboxInput
          name='availability'
          type='checkbox'
          checked={this.state.availability}
          onChange={(ev) => this.onFieldChange(ev.target.checked, 'availability')}
        />
      </FilterColumn>
    );
  }

  render() {
    return (
      <FilterBarWrapper opened={this.state.opened}>
        <Title onClick={this.onToggleOpened}>Filtrar</Title>
        {this.getAvailabilityFilter()}
        {this.getPriceFilter()}
        {this.getStockFilter()}
      </FilterBarWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSortMethod,
    setFilterFunction,
    clearFilters
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(FilterBar));