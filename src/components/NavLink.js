import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="bg-cyan-400 p-16">
      <nav class="flex-1 px-2 pb-4 space-y-1">
        <Link to="/app" class="nav-item">App</Link>
        <Link to="/Counter" class="nav-item">Counter</Link>
        <Link to="/Memo" class="nav-item">Memo</Link>
      </nav>
    </div>
  );
};

export default NavLink;
