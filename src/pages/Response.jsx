import { useSwipeable } from "react-swipeable";
import { useUserDataOrInsert } from "../hooks/useUserDataOrInsert";
import List from "../ui/List";
import ResponseListItem from "../ui/ResponseListItem";
import { useNavigate } from "react-router-dom";

const PAGE = "response";
function Response() {
  const { data: responseAndRewardList, isLoading } = useUserDataOrInsert();
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handleSwipeLeft() {
    navigate("/reward");
  }

  if (isLoading) return <div>Loading</div>;

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <List
        handlers={handlers}
        responseReward={responseAndRewardList}
        render={(listItem) => (
          <div
            className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 border-b-0 pl-3 flex items-center'
            key={listItem.id}
            title={listItem[PAGE]}
          >
            <ResponseListItem responseTextValue={listItem[PAGE]} />
          </div>
        )}
      />
    </div>
  );
}

export default Response;
