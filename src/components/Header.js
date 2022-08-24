import { Routes, Route } from "react-router-dom";
import Counter from "../pages/Counter";
import Memo from "../pages/Memo";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="bg-cyan-200 p-16">
      <h1 className="text-3xl font-bold text-white py-6">Header</h1>
      <NavLink />
      <Routes>
        {/* 註冊路由 */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
};

export default Header;
