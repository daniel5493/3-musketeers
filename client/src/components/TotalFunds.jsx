import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const TotalFunds = () => {
    let funds = parseInt(localStorage.getItem("funds")) || 0
    if (funds === 0) {
        localStorage.setItem("funds", funds)
    }


    return (
        <div >
            <h2>Balance:</h2>
            <h3 id="actual-balance"><span style={{ color: "green" }}>$</span>{funds}</h3>
        </div>
    );
};

export default TotalFunds;