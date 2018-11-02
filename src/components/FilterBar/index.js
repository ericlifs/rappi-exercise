import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setFilterFunction, setSortMethod, clearFilters } from 'actions/products';
import PriceFilter from './PriceFilter';
import AvailabilityFilter from './AvailabilityFilter';
import StockFilter from './StockFilter';

import { FilterBarWrapper, Title } from './styled';

class FilterBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.onToggleOpened = this.onToggleOpened.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        opened: false,
      }, () => this.props.clearFilters())
    }
  }

  onToggleOpened() {
    this.setState({
      opened: !this.state.opened
    })
  }

  render() {
    return (
      <FilterBarWrapper opened={this.state.opened}>
        <Title onClick={this.onToggleOpened}>Filtrar</Title>
        <AvailabilityFilter/>
        <PriceFilter/>
        <StockFilter/>
      </FilterBarWrapper>
    );
  }
}

const mapDispatchToProps = {
  setSortMethod,
  setFilterFunction,
  clearFilters
};

export default withRouter(connect(null, mapDispatchToProps)(FilterBar));