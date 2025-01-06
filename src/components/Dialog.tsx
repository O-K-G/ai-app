import CancelIcon from "@icons/Cxl-icon";
import { DialogProps } from "@constants/interfaces";

const CANCEL_BUTTON_ARIA_LABEL = "Cancel";

export default function Dialog({
  children,
  ref,
  title = "Dialog",
}: DialogProps) {
  return (
    <dialog
      ref={ref}
      className="bg-black/50 size-full backdrop-blur-xl text-white rounded-md p-4 shadow-blue-900 shadow-2xl"
    >
      <div className="min-h-10 flex flex-col items-start justify-center">
        <button
          className="w-10 h-full flex-center group rounded-full outline-none border-4 border-transparent focus:border-blue-500"
          type="button"
          aria-label={CANCEL_BUTTON_ARIA_LABEL}
          onClick={() => (ref.current as unknown as HTMLDialogElement).close()}
        >
          <CancelIcon className="h-full fill-gray-300 group-focus:fill-white" />
        </button>
        <h2 className="w-full text-center text-base lg:text-3xl underline font-semibold">
          {title}
        </h2>
      </div>
      {children}
    </dialog>
  );
}
