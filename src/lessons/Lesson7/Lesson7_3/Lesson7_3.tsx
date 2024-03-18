import { useState, useTransition } from "react";

const Lesson7_3 = () => {
  const [text, setText] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setText(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
        className="border-4 px-3 py-4 rounded-md"
      />

      <p className="mt-1 text-3xl">{text}</p>
    </div>
  );
};

export default Lesson7_3;
