import React, { useState, useEffect } from 'react';
import Comp from './Comp'; 

const User = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
            const data = await response.json();
            const data1 = data.results[0];
            setUserInfo(data1);
            console.log(data1);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="user">
            <div>
               
                { <Comp info={userInfo} /> }
            </div>
        </div>
    )
}

export default User;
