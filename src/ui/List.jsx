function List({ handlers, responseReward, render }) {
  return <div {...handlers}>{responseReward.map(render)}</div>;
}

export default List;
