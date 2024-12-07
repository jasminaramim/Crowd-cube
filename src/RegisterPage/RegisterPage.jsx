
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();  
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const minLength = 6;
        
        if (password.length < minLength) {
            return "Password must be at least 6 characters long.";
        }
        if (!uppercasePattern.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowercasePattern.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return ""; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            return;
        }
        setPasswordError(""); 
        
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);  
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err);
                    });

                toast.success('Registration successful!', {
                    position: "top-center"
                });

                setTimeout(() => {
                    navigate('/');
                }, 2000); 
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(error.message);

                toast.error(`Error: ${errorMessage}`, { position: 'top-center' });
            });
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-blue-300 mb-44 mt-20 w-[600px] p-5 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                                {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-900 text-white hover:bg-blue-700">Register</button>
                            </div>
                        </form>
                        <p className='text-center'>Already Have An Account? <Link className='text-red-500' to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
