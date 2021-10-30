import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
                <label className="font-light text-4xl mb-4"><span className="font-bold">Login</span></label>
                <input type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email" />
                <input type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password" />
                <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Login</button>
                <p className="text-right mb-4">Forgot password</p>
                <label className="text-gray-800 mb-4">or</label>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign with Google</button>
                <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Sign with Facebook</button>
                <button className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-4">Sign with Github</button>
                <div className="text-center mt-4">
                    <span>
                        Don't have an account?
                    </span>
                    <Link to="/register" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"> Create One</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;