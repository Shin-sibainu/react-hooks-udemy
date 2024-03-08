import { useRef } from "react";

const Lesson3_3 = () => {
  //   const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log("rendered!");

  const handleClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input type="text" className="border-b" ref={inputRef} />

      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
