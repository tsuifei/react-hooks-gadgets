const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="flex flex-row">
      <div className="flex basis-4/5">
        <p>{note}</p>
        <p>{`${date} / ${time}`}</p>
      </div>
      <button
        onClick={deleteItem}
        className="basis-1/5 w10 py-1 font-medium text-white bg-cyan-500 hover:bg-indigo-500 rounded-lg border-cyan-400 hover:shadow inline-flex space-x-2 items-center justify-center"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
