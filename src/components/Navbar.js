import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div class="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3 ">
      <div className="img-wrapper">
        <Link to="/">
          <span>HUMO</span>
          <img src="./images/logo.png" alt="site logo" />
        </Link>
      </div>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link class="me-3 py-2 text-dark text-decoration-none" to="/login">
          Login
        </Link>
        <Link class=" py-2 text-dark text-decoration-none" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
