import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import Message from "@components/Message";

export default function Messages() {
  const { messages } = useContext(AssistantContext);

  if (messages.length > 0) {
    return (
      <div className="mb-4 w-full overflow-y-scroll overflow-x-hidden lg:border lg:border-white lg:px-2 rounded-md">
        {messages.map((message) => {
          const { id, role, content } = message || {};

          return <Message key={id} role={role} content={content} />;
        })}
      </div>
    );
  }

  return null;
}
