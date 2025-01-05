import { ReactNode, RefObject } from "react";

export interface AssistantContextProviderProps {
  children: ReactNode;
}

export interface FormProps {
  children: ReactNode;
}

export interface InputProps {
  placeholderValue?: string;
}

export interface MessageProps {
  role: string;
  content: string;
}

export interface IconsProps {
  className?: string;
}

export interface ListItemProps {
  value: string;
  onClick: () => void;
}

export interface DialogProps {
  children: ReactNode;
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
}
