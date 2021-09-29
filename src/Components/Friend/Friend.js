import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    

   const {name,flag,capital,population} = props.friend;

   const url = `/friend/${name}`;
    return (
        <div className="friend-name">
            <h1>Name : {name}</h1>
            <img src={flag} alt="" />
            <h2>Capital Name: {capital} </h2>
            <h3>Population {population} </h3>
            <Link to={url}>More..</Link>
        </div>
    );
};

export default Friend;