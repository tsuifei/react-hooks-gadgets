import { useEffect } from "react";
import Welcome from "./components/Welcome";
import MainCurrency from "./components/MainCurrency";

const ExchangeConverter = (props) => {
  useEffect(() => {
    document.title = "匯率轉換";
  });

  return (
    <div className="bg-cyan-500 p-16">
      <div className="container max-w-lg mx-auto">
        <Welcome name="Tracy" />
        <h1 className="text-3xl font-bold text-white">
          Exchange Rate Converters / currency-exchange
        </h1>
        <MainCurrency />
      </div>
    </div>
  );
};

export default ExchangeConverter;
