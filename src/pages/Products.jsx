import React, { useState } from 'react'
import { ErrorMsg, ProductsList } from '../index'
import { AddNewProduct } from '../index'

export const Products = () => {
  const [products, setProducts] = useState([1])
  return (
    <div>
      <AddNewProduct />
      {products.length > 0 ?
        <ProductsList />
        :
        <ErrorMsg msg='no product found' />
      }
    </div>
  )
}
