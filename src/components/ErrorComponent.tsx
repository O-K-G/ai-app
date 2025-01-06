import { ErrorComponentProps } from "@constants/interfaces";

export default function ErrorComponent({ buttonSlot }: ErrorComponentProps) {
  const TITLE = "Something went wrong!";

  return (
    <div className="h-screen w-screen flex-center flex-col font-roboto-regular">
      <h2>{TITLE}</h2>
      {buttonSlot}
    </div>
  );
}
