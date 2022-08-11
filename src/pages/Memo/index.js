import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";

// 取資料
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}
// 寫入資料
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}
const Home = () => {
  const [data, setData] = useState([]);
  // 維持最新狀態
  const submittingStatus = useRef(false);

  useEffect(() => {
    // 如果不是送資料的狀態 直接return
    if (!submittingStatus.current) {
      return;
    }
    // 綁定方法
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="bg-cyan-500 p-16">
      <div className="container max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white">My memorandum</h1>
        <p className="mb-8 font-semibold text-gray-100">Noter les notes</p>
        <div className="container max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <Edit add={setData} submittingStatus={submittingStatus} />
          <List
            listData={data}
            deleteData={setData}
            submittingStatus={submittingStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
