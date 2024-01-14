function List({ handlers, currentSegment, responseReward }) {
  return (
    <div {...handlers}>
      {responseReward.map((list) => (
        <div
          className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 last:border-b-0 pl-3 flex items-center'
          key={list.id}
          title={list[currentSegment]}
        >
          <p className='overflow-hidden text-ellipsis'>
            {list[currentSegment]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default List;
