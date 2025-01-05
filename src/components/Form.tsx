import { AssistantContext } from "@components/AssistantContextProvider";
import { FormProps } from "@constants/interfaces";
import { useContext } from "react";

export default function Form({ children }: FormProps) {
  const { handleSubmit } = useContext(AssistantContext);

  return <form onSubmit={handleSubmit}>{children}</form>;
}
