// import { Link } from 'react-router-dom';
import AddFunds from './AddFunds'
import SubtractFunds from './SubtractFunds'
import TotalFunds from './TotalFunds'
// import Login from './Login'
// import Signup from './Signup'
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {


  return (
    <div className="card bg-white card-rounded w-50">

      <div className="card-header bg-dark text-center">
        <h1>Welcome to Piggy Bank Pro!</h1>
      </div>

      <div className="card-body m-5">
        <TotalFunds/>
      </div>
      <div className="card-body m-5">
        <AddFunds/>
      </div>
      <div className="card-body m-5">
        <SubtractFunds/>
      </div>
    </div>
  );
};

export default Home;