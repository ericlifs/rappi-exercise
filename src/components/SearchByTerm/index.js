import React from 'react'

import { SearchByTermWrapper, SearchControl } from './styled'

export default class SearchByTerm extends React.PureComponent {
  state = {
    term: ''
  }

  static getDerivedStateFromProps(props) {
    return {
      term: props.searchTerm || ''
    }
  }

  onSearchChange(event) {
    this.props.setSearchTerm(event.target.value)
  }

  render() {
    return (
      <SearchByTermWrapper opened={this.state.opened}>
        Buscar producto por nombre
        <SearchControl value={this.state.term} onChange={this.onSearchChange.bind(this)} />
      </SearchByTermWrapper>
    )
  }
}
