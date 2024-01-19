function ResponseListItem({ isCompleted, responseTextValue }) {
  return (
    <p
      className={
        "overflow-hidden text-ellipsis " +
        `${isCompleted ? "blur-[2px] line-through" : ""} `
      }
    >
      {responseTextValue}
    </p>
  );
}

export default ResponseListItem;
