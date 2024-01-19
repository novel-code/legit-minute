import { useNavigate } from "react-router-dom";
import { useUserDataOrInsert } from "../hooks/useUserDataOrInsert";
import List from "../ui/List";
import RewardListItem from "../ui/RewardListItem";
import { useSwipeable } from "react-swipeable";
import { useSongs } from "../hooks/useSongs";
import { useYoutubeContent } from "../hooks/useYoutubeContent";

const PAGE = "reward";
function Reward() {
  const { data: responseAndRewardList, isLoading } = useUserDataOrInsert();
  const navigate = useNavigate();
  const { songs, isLoading: isLoadingSongs } = useSongs();
  const { data: youtube, isLoading: isLoadingYoutube } = useYoutubeContent();

  const handlers = useSwipeable({
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  function handleSwipeRight() {
    navigate("/response");
  }

  if (isLoading || isLoadingSongs || isLoadingYoutube)
    return <div className='mt-20 text-center'>Loading...</div>;

  const allContentResp = {
    songs: songs,
    youtube: youtube,
    jokes: [],
    facts: [],
    quotes: [],
    news: [],
  };

  const content = responseAndRewardList.map((el) => {
    const helper = el[PAGE].split(" ");
    const qty = Number(helper.at(0));
    const contentType = helper.at(1);
    console.log("allContentResp[contentType]", allContentResp[contentType]);
    const releventContent = allContentResp[contentType].slice(0, qty);

    return releventContent;
  });

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <div {...handlers}>
        {responseAndRewardList.map((listItem, index) => (
          <div
            className={
              "border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 border-b-0 pl-3 flex items-center "
            }
            key={listItem.id}
            title={listItem[PAGE]}
          >
            <RewardListItem
              showReward={listItem.isCompleted}
              rewardTextValue={listItem[PAGE]}
              contentList={content.at(index)}
            />
          </div>
        ))}
      </div>
      {/* <List
        handlers={handlers}
        responseReward={responseAndRewardList}
        render={(listItem, index) => (
          <div
            className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 border-b-0 pl-3 flex items-center'
            key={listItem.id}
            title={listItem[PAGE]}
          >
            <RewardListItem
              rewardTextValue={listItem[PAGE]}
              contentList={content.at(index)}
            />
          </div>
        )}
      /> */}
    </div>
  );
}

export default Reward;
