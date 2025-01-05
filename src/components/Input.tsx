import { InputProps } from "@constants/interfaces";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import SubmitIcon from "@icons/Submit-icon";

const PLACEHOLDER_DEFAULT_VALUE = "What would you like to ask?";
const SUBMIT_ARIA_LABEL = "Submit";
const LABEL_VALUE = "Write your question here.";

export default function Input({ placeholderValue }: InputProps) {
  const { input, handleInputChange } = useContext(AssistantContext);

  return (
    <div className="flex-center gap-4 h-16 font-roboto-regular">
      <label htmlFor="chat-input" className="sr-only">
        {LABEL_VALUE}
      </label>
      <input // TODO: Add sanitation and validate with Zod.
        className="chat-input"
        value={input || ""}
        placeholder={placeholderValue || PLACEHOLDER_DEFAULT_VALUE}
        onChange={handleInputChange}
        type="text"
        id="chat-input"
        minLength={1}
        maxLength={100}
      />
      <button
        type="submit"
        aria-label={SUBMIT_ARIA_LABEL}
        className="group submit-button"
      >
        <SubmitIcon className="fill-gray-300 group-focus:fill-white h-full min-w-8 w-16" />
      </button>
    </div>
  );
}
