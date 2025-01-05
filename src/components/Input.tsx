import { InputProps } from "@constants/interfaces";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";

const PLACEHOLDER_DEFAULT_VALUE = "What's your question?";

export default function Input({ placeholderValue }: InputProps) {
  const { input, handleInputChange } = useContext(AssistantContext);

  return (
    <input
      className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
      value={input || ""}
      placeholder={placeholderValue || PLACEHOLDER_DEFAULT_VALUE}
      onChange={handleInputChange}
    />
  );
}
