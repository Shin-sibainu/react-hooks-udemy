import { useRef, useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    await sendMessage(formData);
    formRef.current?.reset();
  };

  const [optimisticMessages, addOptimisticMesage] = useOptimistic<
    Message | Message[]
  >(messages, (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true,
    },
  ]);

  return (
    <div>
      {messages.map((message, index: number) => (
        <div key={index}>{message.text}</div>
      ))}
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
