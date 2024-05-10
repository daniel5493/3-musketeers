import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const AddFunds = () => {


  return (
    <div >
        <form onSubmit={handleSubmit}>

        <input label="Amount:" type="text" />
      <button> 
        Add Funds
      </button>
      </form>
    </div>
  );
};

export default AddFunds;