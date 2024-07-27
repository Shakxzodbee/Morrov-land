import React, { useState, useEffect } from "react";
import '../VorkInfo.css'
const CounterUser = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100000) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 1); // Increment count every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p className="para-p">
                {count} <br />
                <span>Users of our products</span>
            </p>
        </div>
    );
};

export default CounterUser;