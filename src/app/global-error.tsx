"use client";

import ErrorComponent from "@components/ErrorComponent";
import { ErrorProps } from "@constants/interfaces";
import BotIcon from "@icons/Bot-icon";

export const BUTTON_TEXT = "Click to try again";

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <html>
      <body>
        <ErrorComponent
          buttonSlot={
            <button type="button" className="group" onClick={reset}>
              <BotIcon className="fill-gray-300 group-focus:fill-white h-24" />
              {BUTTON_TEXT}
            </button>
          }
        />
      </body>
    </html>
  );
}
