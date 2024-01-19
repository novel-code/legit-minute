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
  const { updateResponseItem, isLoading: isLoading2 } = useUpdateResponseItem();
  const [updatingResponseTextId, setUpdatingResponseTextId] = useState("");
  const [responseInput, setResponseInput] = useState("");

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handleSwipeLeft() {
    navigate("/reward");
  }

  function updateResponseText(itemId) {
    updateResponseItem({ response: responseInput, id: itemId });
    setUpdatingResponseTextId("");
  }

  const onLongPress = (e, listItem) => {
    if (updatingResponseTextId !== "") {
      updateResponseText(updatingResponseTextId);
    } else {
      setUpdatingResponseTextId(listItem.id);
      setResponseInput(listItem.response);
    }
  };

  const onClick = (e, listItem) => {
    if (updatingResponseTextId !== "") {
      updateResponseText(updatingResponseTextId);
      return;
    }
    updateResponseItem({ isCompleted: !listItem.isCompleted, id: listItem.id });
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const { onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchStart } =
    useLongPress(onLongPress, onClick, defaultOptions);

  if (isLoading || isLoading2)
    return <div className='mt-20 text-center'>Loading...</div>;

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
                ` ${
                  updatingResponseTextId !== listItem.id ? "block" : "hidden"
                }`
              }
              title={listItem[PAGE]}
            >
              <ResponseListItem
                isCompleted={listItem.isCompleted}
                responseTextValue={listItem[PAGE]}
              />
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
                value={responseInput}
                onChange={(e) => setResponseInput(e.target.value)}
                autoFocus={true}
                className='w-full outline-none bg-stone-900 '
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Response;
