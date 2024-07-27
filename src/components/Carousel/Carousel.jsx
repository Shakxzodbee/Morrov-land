import img1 from '../../assets/Vector (5).png'
import img2 from '../../assets/Vector (1).png'
import img3 from '../../assets/Vector (2).png'
import img4 from '../../assets/Vector (3).png'
import img5 from '../../assets/Vector (4).png'
import React, { useState } from 'react';
import './Carousel.css'

const Carousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h3>They trust us</h3>
      <div className="div-carousel">
        <li><img src={img1} alt="" /></li>
        <li><img src={img2} alt="" /></li>
        <li className='thirst'><img src={img3} alt="" /></li>
        <li><img src={img4} alt="" /></li>
        <li><img src={img5} alt="" /></li>
      </div>
    </div>
  );
};

export default Carousel;