import { useSwipeable } from "react-swipeable";
import { useUserDataOrInsert } from "../hooks/useUserDataOrInsert";
import ResponseListItem from "../ui/ResponseListItem";
import { useNavigate } from "react-router-dom";
import useLongPress from "../hooks/useLongPress";
import { useUpdateResponseItem } from "../hooks/useUpdateResponseItem";
import { useState } from "react";

const PAGE = "response";
function Response() {
  const { data: responseAndRewardList, isLoading } = useUserDataOrInsert();
  const navigate = useNavigate();
  const { updateIsCompleted, isLoading: isLoading2 } = useUpdateResponseItem();
  const [updatingResponseTextId, setUpdatingResponseTextId] = useState("");

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handleSwipeLeft() {
    navigate("/reward");
  }

  function updateResponseText() {
    // make api call
    setUpdatingResponseTextId("");
  }

  const onLongPress = (e, listItem) => {
    if (updatingResponseTextId !== "") {
      updateResponseText();
    } else {
      setUpdatingResponseTextId(listItem.id);
    }
  };

  const onClick = (e, listItem) => {
    if (updatingResponseTextId !== "") {
      updateResponseText();
      return;
    }
    updateIsCompleted({ isCompleted: !listItem.isCompleted, id: listItem.id });
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const { onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchStart } =
    useLongPress(onLongPress, onClick, defaultOptions);

  if (isLoading || isLoading2) return <div>Loading</div>;

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <div {...handlers}>
        {responseAndRewardList.map((listItem) => (
          <div key={listItem.id}>
            <div
              onMouseDown={(e) => onMouseDown(e, listItem)}
              onMouseLeave={(e) => onMouseLeave(e, listItem)}
              onMouseUp={(e) => onMouseUp(e, listItem)}
              onTouchEnd={(e) => onTouchEnd(e, listItem)}
              onTouchStart={(e) => onTouchStart(e, listItem)}
              className={
                "border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 last:border-b-0 border-t-0   pl-3 flex items-center " +
                `${listItem.isCompleted ? "line-through" : ""} ${
                  updatingResponseTextId !== listItem.id ? "block" : "hidden"
                }`
              }
              title={listItem[PAGE]}
            >
              <ResponseListItem responseTextValue={listItem[PAGE]} />
            </div>

            <div
              className={
                "border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10  last:border-b-0 border-t-0 pl-3 flex items-center bg-stone-900 " +
                ` ${
                  updatingResponseTextId !== listItem.id ? "hidden" : "block"
                }`
              }
            >
              <input
                autoFocus={true}
                className='w-full outline-none bg-stone-900 '
                defaultValue={listItem[PAGE]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Response;
