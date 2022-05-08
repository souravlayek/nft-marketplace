import { useEffect, useRef, useState } from "react";
import moment, { Moment } from "moment";

const getRandomNumber = () => Math.floor(Math.random() * (12 - 3 + 1) + 3);

export const useCountDownTimer = () => {
  const endTime = useRef<Moment>(moment().add(getRandomNumber(), "h"));
  const [timeObject, setTimeObject] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const difference = moment.duration(
        moment(endTime.current).diff(moment.now())
      );
      const hour = difference.get("hour");
      const minutes = difference.get("minutes");
      const seconds = difference.get("seconds");
      setTimeObject({
        h: hour,
        m: minutes,
        s: seconds,
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endTime]);
  return timeObject;
};
