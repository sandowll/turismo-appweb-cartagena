import React, { useState } from 'react';
import './hero.css';
import img1 from '../../assets/slider/img1.jpg'; // Importa la imagen 
import img2 from '../../assets/slider/img2.jpg'; // Importa la imagen 
import img3 from '../../assets/slider/img3.jpg'; // Importa la imagen 
import img4 from '../../assets/slider/img4.jpg'; // Importa la imagen 
import img5 from '../../assets/slider/img5.jpg'; // Importa la imagen 

const Hero = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            url: img1,
            name: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
        },
        {
            id: 2,
            url: img2,
            name: 'Finland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
        },
        {
            id: 3,
            url: img3,
            name: 'Iceland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
        },
        {
            id: 4,
            url: img4,
            name: 'Australia',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
        },
        {
            id: 5,
            url: img5,
            name: 'Netherland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
        }
    ]);

    const nextSlide = () => {
        setItems([...items.slice(1), items[0]]);
    };

    const prevSlide = () => {
        setItems([items[items.length - 1], ...items.slice(0, items.length - 1)]);
    };

    return (
        <div className="hero-container">
            <ul className="item-container ">
                {items.map((item) => (
                    <li key={item.id} className="item" style={{ backgroundImage: `url(${item.url})` }}>
                        <div className="content ">
                            <div className="title">{item.name}</div>
                            <div className="description ">{item.description}</div>
                            <button>See More</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="nav prev-nav">
    <button className="btn prev-btn" onClick={prevSlide}>←</button>
</div>
<div className="nav next-nav">
    <button className="btn next-btn" onClick={nextSlide}>→</button>
</div>

        </div>
    );
};

export default Hero;







