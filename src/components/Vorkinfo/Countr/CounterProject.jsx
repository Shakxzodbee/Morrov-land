import React, { useState, useEffect } from "react";
import '../VorkInfo.css'
const CounterProject = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 1) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p className="para-p">
                {count} <br />
                <span>Own projects</span>
            </p>
        </div>
    );
};

export default CounterProject;