import { useState } from "react";

// const someFunction = () => {
//   console.log("function!");
// };

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(26);
  const [name, setName] = useState<string>("ShinCode");
  // const [todos, setTodos] = useState(someFunction);

  console.log("rendered!");

  const handleClick = () => {
    // setAge(age + 1); //setAge(42 + 1)
    // setAge(age + 1); //setAge(42 + 1)
    // setAge(age + 1); //setAge(42 + 1)

    setAge((prevAge) => prevAge + 1);
    console.log(age);
    setAge((prevAge) => prevAge + 1);
    console.log(age);
    setAge((prevAge) => prevAge + 1);
    console.log(age);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={handleClick}
      >
        Add Age
      </button>
      <p>
        Hello, {name}. You are {age}
      </p>
    </div>
  );
};

export default Lesson1_1;
