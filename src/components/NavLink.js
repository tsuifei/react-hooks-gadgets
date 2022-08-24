import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="bg-cyan-400 p-16">
      <nav>
        <Link to="/app">App</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/Memo">Memo</Link>
      </nav>
    </div>
  );
};

export default NavLink;
