import React from 'react'

import { CategoryItemWrapper, CategoryName } from './styled';

export default class CategoryItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.toggleOpened = this.toggleOpened.bind(this);
  }

  toggleOpened() {
    this.setState({
      opened: !this.state.opened
    });
  }

  getSublevelItems() {
    const { category } = this.props;

    return (category.sublevels || []).map(subLevel => (
      <CategoryItem key={subLevel.id} category={subLevel} sublevel/>
    ));
  }

  render() {
    const { category, sublevel } = this.props;
    const { opened } = this.state;

    const arrow = !category.sublevels ? '' : opened ? '< ' : '> ';

    return (
      <CategoryItemWrapper sublevel={sublevel}>
        <CategoryName onClick={this.toggleOpened}>{arrow}{category.name}</CategoryName>
        {this.state.opened && this.getSublevelItems()}
      </CategoryItemWrapper>
    );
  }
}
