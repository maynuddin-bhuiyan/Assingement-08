import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Friendtes = () => {
    const { friendId } = useParams();
    const [freind, setFreind] = useState({});

    console.log(freind);
 
    useEffect(() =>{
        const url = `https://restcountries.com/v3.1/name/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFreind(data))
    }, [])
    
    return (
        <div>
            <h1>{friendId} Deatical Is Comming Soon </h1>
            
        </div>
    );
};

export default Friendtes;