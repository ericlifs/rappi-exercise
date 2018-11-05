import React from 'react'

import Page from 'components/Page'
import CategoriesMenuContainer from 'components/containers/CategoriesMenu'
import ProductsListContainer from 'components/containers/ProductsList'

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchStaredProducts(5)
  }

  render() {
    const { staredProducts } = this.props

    return (
      <Page direction="row" withHeader>
        <CategoriesMenuContainer />
        <ProductsListContainer products={staredProducts} title="Productos destacados" fullwidth />
      </Page>
    )
  }
}
