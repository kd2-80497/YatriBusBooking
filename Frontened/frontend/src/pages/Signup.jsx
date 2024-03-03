
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signupUser } from "../services/user";

export function Signup(){
const[firstName,setFirstName]=useState('');
const[lastName,setLastName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const [confirmPassword, setConfirmPassword] = useState('')
const[PhoneNumber,setPhoneNumber]=useState('');
   const navigate = useNavigate();
   const onSignup=async()=>{
    if (firstName.length === 0) {
        toast.warn('enter first name')
      } else if (lastName.length === 0) {
        toast.warn('enter last name')
      } else if (email.length === 0  ) {
        toast.warn('enter email')
      } else if (password.length === 0) {
        toast.warn('enter password')
      } else if (confirmPassword.length === 0) {
        toast.warn('enter confirm password')
      } else if (password !== confirmPassword) {
        toast.warn('password does not match')
      }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        toast.error("Please enter valid Email");}
      else{
        const result = await signupUser(firstName,lastName,email,password,PhoneNumber)
        
        if(result['status']!='error'){
            toast.success('Successfully Registered The User')
            navigate('/')
        }
        else{
            toast.error(result['error'])
        }
      }
   }
   return (<>
    <h1 className='title' >Sign Up</h1>
    <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='abc@test.com'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
3

            <div className='mb-3'>
              <label htmlFor=''>Phone Number</label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type='number'
                placeholder=''
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Already got an account? <Link to='/'>Signin here</Link>
              </div>
              <button onClick={onSignup} className='btn btn-primary mt-2'>
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>)

}

export default Signup ;