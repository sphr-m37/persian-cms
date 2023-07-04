import React, { useEffect, useState } from 'react'
// components
import { Button, DeleteModal, DetailModal, ErrorMsg, LOADED, LOADING, supabase } from '../index'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../index'

// toastify
import { toast, ToastContainer } from 'react-toastify'
import { Loader } from '../components/Loader'
export const Comments = () => {
  let { comments, loading } = useSelector(state => state.comments)
  comments = comments.reverse()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComments())
  }, [])
  const [currentComment, setCurrentComment] = useState({})
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDetailModal = () => setShowDetailModal(prev => !prev)
  const handleDeleteModal = () => setShowDeleteModal(prev => !prev)

  const changeStatus = async (status) => {
    dispatch({ type: LOADING })
    handleDetailModal()
    const { error } = await supabase.from('comments').update({ isAccept: status }).eq('id', currentComment.id)
    if (!error) {
      toast('کامنت با موفقیت رد شد')
      dispatch(getComments())
    } else {
      toast(error.message)
    }
  }
  const deleteComment = async () => {
    dispatch({ type: LOADING })
    handleDeleteModal()
    const { error } = await supabase.from('comments').delete().eq('id', currentComment.id)
    if (!error) {
      dispatch(getComments())
      toast('کامنت با موفقت حذف شد')
    } else {
      toast(error.message)
    }
  }
  return (<>
    {loading && <Loader />}
    <div>
      {comments.length ? <div className='bg-gray-400 rounded-md p-2 mt-2 overflow-auto w-full h-full'>
        <table id="table">
          <thead>
            <th>نام کاربر</th>
            <th> نام محصول</th>
            <th>تاریخ</th>
            <th>زمان</th>
            <th>وضعیت</th>
            <th>گزینه ها</th>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div> : <ErrorMsg title='کامنتی موجود نیست' />}
      {showDetailModal && <DetailModal comment={currentComment}
        handleDetailModal={handleDetailModal}
        changeStatus={changeStatus}
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
  </>)
}
