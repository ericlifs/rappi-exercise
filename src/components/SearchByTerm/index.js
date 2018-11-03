import React from 'react';

import { SearchByTermWrapper, SearchControl } from './styled';

export default class SearchByTerm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        term: '',
      });
    }
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    }, () => this.props.setSearchTerm(this.state.term));
  }

  render() {
    return (
      <SearchByTermWrapper opened={this.state.opened}>
        Buscar producto por nombre
        <SearchControl onChange={this.onSearchChange}/>
      </SearchByTermWrapper>
    );
  }
}
