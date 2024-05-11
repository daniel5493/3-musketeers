import { Link } from 'react-router-dom';

// import Auth from '../utils/auth';

 function Header () {
  const logout = (event) => {
    event.preventDefault();
    //Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Home</h1>
          </Link>
          <p className="m-0">Get into the bank of a programmer.</p>
        </div>
        <div>
          
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          
        </div>
      </div>
    </header>
  );
};
export default Header