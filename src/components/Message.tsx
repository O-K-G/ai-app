import { MessageProps } from "@constants/interfaces";

const USER_NAME = "You: ";
const ASSISTANT_NAME = "Mr. Visa-bot: ";

export default function Message({ role, content }: MessageProps) {
  const speaker = {
    user: USER_NAME,
    assistant: ASSISTANT_NAME,
  };

  return (
    <div className="flex items-start justify-start whitespace-pre-wrap">
      <span>{speaker[role as keyof typeof speaker]}</span>
      <span>{content}</span>
    </div>
  );
}
