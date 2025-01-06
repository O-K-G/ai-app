import { createContext } from "react";
import { useChat } from "ai/react";
import {
  AssistantContextProviderProps,
  AssistantContextType,
} from "@constants/interfaces";

/** This component is the app's context with all the chat data. */

export const AssistantContext = createContext<AssistantContextType>({
  messages: [],
  input: "",
  handleInputChange: () => null,
  handleSubmit: () => null,
  append: () => null,
});

export default function AssistantContextProvider({
  children,
}: AssistantContextProviderProps) {
  const chatData = useChat();

  return (
    <AssistantContext.Provider value={chatData as AssistantContextType}>
      {children}
    </AssistantContext.Provider>
  );
}
