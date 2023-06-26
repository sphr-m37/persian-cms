import React, { useEffect } from 'react'
// components
import { ErrorMsg } from '../index'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../index'
export const Orders = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const { orders } = useSelector(state => state.orders)
  return (
    <div>
      {orders.length ?
        <table id='table'>
          {/* ... */}
        </table> : <ErrorMsg title='سفارشی موجود نیست' />}
    </div>
  )
}
