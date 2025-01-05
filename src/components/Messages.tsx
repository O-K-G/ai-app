import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import Message from "@components/Message";

export default function Messages() {
  const { messages } = useContext(AssistantContext);

  return messages.map((message) => {
    const { id, role, content } = message || {};

    if (messages.length > 0) {
      return <Message key={id} role={role} content={content} />;
    }

    return null;
  });
}
