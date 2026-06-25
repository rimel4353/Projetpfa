import "./navbar.css";
import { link } from "react-router-dom";

const Navbar = () => {
  const{ user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </link>
        <span className="logo">lamabooking</span>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>)}
      </div>
    </div>
  );
};

export default Navbar;
