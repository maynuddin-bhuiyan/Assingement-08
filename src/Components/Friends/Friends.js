import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';


const Friends = () => {
const [friends, setfriends] = useState([]);

useEffect( () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setfriends(data))
},[])
    return (
        <div className="Friends">
             <h1>Countries of the World by {friends.length} </h1>

             <div className="Friend">
                 {
                     friends.map(friend => <Friend 
                        key={friend.alpha2Code}
                        friend={friend}
                     ></Friend>)
                 }
             </div>
        </div>
    );
};

export default Friends;