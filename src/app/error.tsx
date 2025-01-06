"use client";

import { ErrorProps } from "@constants/interfaces";
import { useEffect } from "react";
import ErrorComponent from "@components/ErrorComponent";
import { BUTTON_TEXT } from "@/app/global-error";
import BotIcon from "@icons/Bot-icon";

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="h-screen w-screen flex-center flex-col">
      <ErrorComponent
        buttonSlot={
          <button
            type="button"
            className="group flex-center flex-col"
            onClick={reset}
          >
            <BotIcon className="fill-gray-300 group-focus:fill-white h-24" />
            {BUTTON_TEXT}
          </button>
        }
      />
    </div>
  );
}
