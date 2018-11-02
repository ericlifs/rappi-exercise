import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setSearchTerm } from 'actions/products';

import { SearchByTermWrapper, SearchControl } from './styled';

class SearchByTerm extends React.PureComponent {
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchTerm
  }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(SearchByTerm));