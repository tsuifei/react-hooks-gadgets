// import { useState, useEffect } from "react";

const Welcome = (props) => {
  return (
    <h1 className="text-3xl font-bold text-white py-6">
      Hello, {props.name} 妳有多少台必要換成外幣？
    </h1>
  );
};

export default Welcome;
