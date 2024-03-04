import { useState } from "react";
import { useWindowListener } from "./useWindowListener";

const Lesson2_1 = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   function handleMove(e) {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   }
  //   console.log("renderd");
  //   window.addEventListener("pointermove", handleMove);

  //   return () => {
  //     window.removeEventListener("pointermove", handleMove);
  //   };
  // }, []);

  useWindowListener<PointerEvent>("pointermove", (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
