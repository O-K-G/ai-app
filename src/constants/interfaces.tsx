import { ReactNode } from "react";

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
