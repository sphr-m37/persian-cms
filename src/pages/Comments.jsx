import React, { useEffect, useState } from 'react'
// components
import { Button, DeleteModal, DetailModal, ErrorMsg } from '../index'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../index'
// axios
import axios from 'axios'
// toastify
import { toast, ToastContainer } from 'react-toastify'
export const Comments = () => {
  let { comments } = useSelector(state => state.comments)
  comments = comments.reverse()
  const dispatch = useDispatch()
  const notif = (msg) => toast(msg)
  useEffect(() => {
    dispatch(getComments())
  }, [])
  const [currentComment, setCurrentComment] = useState({})
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDetailModal = () => setShowDetailModal(prev => !prev)
  const handleDeleteModal = () => setShowDeleteModal(prev => !prev)
  const confirmComment = async () => {
    const res = await axios.patch(`comments/${currentComment.id}`, { isAccept: 1 })
    if (res.status == 200) {
      handleDetailModal()
      dispatch(getComments())
      notif('کامنت با موفقیت تایید شد')
    }
  }
  const rejectComment = async () => {
    const res = await axios.patch(`comments/${currentComment.id}`, { isAccept: 0 })
    if (res.status == 200) {
      handleDetailModal()
      dispatch(getComments())
      notif('کامنت با موفقیت رد شد')
    }
  }
  const deleteComment = async () => {
    const res = await axios.delete(`comments/${currentComment.id}`)
    if (res.status == 200) {
      handleDeleteModal()
      dispatch(getComments())
      notif('کامنت با موفقت حذف شد')
    }
  }
  return (
    <div>
      {comments.length ? <div className='bg-gray-400 rounded-md p-2 mt-2 overflow-auto'>
        <table id="table">
          <tr>
            <th>نام کاربر</th>
            <th> نام محصول</th>
            <th>تاریخ</th>
            <th>زمان</th>
            <th>وضعیت</th>
            <th>گزینه ها</th>
          </tr>
          {comments.map(comment => <tr key={comment?.id}>
            <td>{comment?.userID}</td>
            <td>{comment?.productID}</td>
            <td>{comment?.date}</td>
            <td >{comment?.hour}</td>
            <td>{comment?.isAccept ? 'تایید شده' : "در انتظار تایید"}</td>
            <td className='flex justify-center'>
              <Button className='text-red-600 hover:opacity-80'
                onClick={() => {
                  handleDeleteModal()
                  setCurrentComment(comment)
                }}>حذف</Button>
              <Button className='text-blue-600 hover:opacity-80'
                onClick={() => {
                  setShowDetailModal(true)
                  setCurrentComment(comment)
                }}
              >خواندن {comment?.isAccept ? " / رد کردن " : " / تایید"}</Button>
            </td>
          </tr>)}
        </table>
      </div> : <ErrorMsg title='کانتی موجود نیست' />}
      {showDetailModal && <DetailModal comment={currentComment}
        handleDetailModal={handleDetailModal}
        confirmComment={confirmComment}
        rejectComment={rejectComment}
        title='کامنت'>
        <p>
          {currentComment?.body}
        </p>
      </DetailModal>}
      {showDeleteModal && <DeleteModal
        title={`کامنت ${currentComment.userID} `}
        handleDeleteModal={handleDeleteModal}
        deleteMethod={deleteComment} />}
      <ToastContainer />
    </div>
  )
}
