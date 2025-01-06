import { AssistantContextProviderProps } from "@constants/interfaces";
import { createContext } from "react";
import { useChat } from "ai/react";

/** This component is the app's context with all the chat data. */

export const AssistantContext = createContext({
  messages: [],
  input: "",
  handleInputChange: () => null,
  handleSubmit: () => null,
  append: (p0: { content: string; role: string }) => null,
});

export default function AssistantContextProvider({
  children,
}: AssistantContextProviderProps) {
  const chatData = useChat();

  return (
    // FIXME: type
    <AssistantContext.Provider value={chatData as never}>
      {children}
    </AssistantContext.Provider>
  );
}
