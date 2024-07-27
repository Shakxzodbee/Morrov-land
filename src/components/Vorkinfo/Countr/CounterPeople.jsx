import React, { useState, useEffect } from "react";
import '../VorkInfo.css'
const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 5) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 100); // Increment count every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p className="para-p">
                {count} <br />
                <span>People in the team</span>
            </p>
        </div>
    );
};

export default Counter;