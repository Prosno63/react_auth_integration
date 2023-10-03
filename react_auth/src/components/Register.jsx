import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="username" placeholder="Username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="mt-2">Already Have an Account? <span className="text-blue-700" ><Link to='/login'>Login</Link></span></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;