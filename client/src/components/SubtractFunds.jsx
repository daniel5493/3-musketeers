import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const SubtractFunds = () => {


    return (
        <div>
            <form action="submit">
            <input label="Amount:" type="text" />
          <button> 
            Subtract Funds
          </button>
          </form>
        </div>
      );
    };
export default SubtractFunds;