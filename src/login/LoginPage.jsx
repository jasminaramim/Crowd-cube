
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import google from "../images/google_13170545-removebg-preview.png";

const Login = () => {
  const { user, userLogin, googleLogin, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    try {
      const result = await userLogin(email, password);
      const user = result.user;
      setUser(user);
      navigate(from, { replace: true });
      toast.success('Logged in successfully!', { position: "top-center" });
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error('Password is incorrect. Please try again.');
      } else {
        toast.error('Login failed.', { position: "top-center" });
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      setUser(user);
      navigate(from, { replace: true });
      toast.success('Logged in successfully with Google!', { position: "top-center" });
    } catch (error) {
      toast.error('Google login failed. Please try again.', { position: "top-center" });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card mt-14 mb-14 bg-blue-300 w-full p-10 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link to="/forget-password" state={{ email }} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-blue-900 text-white hover:bg-blue-700">Login</button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <button className="btn btn-outline w-full" onClick={handleGoogleLogin}>
              <span className="flex items-center justify-center space-x-2">
                <img src={google} alt="Google Logo" className="w-10 h-10" />
                <span>Login with Google</span>
              </span>
            </button>
          </div>

          <p className="text-center mt-4">
            Don't Have An Account? <Link className="text-red-500 font-bold" to="/auth/register">Register</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
