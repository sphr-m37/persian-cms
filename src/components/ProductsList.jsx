import React, { useEffect, useState } from 'react'
// components
import { Button, DeleteModal, DetailModal, ErrorMsg, Products } from '../index'
// axios
import axios from 'axios'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../index'
import { useInput } from '../hooks/useInput'

export const ProductsList = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const [currentProduct, setCurrentProduct] = useState({})
    const [showِDeleteModal, setShowDeleteModal] = useState(false)
    const [showِDetailModal, setShowDetailModal] = useState(false)
    const handleDeleteModal = () => setShowDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowDetailModal(prev => !prev)
    const getall = async () => {
        const res = await axios.get('http://luca.iran.liara.ir/:31497/api')
        console.log(res)
    }
    useEffect(() => {
        // getall()
        dispatch(getProducts())
    }, [])

    const deleteProduct = (product) => {
        setCurrentProduct(product)
        handleDeleteModal()
    }



    return (<>
        {products.length > 0 ? <div className='my-2'>
            <table id="table">
                <tr>
                    <th>تصویر</th>
                    <th>عنوان</th>
                    <th>قیمت</th>
                    <th>محبوبیت</th>
                    <th>موجودی</th>
                    <th>فروش</th>
                    <th>تعداد رنگ بندی</th>
                    <th>گزینه ها</th>
                </tr>
                {products.map(product => <tr key={product.id} className='cursor-pointer'>
                    <td >
                        <img className=' w-[60px] h-[60px] mx-auto my-auto' src={product.img} alt="" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.count}</td>
                    <td>{product.popularity}</td>
                    <td>{product.sale}</td>
                    <td>{product.colors}</td>
                    <td>
                        <Button className='text-red-600 hover:opacity-80' onClick={() => deleteProduct(product)}>حذف</Button>
                        <Button className='text-yellow-600 hover:opacity-80 '>ویرایش</Button>
                        <Button className='text-blue-600 hover:opacity-80' >جزئیات</Button>
                    </td>
                </tr>)}
            </table>
        </div>
            :
            <ErrorMsg title={'NO PRODUCT FOUND'} />
        }
        {
            showِDeleteModal && <DeleteModal handleDeleteModal={handleDeleteModal} product={currentProduct} />
        }
    </>

    )
}
