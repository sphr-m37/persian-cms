import React, { useEffect } from 'react'
// components
import { Button, ErrorMsg, supabase, useInput } from '../index'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getDiscounts } from '../index'

import { ToastContainer, toast } from 'react-toastify'
export const Discounts = () => {
  const dispatch = useDispatch()
  const { discounts } = useSelector(state => state.discounts)
  useEffect(() => {
    dispatch(getDiscounts())
  }, [])
  const [amount, discpuntBind, resetDiscount] = useInput('5000')
  const createCode = async () => {
    let code = String(Math.random())
    code = code.split('').slice(-5).join('')
    const newCode = {
      amount, code, status: 1,
    }
    const { error } = await supabase.from(`discounts`).insert(newCode)
    if (!error) {
      dispatch(getDiscounts())
      resetDiscount()
      toast('کد تخفیف با موفقیت ایجاد شد')
    }
  }
  const deleteCode = async id => {
    const { error } = await supabase.from('discounts').delete().eq('id', id)
    if (!error) {
      dispatch(getDiscounts())
      toast('کد تخفیف حذف شد')
    } else {
      toast(error.message)
    }
  }
  const changeStatus = async (id, status) => {
    const { error } = await supabase.from(`discounts`).update({ status: status === 1 ? 0 : 1 }).eq('id', id)
    if (!error) {
      dispatch(getDiscounts())
      toast(`کد تخفیف ${status === 1 ? 'غیرفعال' : 'فعال'} شد`)
    } else {
      toast(error.message)
    }
  }
  return (
    <>
      <div className='w-full flex flex-col bg-white p-4'>
        <label>
          میزان تخفیف : {amount}
        </label>
        <input
          type="range"
          min='0'
          max='100000'
          step='5000'
          {...discpuntBind}
          placeholder='تا 100,000 تومان'
        />
        <Button className='bg-gray-500 text-white'
          onClick={createCode}>
          ایجاد کد تخفیف
        </Button>
      </div>
      {discounts.length ? <table id='table'>
        <thead>
          <th>
            شناسه
          </th>
          <th>
            کد تخفیف
          </th>
          <th>
            وضعیت
          </th>
          <th>
            میزان تخفیف
          </th>
          <th>
            گزینه ها
          </th>
        </thead>
        <tbody>
          {discounts.map(discount => <tr key={discount.id}>
            <td>{discount.id}</td>
            <td>{discount.code}</td>
            <td>{discount.status ? 'فعال' : 'غیرفعال'}</td>
            <td>{discount.amount} تومان</td>
            <td>
              <Button onClick={() => deleteCode(discount.id)}>
                حذف
              </Button>
              <Button className={`bg-gray-500 text-${discount.status ? 'red' : 'green'}-400`} onClick={() => changeStatus(discount.id,
                discount.status)}>
                {discount.status ? 'غیرفعال کردن' : 'فعال کردن'}
              </Button>
            </td>
          </tr>)}
        </tbody>
      </table> : <ErrorMsg title='کد تخفیفی موجود نیست' />}
      <ToastContainer />
    </>
  )
}
