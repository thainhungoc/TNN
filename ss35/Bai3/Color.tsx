import React, { useState } from 'react';
import './App.css'
export const Color = () => {
    const [name, setName] = useState("Thai Nhu Ngoc");
    const [isRed, setIsRed] = useState(false);

    const handleClick = () => {
        setIsRed(!isRed);
    };

    return (
        <div>
            <h3>Bai 3</h3>
            <p className={isRed ? 'red-text' : ''}>{name}</p>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
};

