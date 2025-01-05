import { InputProps } from "@constants/interfaces";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";

const PLACEHOLDER_DEFAULT_VALUE = "What would you like to ask?";

export default function Input({ placeholderValue }: InputProps) {
  const { input, handleInputChange, handleSubmit } =
    useContext(AssistantContext);

  return (
    <div className="flex items-center justify-center gap-4 h-16">
      <input
        className="p-2 h-full w-full text-black rounded-md outline-none border-4 border-transparent focus:border-4 focus:border-blue-500"
        value={input || ""}
        placeholder={placeholderValue || PLACEHOLDER_DEFAULT_VALUE}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="h-full min-w-8 w-16 rounded-md outline-none border-4 border-white focus:border-4 focus:border-blue-500"
      >
        X
      </button>
    </div>
  );
}
