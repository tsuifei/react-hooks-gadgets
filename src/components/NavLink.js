import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NavLink = () => {
  return (
    <div className="bg-cyan-400 p-16">
      <nav class="flex-1 px-2 pb-4 space-y-1">
        <Button size="sm" type="basic">
          <Link to="/app">App</Link>
        </Button>

        <Button size="sm" type="basic">
          <Link to="/Counter">Counter</Link>
        </Button>
        <Button size="sm" type="basic">
          <Link to="/Memo">Memo</Link>
        </Button>
      </nav>
    </div>
  );
};

export default NavLink;
