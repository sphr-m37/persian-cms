import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../index'
// comments
import { ErrorMsg, Button, DeleteModal, DetailModal } from '../index'
import { useState } from 'react'


export const UsersList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const { users } = useSelector(state => state.users)

    const [currentUser, setCurrentUser] = useState({})
    const [showِDeleteModal, setShowِDeleteModal] = useState(false)
    const [showِDetailModal, setShowِDetailModal] = useState(false)
    const handleDeleteModal = () => setShowِDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowِDetailModal(prev => !prev)

    const deleteUser = (user) => {
        setCurrentUser(user)
        handleDeleteModal()
    }

    const showDetailHandle = (user) => {
        setCurrentUser(user)
        handleDetailModal()
    }

    return (
        <div>
            {users.length < 1 ? <ErrorMsg title={'NO PTODUCT FOUND'} /> :
                <div className='bg-gray-400 rounded-md p-2 mt-2 overflow-auto'>
                    <table id="table">
                        <tr>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>شماره تماس</th>
                            <th>امتیاز</th>
                            <th>گزینه ها</th>
                        </tr>
                        {users.map(user => <tr key={user?.id}>
                            <td>{user?.firstname}</td>
                            <td>{user?.lastname}</td>
                            <td>{user?.phone}</td>
                            <td >{user?.score}</td>
                            <td className='flex justify-center'>
                                <Button className='text-red-600 hover:opacity-80' onClick={() => deleteUser(user)}>حذف</Button>
                                <Button className='text-yellow-600 hover:opacity-80'>ویرایش</Button>
                                <Button className='text-blue-600 hover:opacity-80'
                                    onClick={() => showDetailHandle(user)}
                                >جزئیات</Button>
                            </td>
                        </tr>)}
                    </table>


                    {showِDeleteModal && <DeleteModal user={currentUser} getUsers={getUsers}
                        handleDeleteModal={handleDeleteModal} />}

                    {showِDetailModal && <DetailModal user={currentUser}
                        handleDetailModal={handleDetailModal} />}
                    
                    
                </div >
            }
        </div>
    )
}
