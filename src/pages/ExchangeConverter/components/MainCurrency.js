import { useState } from "react";
import OtherCurrencies from "../components/OtherCurrencies";
import { CgDarkMode, CgSun } from "react-icons/cg";

const MainCurrency = (props) => {
  const [inputValut, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <>
      <h3>請輸入您要換的台幣</h3>
      <CgDarkMode className="text-amber-500" /> <CgSun />
      <input
        value={inputValut}
        onChange={handleInputChange}
        id="twd"
        type="number"
        placeholder="台幣"
        min="0"
      />
      <label htmlFor="twd">你輸入的台幣金額： {inputValut} </label>
      <OtherCurrencies inputValut={inputValut} />
    </>
  );
};

export default MainCurrency;
