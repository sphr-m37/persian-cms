import React from 'react'
import { ErrorMsg } from '../index'
import axios from 'axios'
import { useEffect } from 'react'

export const Comments = () => {
  // const getComments = async () => {
  //   const res = await axios.get(`http://localhost:3000/comments`)
  //   console.log(res)
  // }
  // useEffect(() => {
  //   getComments()
  // }, [])
  return (
    <div>
      <ErrorMsg msg='no comment found' />
    </div>
  )
}
