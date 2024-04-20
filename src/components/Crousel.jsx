import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const Carousel = () => {
  return (
    <div classNameName='Carousel w-full'>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">


        <div className="carousel-inner" style={{ height: 'auto' }}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="./assetes/pic19.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./assetes/pic6.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./assetes/pic12.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Carousel;
