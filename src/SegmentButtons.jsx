function SegmentButtons({
  segmentBtnTextList,
  handleSegmentChange,
  currentSegment,
}) {
  return (
    <div className='fixed inset-x-0 ml-auto mr-auto text-center bottom-5'>
      {segmentBtnTextList.map((seg, i, arr) => (
        <button
          key={seg}
          onClick={handleSegmentChange}
          className={
            "w-24 py-2 duration-300   bg-stone-800 hover:bg-stone-900" +
            ` ${currentSegment === seg ? "bg-stone-900" : ""} ${
              i === 0
                ? "rounded-tl-lg rounded-bl-lg"
                : i === arr.length - 1
                  ? "rounded-tr-lg rounded-br-lg"
                  : ""
            }`
          }
        >
          {seg}
        </button>
      ))}
    </div>
  );
}

export default SegmentButtons;
