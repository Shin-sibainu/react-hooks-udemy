import { useRef } from "react";
import { Message } from "./Lesson6_1";
import { useOptimistic } from "react";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  // event: React.FormEvent<HTMLFormElement>
  const handleSubmit = async () => {
    // event.preventDefault();
    // const formData = new FormData(formRef.current!);
    // await sendMessage(formData);
    // formRef.current?.reset();

    const formData = new FormData(formRef.current!);
    addOptimisticMessage(formData);
    formRef.current?.reset();
    await sendMessage(formData);
  };

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: Message) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      {/* {messages.map((message, index: number) => (
        <div key={index}>{message.text}</div>
      ))} */}
      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>
          {message.text} {!!message.sending && <small>(Sending...)</small>}
        </div>
      ))}
      <form action={handleSubmit} ref={formRef}>
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
