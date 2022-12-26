import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../helpers/storage";
import { logoutUser } from "../slice/Auth";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  console.log({ user });
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const logoHandler = () => {
    removeItem("token");
    navigator("/login");
    dispatch(logoutUser());
  };

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
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="/createArticle"
            >
              CreateArticle
            </Link>
            <button
              className="btn btn-outline-primary addition-btn__logout"
              onClick={logoHandler}
            >
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
