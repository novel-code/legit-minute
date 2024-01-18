function ResponseListItem({ responseTextValue }) {
  function handleResponseClick() {
    console.log("Update Response from input");
  }

  return (
    <p onClick={handleResponseClick} className='overflow-hidden text-ellipsis'>
      {responseTextValue}
    </p>
  );
}

export default ResponseListItem;
