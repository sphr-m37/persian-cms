import React from 'react'
// components
import { ErrorMsg, ProductsList, AddNewItem } from '../index'


export const Products = () => {
  return (
    <>
      <AddNewItem text={'افزودن محصول'} />
      <ProductsList />
    </>
  )
}
