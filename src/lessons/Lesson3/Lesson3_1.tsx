import { useRef } from "react";

const Lesson3_1 = () => {
  const ref = useRef(0); //current property access(値を参照)
  console.log(ref);

  ref.current = 123; //✖

  function handleClick() {
    ref.current = ref.current + 1; //not rendering
    alert("You clicked " + ref.current + " times!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>{ref.current}</p>
    </div>
  );
};

export default Lesson3_1;
