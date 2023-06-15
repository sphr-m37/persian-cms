import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../index'
// comments
import { ErrorMsg, Button, DeleteModal, DetailModal } from '../index'


export const UsersList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const { users } = useSelector(state => state.users)
    return (
        <div>
            {users.length < 1 ? <ErrorMsg title={'NO PTODUCT FOUND'} /> :
                <div className='bg-gray-400 rounded-md p-2 mt-2 overflow-auto'>
                    <table id="table">
                        <tr>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>شماره تماس</th>
                            <th>امتیاز</th>
                            <th>نام کاربری</th>
                            <th>گذرواژه</th>
                            <th>گزینه ها</th>
                        </tr>
                        {users.map(user => <tr key={user?.id}>
                            <td>{user?.firsname}</td>
                            <td>{user?.lastname}</td>
                            <td>{user?.email}</td>
                            <td>{user?.phone}</td>
                            <td >{user?.score}</td>
                            <td >{user?.username}</td>
                            <td>{user?.password}</td>
                            <td className='flex justify-center'>
                                <Button className='text-red-600 hover:opacity-80' >حذف</Button>
                                <Button className='text-yellow-600 hover:opacity-80 '>ویرایش</Button>
                                <Button className='text-blue-600 hover:opacity-80'>جزئیات</Button>
                            </td>
                        </tr>)}
                    </table>

                    {/* {showِDeleteModal && <DeleteModal
                    handleClose={handleDeleteModal} />}
                {showِDetailModal && <DetailModal
                    handleClose={handleDetailModal} />} */}
                </div >}
        </div>
    )
}
