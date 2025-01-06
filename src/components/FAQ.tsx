import { useRef } from "react";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import FaqIcon from "@icons/FAQ-icon";
import FAQ_LIST from "@constants/faq-list.json";
import { ListItemProps } from "@constants/interfaces";
import Dialog from "@components/Dialog";

const DIALOG_TITLE = "Frequently Asked Questions";

function ListItem({ value = "", onClick }: ListItemProps) {
  const { append } = useContext(AssistantContext);

  return (
    <li>
      <button
        className="text-left p-2 text-white outline-none text-lg mb-2 border-2 border-transparent focus:border-blue-500 rounded-md"
        type="button"
        onClick={() => {
          append({
            content: value,
            role: "user",
          });
          onClick?.();
        }}
      >
        {value}
      </button>
    </li>
  );
}

export default function Faq() {
  const { faqQuestions } = FAQ_LIST;
  const dialogRef = useRef(null);

  return (
    <div className="absolute top-0 left-0 ml-4 mt-10 lg:mt-4">
      <button
        className="flex-center outline-none border-4 border-transparent focus:lg:border-blue-500 group rounded-xl"
        aria-label={DIALOG_TITLE}
        type="button"
        onClick={() =>
          (dialogRef.current as unknown as HTMLDialogElement).showModal()
        }
      >
        <FaqIcon className="size-16 fill-gray-300 group-focus:fill-white bg-black rounded-xl" />
      </button>
      <Dialog ref={dialogRef} title={DIALOG_TITLE}>
        <ul className="p-4 w-fit">
          {faqQuestions?.map((str) => (
            <ListItem
              key={str}
              value={str}
              onClick={() =>
                (dialogRef.current as unknown as HTMLDialogElement).close()
              }
            />
          ))}
        </ul>
      </Dialog>
    </div>
  );
}
