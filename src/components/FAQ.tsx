import { useState } from "react";
import { AssistantContext } from "@components/AssistantContextProvider";
import { useContext } from "react";
import FaqIcon from "@icons/FAQ-icon";
import FAQ_LIST from "@constants/faq-list.json";
import { ListItemProps } from "@constants/interfaces";

function ListItem({ value = "", onClick }: ListItemProps) {
  const { append } = useContext(AssistantContext);

  return (
    <li>
      <button
        className="text-left"
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
  const [open, setOpen] = useState(false);
  const { faqQuestions } = FAQ_LIST;

  return (
    <div className="absolute top-0 left-0 m-4">
      <button
        className="flex-center lg:hidden outline-none group"
        type="button"
        onClick={() => setOpen((prevValue) => !prevValue)}
      >
        <FaqIcon className="size-16 fill-gray-300 group-focus:fill-white bg-black rounded-xl" />
      </button>
      <ul
        data-open={open}
        className="hidden data-[open=true]:block lg:data-[open=false]:block bg-black p-4"
      >
        {faqQuestions?.map((str) => (
          <ListItem
            key={str}
            value={str}
            onClick={() => {
              if (open) {
                setOpen(false);
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
}
