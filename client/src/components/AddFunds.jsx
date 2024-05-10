import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const AddFunds = () => {
    let funds = parseInt(localStorage.getItem("funds")) || 0
    if (funds === 0) {
        localStorage.setItem("funds", funds)
    }
    let addFundBut = document.querySelector("#addFundsButton");
    function addFunds() {
        funds += parseInt(document.querySelector("#addAmount").value)
        localStorage.setItem("funds", funds)
        document.location.reload()
    }


    return (
        <div >
            <div>
                <input label="Amount:" type="text" id="addAmount" />
                <button id="addFundsButton" onClick={addFunds}>
                    Add Funds
                </button>
            </div>

        </div>
    );
};

export default AddFunds;