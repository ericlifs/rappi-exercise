import React from 'react'

import CategoryItem from './CategoryItem';

import info from 'data/categories.json'

import { CategoriesMenuWrapper, CategoriesMenuToggler, CategoriesOptionsWrapper, CategoriesMenuTogglerWrapper } from './styled';

export default class CategoriesMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.toggleCategoriesMenu = this.toggleCategoriesMenu.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        opened: false
      })
    }
  }

  toggleCategoriesMenu() {
    this.setState({
      opened: !this.state.opened
    }, () => {
      this.props.setMenuOpened(this.state.opened)
    });
  }

  render() {
    const buttonText = this.state.opened ? 'X' : '>>';

    return (
      <CategoriesMenuWrapper opened={this.state.opened}>
        <CategoriesMenuTogglerWrapper>
          <CategoriesMenuToggler onClick={this.toggleCategoriesMenu}>
            {buttonText}
          </CategoriesMenuToggler>
        </CategoriesMenuTogglerWrapper>
        <CategoriesOptionsWrapper>
          {info.categories.map(category => (
            <CategoryItem key={category.id} category={category}/>
          ))}
        </CategoriesOptionsWrapper>
      </CategoriesMenuWrapper>
    )
  }
}