// import { useState } from "react";

const OtherCurrencies = (props) => {
  const { inputValut } = props;
  console.log(props);
  // const [jpy, setJpy] = useState(4.486);
  // const [usd, setUsd] = useState(0.033);
  // const [eur, setEur] = useState(0.032);
  const jpy = 4.486;
  const usd = 0.033;
  const eur= 0.032;


  return (
    <>
      <h3>新增幣種</h3>
      <label htmlFor="currencyName">幣種名稱 Currency Name：</label>
      <input id="currencyName" type="text" placeholder="幣種名稱" />
      <label htmlFor="exchangeRate">匯率 Exchange rate：</label>
      <input id="exchangeRate" type="number" placeholder="匯率" />
      <button type="button" value="新增幣種" />
      <hr />

      <p>可以換算成以下的幣值 Amount </p>
      <ul>
        <li>日幣JPY：{(inputValut * jpy).toFixed(2)}</li>
        <li>美金USD：{(inputValut * usd).toFixed(2)}</li>
        <li>歐元EUR：{(inputValut * eur).toFixed(2)}</li>
      </ul>
    </>
  );
};

export default OtherCurrencies;
