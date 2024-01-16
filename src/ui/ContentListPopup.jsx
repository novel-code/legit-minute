function ContentListPopup({ children, setShowContentList }) {
  function handleClose(e) {
    e.stopPropagation();
    setShowContentList(false);
  }

  return (
    <>
      <div
        onClick={handleClose}
        className='fixed top-0 left-0 w-full h-screen transition-all backdrop-blur-sm'
      />
      {children}
    </>
  );
}

export default ContentListPopup;
