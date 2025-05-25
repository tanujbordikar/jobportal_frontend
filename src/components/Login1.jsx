import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { signin } from '../actions/auth';

function Login1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(signin(email, password, navigate));

    if (result.success) {
      setMessage(result.success);
    } else {
      setError(result.success);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-16 lg:px-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-white">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg px-4 py-2 bg-white text-black text-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-lg px-4 py-2 bg-white text-black text-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
          >
            Sign in
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {success && <p className="mt-4 text-center text-green-500">{success}</p>}

        <p className="mt-8 text-center text-gray-300">
          Not a user?{' '}
          <a href="/register" className="text-green-400 hover:underline">
            Sign Up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login1;
