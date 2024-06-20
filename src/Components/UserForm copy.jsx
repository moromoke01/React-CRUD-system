import React, {useEffect, useState} from 'react'
import './UserStyling.css'

const UserForm = ({selectedUser, onSave}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState(0);
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    
    useEffect(()=>{
        if (selectedUser) {
            setName(selectedUser.name)
            setEmail(selectedUser.email)
            setGender(selectedUser.gender)
            setContact(selectedUser.contact)
            setAge(selectedUser.age)
            setAddress(selectedUser.address)
            
        }else{
            setName('')
            setEmail('')
            setGender('')
            setContact('')
            setAge('')
            setAddress('')

        }
    }, [selectedUser]);



    const handleSubmit = (e) =>{
        e.preventDefault();
        onSave({id: selectedUser ? selectedUser.id: Date.now(), name, email, gender, contact, age, address})
        // localStorage.setItem({name, email, gender, contact, age, address});

        alert('User Data saved');
        

            setName('')
            setEmail('')
            setGender('')
            setContact('')
            setAge('')
            setAddress('')
    }

  return (
    <div className='userForm'>
      <form onSubmit={handleSubmit}>
        <h2>{selectedUser ? 'Edit User Data' : 'Create User Data'}</h2>

        <div className='form-input'>
            <input type="text"
                   name='name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder='Enter Username'
                   />
        </div>

        <div className='form-input'>
            <input type="email"
                   name='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder='Enter Email'
                   />
        </div>

        <div className='form-input'>
            <input type="number"
                   name='contact'
                   value={contact}
                   onChange={(e) => setContact(e.target.value)}
                   placeholder='Enter Contact'
                   />
        </div>

       

        <div className='form-input'>
            <input type="text"
                   name='gender'
                   value={gender}
                   onChange={(e) => setGender(e.target.value)}
                   placeholder='Enter Gender'
                   />
        </div>

        <div className='form-input'>
            <input type="number"
                   name='age'
                   value={age}
                   onChange={(e) => setAge(e.target.value)}
                   placeholder='Enter Age'
                   />
        </div>

        <div className='form-input'>
            <input type="text"
                   name='address'
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   placeholder='Enter Address'
                   />
        </div>

        <button className="submit" type='submit'>{selectedUser ? 'Save Changes' : 'Create User'}</button>
      </form>
    </div>
  )
}

export default UserForm
