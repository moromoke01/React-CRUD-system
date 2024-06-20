import React from 'react'
import './UserStyling.css'


const UsersList = ({users,onEdit, onDelete}) => {
  
  return (
    <div className='userList-page'>
      <h2>Users Record Table</h2>
       <table className="table border-collapse border border-slate-400">
        <thead>
        <tr>
          <th className="border border-slate-300 px-5">Name</th>
          <th className="border border-slate-300 px-5">Email</th>
          <th className="border border-slate-300 px-5">Gender</th>
          <th className="border border-slate-300 px-5">Contact</th>
          <th className="border border-slate-300 px-5">Age</th>
          <th className="border border-slate-300 px-5">Address</th>
          <th className="border border-slate-300 px-5">Action</th>
        </tr>
        </thead>
        <tbody>
        

          {users.map((userData) => (
            <tr key={userData.id}>
            <td >{userData.name}</td>
            <td >{userData.email}</td>
            <td >{userData.gender}</td>
            <td >{userData.contact}</td>
            <td >{userData.age}</td>
            <td >{userData.address}</td>
            
            <td className='btn-flex'>
              <button onClick={()=> onEdit(userData.id)} className='edit-btn'>Edit</button>
              <button onClick={()=> onDelete(userData.id)} className='del-btn'>Delete</button>
            </td>
    
            </tr>
          ))}
          
        
        </tbody>
       </table>
    </div>
  )
}

export default UsersList
