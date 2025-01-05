import { InputProps } from "@constants/interfaces";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";

const PLACEHOLDER_DEFAULT_VALUE = "What would you like to ask?";

export default function Input({ placeholderValue }: InputProps) {
  const { input, handleInputChange } = useContext(AssistantContext);

  return (
    <div className="flex-center gap-4 h-16 font-roboto-regular">
      <input
        className="chat-input"
        value={input || ""}
        placeholder={placeholderValue || PLACEHOLDER_DEFAULT_VALUE}
        onChange={handleInputChange}
      />
      <button type="submit" className="submit-button">
        X
      </button>
    </div>
  );
}
