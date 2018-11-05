import React from 'react'

import PriceFilterContainer from 'components/containers/PriceFilter'
import AvailabilityFilterContainer from 'components/containers/AvailabilityFilter'
import StockFilterContainer from 'components/containers/StockFilter'

import { FilterBarWrapper, Title } from './styled'

export default class FilterBar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }

    this.onToggleOpened = this.onToggleOpened.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState(
        {
          opened: false
        },
        () => this.props.clearFilters()
      )
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
        <AvailabilityFilterContainer />
        <PriceFilterContainer />
        <StockFilterContainer />
      </FilterBarWrapper>
    )
  }
}
