import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div className="">
      <h3>備忘錄</h3>
      <div className="flex flex-col">
        <label for="text" className="mb-2 font-semibold">
          Note
        </label>
        <input
          value={note}
          onChange={noteChange}
          type="text"
          id="text"
          className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
        />
      </div>
      <div className="flex flex-col">
        <label for="date" className="mb-2 font-semibold">
          Date
        </label>
        <input
          value={date}
          onChange={dateChange}
          type="date"
          id="date"
          className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
        />
      </div>
      <div className="flex flex-col">
        <label for="time" className="mb-2 font-semibold">
          Time
        </label>
        <input
          value={time}
          onChange={timeChange}
          type="time"
          id="time"
          className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
        />
      </div>
      <button
        onClick={addItem}
        className="w-full py-3 font-medium text-white bg-cyan-500 hover:bg-indigo-500 rounded-lg border-cyan-400 hover:shadow inline-flex space-x-2 items-center justify-center"
      >
        ADD
      </button>
    </div>
  );
};

export default Edit;
