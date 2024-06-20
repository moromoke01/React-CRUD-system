import React, {useState} from 'react'
import UserForm from './UserForm';
import UsersList from './UsersList';

const UserController = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSaveUser = (user) =>{
        if(selectedUser){
            setUsers(users.map((EachUser) => (EachUser.id === user.id ? user : EachUser)))
        }else{
            setUsers([...users, user]);
        }
        setSelectedBook(null);

    }

    const handleEditUser = (id)=>{
        const user = users.find((user)=> user.id === id)
        setSelectedUser(user);
       
    }

    const handleDeleteUser = (id) =>{
     setUsers(users.filter((user) => user.id !== id ));
    
    }
  return (
    <div>
      <UserForm
         onSave={handleSaveUser} 
         selectedUser={selectedUser}
      />

      <UsersList 
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  )
}

export default UserController
