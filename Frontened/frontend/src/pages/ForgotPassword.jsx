
import { useState } from "react";
//const navigate = useNavigate()
//import { Link, useNavigate } from 'react-router-dom'
import { forgotPassword } from '../services/user'

 export function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement logic for handling forgot password (e.g., send reset password email)
    console.log("Forgot Password clicked");
    console.log("Email:", email); // You can use the entered email to send reset password instructions
  };

  return (
    <div className="container">
    <h2 className="mt-5 mb-3">Forgot Password</h2>
    <p>Please enter your email to reset your password.</p>
    <div className="input-group mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleForgotPassword}>Reset Password</button>>
    </div>
    </div>
  );
}
export default ForgotPassword;