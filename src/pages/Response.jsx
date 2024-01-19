import { useSwipeable } from "react-swipeable";
import { useUserDataOrInsert } from "../hooks/useUserDataOrInsert";
import List from "../ui/List";
import ResponseListItem from "../ui/ResponseListItem";
import { useNavigate } from "react-router-dom";
import useLongPress from "../hooks/useLongPress";
import { useUpdateResponseItem } from "../hooks/useUpdateResponseItem";

const PAGE = "response";
function Response() {
  const { data: responseAndRewardList, isLoading } = useUserDataOrInsert();
  const navigate = useNavigate();
  const { updateIsCompleted, isLoading: isLoading2 } = useUpdateResponseItem();

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handleSwipeLeft() {
    navigate("/reward");
  }

  const onLongPress = (e, listItem) => {
    console.log("longpress is triggered", listItem);
  };

  function onClick(e, listItem) {
    updateIsCompleted({ isCompleted: !listItem.isCompleted, id: listItem.id });
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const { onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchStart } =
    useLongPress(onLongPress, onClick, defaultOptions);

  if (isLoading || isLoading2) return <div>Loading</div>;

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <List
        handlers={handlers}
        responseReward={responseAndRewardList}
        render={(listItem) => (
          <div
            onMouseDown={(e) => onMouseDown(e, listItem)}
            onMouseLeave={(e) => onMouseLeave(e, listItem)}
            onMouseUp={(e) => onMouseUp(e, listItem)}
            onTouchEnd={(e) => onTouchEnd(e, listItem)}
            onTouchStart={(e) => onTouchStart(e, listItem)}
            className={
              "border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 border-b-0  pl-3 flex items-center " +
              `${listItem.isCompleted ? "line-through" : ""}`
            }
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
