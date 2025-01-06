import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import Message from "@components/Message";

export default function Messages() {
  const { messages } = useContext(AssistantContext);

  if (messages.length > 0) {
    return (
      <div className="mb-4 w-full overflow-y-auto overflow-x-hidden">
        {messages.map((message) => {
          const { id, role, content } = message || {};

          return <Message key={id} role={role} content={content} />;
        })}
      </div>
    );
  }

  return null;
}
