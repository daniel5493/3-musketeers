import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const SubtractFunds = () => {
    let funds = parseInt(localStorage.getItem("funds"))
    let subtractFundBut = document.querySelector("#addFundsButton");
    function subtractFunds() {
        funds -= parseInt(document.querySelector("#subtractAmount").value)
        localStorage.setItem("funds", funds)
        document.location.reload()
    }

    return (
        <div>
        <input label="Amount:" type="text" id="subtractAmount" />
        <button id="subtractFundsButton" onClick={subtractFunds}>
            Subtract Funds
        </button>
    </div>
    );
};
export default SubtractFunds;