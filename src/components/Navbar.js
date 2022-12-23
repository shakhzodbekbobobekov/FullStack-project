import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  console.log({ user });
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3 ">
      <div className="img-wrapper">
        <Link to="/">
          <span>HUMO</span>
          <img src="./images/logo.png" alt="site logo" />
        </Link>
      </div>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className=" m-0 me-3 py-2 text-dark text-decoration-none">
              {user.username}
            </p>
            <button className="btn btn-outline-primary addition-btn__logout ">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="/login"
            >
              Login
            </Link>
            <Link
              className=" py-2 text-dark text-decoration-none"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
