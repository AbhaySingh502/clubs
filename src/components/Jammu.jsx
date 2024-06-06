import React from 'react';
import '../css/jammu.css';

const Jammu = () => {
    return (
        <div className="Jammu mt-5">
            <header className="header">
                <h1>IIT JAMMU</h1>
                <p>Inspiring Minds, Shaping Futures</p>
            </header>
            <main>
                {/* <div className="content">
                    <div className="image" style={{ height: '40rem' }}>
                        <img src="/assetes/pic19.jpg" alt="XYZ University Campus" />
                    </div>
                </div> */}
                <div className="stats">
                    <div className="stat">
                        <div className="circle red">1300+</div>
                        <p className='fs-4'>STUDENTS</p>
                        <p>Students are treated as capable individuals who make their own decisions.</p>
                    </div>
                    <div className="stat">
                        <div className="circle green">400+</div>
                        <p className='fs-4'>ACRES CAMPUS</p>
                        <p>The campus development spans 400+ acres, nestled along the scenic Riverdale, at the heart of the city.</p>
                    </div>
                    <div className="stat">
                        <div className="circle blue">90+</div>
                        <p className='fs-4'>MOUs & COLLABORATORS</p>
                        <p>We have established partnerships with 90+ internationally renowned academic and non-academic institutions.</p>
                    </div>
                    <div className="stat">
                        <div className="circle orange">100+</div>
                        <p className='fs-4'> FACULTY </p>
                        <p>The institute employs a diverse faculty of over 100+ experienced professionals across various departments.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Jammu;
