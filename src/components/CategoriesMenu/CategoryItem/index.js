import React, { Fragment } from 'react'

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

  getSubLevelItems() {
    const { category } = this.props;

    return (category.sublevels || []).map(subLevel => (
      <CategoryItem key={subLevel.id} category={subLevel}/>
    ));
  }

  render() {
    const { category } = this.props;

    return (
      <Fragment>
        <label onClick={this.toggleOpened}>{category.name}</label>
        {this.state.opened && this.getSubLevelItems()}
      </Fragment>
    );
  }
}
