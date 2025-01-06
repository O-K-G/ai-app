/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { ReactNode, RefObject } from "react";

export interface AssistantContextProviderProps {
  children: ReactNode;
}

export interface AssistantContextType {
  messages: { content: string; role: string; id: string }[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  append: (e: { content: string; role: string }) => void;
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

export interface ErrorComponentProps {
  buttonSlot: ReactNode;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
