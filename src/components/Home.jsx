import React from 'react';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 0' }}>
                <h1>Dev Job Portal</h1>
                <p>Your gateway to your dream job</p>
            </header>
            <main style={{ marginTop: '20px' }}>
                <section>
                    <h2>Find Your Next Opportunity</h2>
                    <p>Search and apply for jobs that match your skills and interests.</p>
                    <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                        Explore Jobs
                    </button>
                </section>
                <section style={{ marginTop: '40px' }}>
                    <h2>For Employers</h2>
                    <p>Post job openings and find the best candidates for your company.</p>
                    <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                        Post a Job
                    </button>
                </section>
            </main>
            <footer style={{ marginTop: '40px', padding: '10px 0' }}>
                <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;