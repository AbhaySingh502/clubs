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
                        <div className="circle red">1600</div>
                        <p>STUDENTS</p>
                        <p>Students are treated as capable individuals who make their own decisions.</p>
                    </div>
                    <div className="stat">
                        <div className="circle green">600</div>
                        <p>ACRES CAMPUS</p>
                        <p>The campus development spans 600 acres, nestled along the scenic Riverdale, at the heart of the city.</p>
                    </div>
                    <div className="stat">
                        <div className="circle blue">120</div>
                        <p>COLLABORATORS</p>
                        <p>We have established partnerships with 120 internationally renowned academic and non-academic institutions.</p>
                    </div>
                    <div className="stat">
                        <div className="circle orange">10</div>
                        <p>STARTUPS INCUBATED</p>
                        <p>XYZ University has successfully incubated 10 startups under our Innovation and Incubation Centre (IIC).</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Jammu;
