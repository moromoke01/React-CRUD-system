import React, {useEffect, useRef} from 'react'
import './UserStyling.css'

const UserForm = ({selectedUser, onSave}) => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const contactRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);
    

  useEffect(() => {
    if (selectedUser){
      nameRef.current.value = selectedUser.name;
      emailRef.current.value = selectedUser.email;
      genderRef.current.value = selectedUser.gender;
      contactRef.current.value = selectedUser.contact;
      ageRef.current.value = selectedUser.age;
      addressRef.current.value = selectedUser.address;
    }else{
      nameRef.current.value = '';
      emailRef.current.value = '';
      genderRef.current.value = '';
      contactRef.current.value = '';
      ageRef.current.value = '';
      addressRef.current.value = '';
    }
  }, [selectedUser]);


  //validate form
  const validateForm = () =>{

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const gender = genderRef.current.value.trim();
    const contact = contactRef.current.value.trim();
    const age = ageRef.current.value.trim();
    const address = addressRef.current.value.trim();

    if(!name){
      alert('Name is required');
      return false;
    }
if (!email || !/\S+@\S+\.\S+/.test(email)){
  alert('Enter valid email');
  return false;
}

if(!gender){
  alert('Gender is required');
  return false;
}

if(!contact || !/^\d+$/.test(contact)){
 alert('Enter valid contact number');
  return false;
}

if (!age || !/^\d+$/.test(age) ) {
  alert('Enter valid age');
  return false;
}

if (!address) {
  alert('Address is required');
  return false;
}

    return true;
  };


    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!validateForm()) return;
        
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const gender = genderRef.current.value;
        const contact = contactRef.current.value;
        const age = ageRef.current.value;
        const address = addressRef.current.value;


        const userData ={
          id: selectedUser ? selectedUser.id : Date.now(),
          name,
          email,
          gender,
          contact,
          age,
          address,
        };
        onSave(userData);
        

        if (onSave) {
          alert('User Data saved');
        }
        
        
      nameRef.current.value = '';
      emailRef.current.value = '';
      genderRef.current.value = '';
      contactRef.current.value = '';
      ageRef.current.value = '';
      addressRef.current.value = '';
    };


  return (
    <div className='userForm'>
      <form onSubmit={handleSubmit}>
        <h2>{selectedUser ? 'Edit User Data' : 'Create User Data'}</h2>

        <div className='form-input'>
            <input type="text"
                   name='name'
                    ref={nameRef}
                    placeholder='Enter Username'
                   />
        </div>

        <div className='form-input'>
            <input type="email"
                   name='email'
                   ref={emailRef}
                   placeholder='Enter Email'
                   />
        </div>

        <div className='form-input'>
            <input type="number"
                   name='contact'
                   ref={contactRef}
                   placeholder='Enter Contact'
                   />
        </div>

       

        <div className='form-input'>
            <input type="text"
                   name='gender'
                   ref={genderRef}
                   placeholder='Enter Gender'
                   />
        </div>

        <div className='form-input'>
            <input type="number"
                   name='age'
                   ref={ageRef}
                   placeholder='Enter Age'
                   />
        </div>

        <div className='form-input'>
            <input type="text"
                   name='address'
                   ref={addressRef}
                   placeholder='Enter Address'
                   />
        </div>

        <button className="submit" type='submit'>{selectedUser ? 'Save Changes' : 'Create User'}</button>
      </form>
    </div>
  )
}

export default UserForm
