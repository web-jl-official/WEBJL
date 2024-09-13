import React, { useState, useEffect }  from 'react';

const Time = () => {

        // const calculateTimeLeft = () => {
        //   const targetDate = new Date("2024-10-11T08:00:00");
        //   const now = new Date();
        //   const difference = targetDate - now;

        //   let timeLeft = {};

        //   if (difference > 0) {
        //     timeLeft = {
        //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        //       minutes: Math.floor((difference / 1000 / 60) % 60),
        //       seconds: Math.floor((difference / 1000) % 60),
        //     };
        //   }

        //   return timeLeft;
        // };

        // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        // useEffect(() => {
        //   const timer = setTimeout(() => {
        //     setTimeLeft(calculateTimeLeft());
        //   }, 1000);

        //   return () => clearTimeout(timer);
        // }, [timeLeft]);

        // const timerComponents = [];

        // Object.keys(timeLeft).forEach((interval) => {
        //   if (!timeLeft[interval]) {
        //     return;
        //   }

        //   timerComponents.push(
        //     <span key={interval}>
        //       {timeLeft[interval]} {interval}{" "}
        //     </span>
        //   );
        // });
    
    return (
      <div>
        {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
      </div>
    );
}

export default Time;
