import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Job Portal Dashboard</h1>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>Job Listings</h2>
                    <p>View and manage job postings.</p>
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>View Jobs</button>
                </div>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>Applications</h2>
                    <p>Track and review job applications.</p>
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>View Applications</button>
                </div>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>Profile</h2>
                    <p>Update your profile and settings.</p>
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;