import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProductsByCategory } from 'actions/products';

import { CategoryItemWrapper, CategoryName } from './styled';

class CategoryItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  onCategoryClick() {
    const { category, fetchProductsByCategory } = this.props;

    if (category.sublevels) {
      return this.setState({
        opened: !this.state.opened
      });
    }

    return fetchProductsByCategory(category.id);
  }

  getSublevelItems() {
    const { category } = this.props;

    return (category.sublevels || []).map(subLevel => (
      <CategoryItem key={subLevel.id} fetchProductsByCategory={this.props.fetchProductsByCategory} category={subLevel} sublevel/>
    ));
  }

  render() {
    const { category, sublevel } = this.props;
    const { opened } = this.state;

    const arrow = !category.sublevels ? '' : opened ? '< ' : '> ';

    return (
      <CategoryItemWrapper sublevel={sublevel}>
        <CategoryName onClick={this.onCategoryClick}>{arrow}{category.name}</CategoryName>
        {this.state.opened && this.getSublevelItems()}
      </CategoryItemWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchProductsByCategory
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(CategoryItem)
