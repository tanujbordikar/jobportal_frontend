import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:2025/login', { email, password });

            if (response.data && response.data.token) {
                setUserData(response.data);
                localStorage.setItem('userData', JSON.stringify(response.data));
                setMessage('Login successful!');
                console.log('User Data:', response.data);
            } else {
                setError('Unexpected server response. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Invalid email or password. Please try again.');
            }
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-16 lg:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-white">
                            Email address
                        </label>
                        <div className="mt-3">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-lg bg-white px-4 py-2 text-lg text-black outline outline-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-white">
                            Password
                        </label>
                        <div className="mt-3">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-lg bg-white px-4 py-2 text-lg text-black outline outline-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-lg bg-green-600 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-green-700 focus:outline focus:outline-2 focus:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                {/* Success and Error messages */}
                {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}

                <p className="mt-12 text-center text-lg text-gray-400">
                    Not a user?{' '}
                    <a href="/register" className="font-semibold text-green-500 hover:text-green-700">
                        Sign Up here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
