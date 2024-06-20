import React from 'react'
import {Formik, Form, Field, ErroMessage} from 'formik';
import * as Yup from 'Yup'

  const UserSchema = Yup.object().shape({
    name: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required'),
    gender: Yup.string().required('Field is required'),
    contact: Yup.number().required('Field is required'),
    age: Yup.number().required('Field is required'),
    address: Yup.string().required('Field is required'),

  })

const UserAuthForm = ({selectedUser, onSave}) => {
  return (
    <div>
      <h2>User Data Form</h2>

      <Formik
      initialValues={{name:'', email:'',gender:'',contact:234806578934, age: 0,address:''}}
      validationSchema={UserSchema}
      onSubmit={(values, {setSubmitting})=>{
         alert("Data successfully submitted");
         setSubmitting(false);   
      }}>
 
       {({isSubmitting}) => (
         <Form>
            <div>
                <label htmlFor="fullName">fullName</label>
                <Field type="text"
                       name="name"/>
                       <ErroMessage name='name' component='div'/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <Field type="email"
                       name="email"/>
                       <ErroMessage name='email' component='div'/>
            </div>

            <div>
                <label htmlFor="gender">gender</label>
                <Field type="text"
                       name="gender"/>
                       <ErroMessage name='gender' component='div'/>
            </div>

            <div>
                <label htmlFor="contact">contact</label>
                <Field type="text"
                       name="contact"/>
                       <ErroMessage name='contact' component='div'/>
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <Field type="text"
                       name="age"/>
                       <ErroMessage name='age' component='div'/>
            </div>
            <div>
                <label htmlFor="Address">Address</label>
                <Field type="text"
                       name="Address"/>
                       <ErroMessage name='Address' component='div'/>
            </div>
            
            <button type='submit' disabled={isSubmitting}>Submit</button>
         </Form>
       )}
      </Formik>
    </div>
  )
}

export default UserAuthForm
