import { useCallback, useRef, useState } from "react";

const useLongPress = (
  onLongPress,
  onClick,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    (event, arg) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event, arg);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true, arg) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick(event, arg);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e, arg) => start(e, arg),
    onTouchStart: (e, arg) => start(e, arg),
    onMouseUp: (e, arg) => clear(e, true, arg),
    onMouseLeave: (e, arg) => clear(e, false, arg),
    onTouchEnd: (e, arg) => clear(e, true, arg),
  };
};

const isTouchEvent = (event) => {
  return "touches" in event;
};

const preventDefault = (event) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;
