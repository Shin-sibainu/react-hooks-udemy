import React, { useState } from "react";

//https://github.com/Shin-sibainu/react-performance-template/blob/main/src/App.tsx

const Lesson5_1 = () => {
  console.log("rendered Parent");
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  return (
    <div>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <button
        className="border-2 px-2 py-2 rounded-md ml-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Child Count
      </button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </div>
  );
};

export default Lesson5_1;

// eslint-disable-next-line react-refresh/only-export-components
const Child = React.memo(({ count }: { count: number }) => {
  console.log("rendered Child");
  let i = 0;
  while (i < 10000000) i++;
  return <p>Child: {count}</p>;
});
