import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { EditModal, getUsers, useInput } from '../index'
// comments
import { ErrorMsg, Button, DeleteModal, DetailModal } from '../index'
import { useState } from 'react'
import axios from 'axios'

// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto p-1
`
//  //

export const UsersList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const { users } = useSelector(state => state.users)

    const [currentUser, setCurrentUser] = useState({})
    const [showِDeleteModal, setShowِDeleteModal] = useState(false)
    const [showِDetailModal, setShowِDetailModal] = useState(false)
    const [showِEditlModal, setShowEditlModal] = useState(false)
    const handleDeleteModal = () => setShowِDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowِDetailModal(prev => !prev)
    const handleEditModal = () => setShowEditlModal(prev => !prev)

    const [firstname, firstnameBind, resetFirstname] = useInput(currentUser.firstname)
    const [lastname, lastNameBind, resetLastName] = useInput(currentUser.lastname)
    const [username, usernameBind, resetUsername] = useInput(currentUser.username)
    const [password, passwordBind, resetPassword] = useInput(currentUser.password)
    const [phone, phoneBind, resetPhone] = useInput(currentUser.phone)
    const [city, cityBind, resetcity] = useInput(currentUser.city)
    const [email, emailBind, resetemail] = useInput(currentUser.email)
    const [address, addressBind, resetAddress] = useInput(currentUser.address)
    const [score, scoreBind, resetScore] = useInput(currentUser.score)
    const [buy, buyBind, resetBuy] = useInput(currentUser.buy)

    const deleteUser = (user) => {
        setCurrentUser(user)
        handleDeleteModal()
    }

    const showDetailHandle = (user) => {
        setCurrentUser(user)
        handleDetailModal()
    }
    const showِEditlModalHandle = (user) => {
        setShowEditlModal(prev => !prev)
        setCurrentUser(user)
    }

    const editUser = async () => {
        const editedUser = {
            firstname,
            lastname,
            username,
            password,
            phone,
            city,
            email,
            address,
            score,
            buy,
        }
        const res = await axios.patch(`users/${currentUser.id}`, editedUser)
        if (res.status == 200) {
            alert(`${currentUser.firstname} با موفقیت ویرایش شد`)
            handleEditModal()
            dispatch(getUsers())
        }
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
                                <Button className='text-yellow-600 hover:opacity-80'
                                    onClick={() => showِEditlModalHandle(user)}>ویرایش</Button>
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

                    {
                        showِEditlModal && <EditModal user={currentUser} handleEditModal={handleEditModal} edit={editUser}
                        >
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'>
                                    <span>
                                        ویرایش {currentUser.firstname}
                                    </span>
                                </h1>
                                <form className='w-full' >

                                    <div className={formGroupStyel}>
                                        <span>نام :</span>
                                        <input className={inputstyle}
                                            {...firstnameBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>نام خانوداگی :</span>
                                        <input className={inputstyle}
                                            {...lastNameBind} type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>نام کاربری :</span>
                                        <input className={inputstyle}
                                            {...usernameBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span> گذرواژه :</span>
                                        <input className={inputstyle}
                                            {...passwordBind}

                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>ایمیل :</span>
                                        <input className={inputstyle}
                                            {...emailBind}

                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>شماره تماس  :</span>
                                        <input className={inputstyle}
                                            {...phoneBind}

                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span> شهر :</span>
                                        <input className={inputstyle}
                                            {...cityBind}
                                            type="text"
                                        />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>مجموع خرید :</span>
                                        <input className={inputstyle}
                                            {...buyBind}
                                            type="text"
                                        />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span> امتیاز :</span>
                                        <input className={inputstyle}
                                            {...scoreBind}
                                            type="text"
                                        />
                                    </div>

                                </form>
                            </div>
                        </EditModal>
                    }


                </div >}
        </div>
    )
}
