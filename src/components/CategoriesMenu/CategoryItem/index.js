import React from 'react'
import { withRouter } from 'react-router-dom'

import { CategoryItemWrapper, CategoryName } from './styled'

class CategoryItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }

    this.onCategoryClick = this.onCategoryClick.bind(this)
  }

  onCategoryClick() {
    const { category, history } = this.props

    if (category.sublevels) {
      return this.setState({
        opened: !this.state.opened
      })
    }

    history.push(`/category/${category.id}`)
  }

  getSublevelItems() {
    const { category, history } = this.props

    return (category.sublevels || []).map(subLevel => (
      <CategoryItem key={subLevel.id} history={history} category={subLevel} sublevel />
    ))
  }

  render() {
    const { category, sublevel } = this.props
    const { opened } = this.state

    const arrow = !category.sublevels ? '' : opened ? '< ' : '> '

    return (
      <CategoryItemWrapper sublevel={sublevel}>
        <CategoryName onClick={this.onCategoryClick}>
          {arrow}
          {category.name}
        </CategoryName>
        {this.state.opened && this.getSublevelItems()}
      </CategoryItemWrapper>
    )
  }
}

export default withRouter(CategoryItem)
