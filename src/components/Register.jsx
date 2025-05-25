import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserTypes } from '../api';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userTypeId, setUserTypeId] = useState('');
    const [userTypes, setUserTypes] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Fetch user types from backend on component mount
    useEffect(() => {
        const fetchUserTypes = async () => {
            try {
                const response = await getUserTypes();
                setUserTypes(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserTypes();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Find the full userType object from userTypes array
        const selectedUserType = userTypes.find(
            (type) => type.userTypeId === parseInt(userTypeId)
        );

        if (!selectedUserType) {
            console.error("Invalid user type selected");
            return;
        }

        const payload = {
            email,
            password,
            userTypeId: {
                userTypeId: selectedUserType.userTypeId,
                userTypeName: selectedUserType.userTypeName
            }
        };

        try {
            const response = await axios.post("http://localhost:2025/register", payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSuccess(response.data);
            console.log("Response:", response.data);
        } catch (err) {
            if (err.response && err.response.status === 409) {
                setError(err.response.data); // this will show your model error
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };


    return (
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="Username"
        //     />
        //     <input
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         placeholder="Password"
        //     />
        //     <select
        //         value={userTypeId}
        //         onChange={(e) => setUserTypeId(e.target.value)}
        //     >
        //         <option value="none">Select User Type</option>
        //         {userTypes.map(type => (
        //             <option key={type.userTypeId} value={type.userTypeId}>
        //                 {type.userTypeName}
        //             </option>
        //         ))}
        //     </select>
        //     <button type="submit">Register</button>
        //     {error && <p style={{ color: "red" }}>{error}</p>}
        //     {success && <p style={{ color: "green" }}> {success}</p>}
        // </form>
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-16 lg:px-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-white-900">
                        Sign Up to your account
                    </h2>
                </div>
                <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
                    <form onClick={handleSubmit} className="space-y-8">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" className="block text-lg font-medium text-white-900">
                                    Email address
                                </label>
                            </div>
                            <div className="mt-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-lg bg-white px-4 py-2 text-lg text-black outline-1 -outline-offset-1 outline-white-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium text-white-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-lg bg-white px-4 py-2 text-lg text-black outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium text-white-900">
                                Select User Type
                                </label>
                            </div>
                            <div className="mt-3">
                                <select
                                    id="userTypeId"
                                    name="userTypeId"
                                    required
                                    autoComplete="current-userTypeId"
                                    value={userTypeId}
                                    onChange={(e) => setUserTypeId(e.target.value)}
                                    className="block w-full rounded-lg bg-white px-4 py-2 text-lg text-black outline-1 -outline-offset-1 outline-white-300 placeholder:text-white-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                        <option value="none">Select User Type</option>
                                        {userTypes.map(type => (
                                             <option key={type.userTypeId} value={type.userTypeId}>
                                                 {type.userTypeName}
                                             </option>
                                         ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-lg bg-green-600 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-12 text-center text-lg text-white-500">
                        Not a user?{' '}
                        <a href="/login" className="font-semibold text-green-500 hover:text-green-700">
                            Sign In here
                        </a>
                    </p>
                </div>
        </div>
        </>
    );
}

export default Register;
