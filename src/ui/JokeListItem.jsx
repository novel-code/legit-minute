import { useState } from "react";
import { createPortal } from "react-dom";
import ContentListPopup from "./ContentListPopup";

function JokeListItem({ showReward, rewardTextValue, contentList }) {
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
              {currentObject.type && (
                <div className='px-2 py-2 text-center'>
                  <div className='pb-3 text-sm'>
                    Category: {currentObject.category} <br />
                    Type: {currentObject.type}
                  </div>
                  <div className='text-xl'>
                    {currentObject.joke && `Joke: ${currentObject.joke}`}
                    <br />
                    {currentObject.setup && `Setup: ${currentObject.setup}`}
                    <br />
                    {currentObject.delivery &&
                      `Delivery: ${currentObject.delivery}`}
                  </div>
                </div>
              )}
              <div className='px-2 pb-2'>
                {contentList?.map((el) => (
                  <div
                    className='pt-2 border-[1px] border-r-0 border-l-0 border-t-0 last:border-b-0   whitespace-nowrap text-ellipsis overflow-hidden min-h-10 border-stone-800 cursor-pointer'
                    onClick={() => setCurrentObject(el)}
                    key={el.id}
                  >
                    {" "}
                    {el.category} {el.type}
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

export default JokeListItem;
