import { MessageProps } from "@constants/interfaces";

const USER_NAME = "You:";
const ASSISTANT_NAME = "Mr. Visa-bot:";

export default function Message({ role, content }: MessageProps) {
  const assistantClassName = role === "assistant" ? "mb-4" : "";

  const speaker = {
    user: USER_NAME,
    assistant: ASSISTANT_NAME,
  };

  return (
    <div
      className={`${assistantClassName} bg-black/30 text-white p-4 rounded-xl w-fit mb-2 font-roboto-regular`}
    >
      <span className="font-bold">{speaker[role as keyof typeof speaker]}</span>
      &nbsp;
      {content}
    </div>
  );
}
