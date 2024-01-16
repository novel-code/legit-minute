import { useState } from "react";
import ContentListPopup from "../ui/ContentListPopup";
import { createPortal } from "react-dom";

function RewardListItem({ rewardTextValue, contentList }) {
  const [showContentList, setShowContentList] = useState(false);
  const [currentYtVideo, setCurrentYtVideo] = useState({
    url: contentList?.at(0)?.url,
    title: contentList?.at(0)?.title,
  });

  function handleRewardClick() {
    console.log("show content popup with list");
    setShowContentList((prev) => !prev);
  }

  console.log("currentYtVideo", currentYtVideo);

  return (
    <>
      <div
        onClick={handleRewardClick}
        className='w-full py-1 overflow-hidden text-ellipsis'
      >
        {rewardTextValue}
      </div>
      {showContentList &&
        createPortal(
          <ContentListPopup setShowContentList={setShowContentList}>
            <div className='fixed   transition-all rounded-lg shadow-lg translate-y-[-50%] translate-x-[-50%] bg-stone-950 border-[1px] border-stone-800 top-1/2 left-1/2 w-[85%] '>
              <div>
                {currentYtVideo.url && (
                  <iframe
                    className='w-full px-2 py-2'
                    src={currentYtVideo.url}
                    title={currentYtVideo.title}
                    allowFullScreen={true}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  />
                )}
              </div>
              <div className='px-2 pb-2'>
                {contentList?.map((el) => (
                  // border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 last:border-b-0 pl-3 flex items-center
                  <div
                    className='pt-2 border-[1px] border-r-0 border-l-0 border-t-0 last:border-b-0   whitespace-nowrap text-ellipsis overflow-hidden min-h-10 border-stone-800'
                    onClick={() =>
                      setCurrentYtVideo({ url: el.url, title: el.title })
                    }
                    key={el.id}
                  >
                    {" "}
                    {el.title}{" "}
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

export default RewardListItem;
