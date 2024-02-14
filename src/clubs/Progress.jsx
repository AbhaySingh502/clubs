import React, { useEffect } from 'react';

const Progress = () => {
    useEffect(() => {
        const container = document.querySelector('.container');
        const svg = document.querySelector('svg');
        const progressBar = document.querySelector('.progress-bar');
        const pct = document.querySelector('.pct');
        const totalLength = progressBar.getTotalLength();

        setTopValue(svg);

        progressBar.style.strokeDasharray = totalLength;
        progressBar.style.strokeDashoffset = totalLength;

        const handleScroll = () => {
            setProgress(container, pct, progressBar, totalLength);
        };

        const handleResize = () => {
            setTopValue(svg);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    const setTopValue = (svg) => {
        svg.style.top =
            document.documentElement.clientHeight * 0.5 -
            (svg.getBoundingClientRect().height * 0.5) +
            'px';
    };

    const setProgress = (container, pct, progressBar, totalLength) => {
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        const percentage = scrollTop / (scrollHeight - clientHeight);
        if (percentage === 1) {
            container.classList.add('completed');
        } else {
            container.classList.remove('completed');
        }
        pct.innerHTML = Math.round(percentage * 100) + '%';
        progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;
    };

    return (
        <div className="container">
            <p className="pct">0%</p>
            <svg
                className="complete"
                width="200"
                height="200"
                viewBox="0 0 100 100"
                xmlns="https://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad">
                        <stop offset="0%" stopColor="#fbc2eb"></stop>
                        <stop offset="100%" stopColor="#a6c1ee"></stop>
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40"></circle>
                <circle className="progress-bar" cx="50" cy="50" r="40"></circle>
            </svg>
        </div>
    );
};

export default Progress;
