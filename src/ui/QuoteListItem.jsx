import { useState } from "react";
import { createPortal } from "react-dom";
import ContentListPopup from "./ContentListPopup";

function QuoteListItem({ showReward, rewardTextValue, contentList }) {
  const [showContentList, setShowContentList] = useState(false);
  const [currentObject, setCurrentObject] = useState({});
  function handleRewardClick() {
    if (!showReward) return;
    setShowContentList((prev) => !prev);
  }
  return (
    <>
      <div
        onClick={handleRewardClick}
        className={
          "w-full py-1 overflow-hidden text-ellipsis " +
          `${showReward ? "" : "blur-[2px] line-through"}`
        }
      >
        {rewardTextValue}
      </div>

      {showContentList &&
        createPortal(
          <ContentListPopup setShowContentList={setShowContentList}>
            <div className='fixed   transition-all rounded-lg shadow-lg translate-y-[-50%] translate-x-[-50%] bg-stone-950 border-[1px] border-stone-800 top-1/2 left-1/2 w-[85%] '>
              {currentObject.content && (
                <div className='px-2 py-2 text-center'>
                  <div className='px-2 pt-2 text-xl'>
                    Quote: {currentObject.content}
                  </div>
                  <div className='pt-3 pb-3 text-sm'>
                    Author: {currentObject.author}
                  </div>
                </div>
              )}
              <div className='px-2 pb-2'>
                {contentList?.map((el) => (
                  <div
                    className='pt-2 border-[1px] border-r-0 border-l-0 border-t-0 last:border-b-0   whitespace-nowrap text-ellipsis overflow-hidden min-h-10 border-stone-800 cursor-pointer'
                    onClick={() => setCurrentObject(el)}
                    key={el._id}
                  >
                    {" "}
                    {el.author}
                  </div>
                ))}
              </div>
            </div>
          </ContentListPopup>,
          document.body
        )}
    </>
  );
}

export default QuoteListItem;
