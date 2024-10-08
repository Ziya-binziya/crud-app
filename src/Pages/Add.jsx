import React, { useState } from 'react'
import { addUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Add() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const users = useSelector((state) => state.users)


  const navigate = useNavigate()


  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email, contact }))
    navigate('/')

  }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>


        <div className='border shadow  p-5'>
          <h4 className='text-center text-primary'>New User</h4>

          <form action="" onSubmit={handleSubmit} className='form-control'>


            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' required placeholder='enter name' onChange={(e) => { setName(e.target.value) }} />


            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' required placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} />


            <label htmlFor="contact">Contact:</label>
            <input type="text" name='name' className='form-control' required placeholder='enter contact' onChange={(e) => { setContact(e.target.value) }} />
            <br />
            <button className='btn btn-primary border shadow'>ADD</button>
          </form>

        </div>
      </div>

    </>
  )
}

export default Add
