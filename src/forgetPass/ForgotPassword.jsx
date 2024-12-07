
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.', { position: 'top-center' });
      window.location.href = 'https://mail.google.com';
    } catch (error) {
      toast.error('Failed to send password reset email.', { position: 'top-center' });
    }
  };

  return (
    // this is forget pass section 
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <h2 className="text-4xl font-bold text-center mb-4">Forgot Password</h2>
        <div className="card w-full max-w-sm p-10 bg-blue-300 shadow-2xl">
          <form onSubmit={handlePasswordReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn border border-white bg-blue-900 hover:bg-blue-700 text-white">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
