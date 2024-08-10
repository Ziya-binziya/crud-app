import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dltUser } from '../../redux/userSlice';








function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()

  const deleteUser = (id) => {
    dispatch(dltUser({ id: id }))
  }

  return (
    <>

        <div className='w-100 p-5' >
      <h4 className='text-primary my-3'>USER DETAILS</h4>
        
      <table className='table table-bordered table-dark border shadow' >
      <thead>
        <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {
                users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <button className='btn border'><i className="fa-solid fa-pencil"></i></button>

                      </Link>
                      <button onClick={() => deleteUser(item.id)} className='btn  border ms-1 '><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>


                ))
              }
     </tbody>     

    </table>
    <Link to={'/add'}>
            <button className='btn btn-primary border text-light '>Create NewUser</button>

          </Link>
    </div>
        
    
    </>
  )
}

export default Home
