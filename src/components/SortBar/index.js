import React from 'react';

import { SortBarWrapper, SortColumn, SearchColumn, SearchControl } from './styled';

export default class SortBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <SortBarWrapper>
        <SortColumn>
          Ordenar por
        </SortColumn>
        <SearchColumn>
          Buscar producto
          <SearchControl onChange={this.onSearchChange}/>
        </SearchColumn>
      </SortBarWrapper>
    );
  }
}
