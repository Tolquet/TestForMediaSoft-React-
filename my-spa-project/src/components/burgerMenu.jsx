import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import '../styles/styles.css';  

const BurgerMenu = () => {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleMenu = () => {  
        setIsOpen(!isOpen);  
    };  

    return (  
        <div className="burger-menu">  
            <div className="burger" onClick={toggleMenu}>  
                <div className={`line ${isOpen ? 'open' : ''}`}></div>  
                <div className={`line ${isOpen ? 'open' : ''}`}></div>  
                <div className={`line ${isOpen ? 'open' : ''}`}></div>  
            </div>  
            <nav className={`menu ${isOpen ? 'open' : ''}`}>  
                <ul>  
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>  
                     
                </ul>  
            </nav>  
        </div>  
    );  
};  

export default BurgerMenu; 