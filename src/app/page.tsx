"use client";

import AssistantContextProvider from "@components/AssistantContextProvider";
import Messages from "@components/Messages";
import Form from "@components/Form";
import Input from "@components/Input";

export default function Home() {
  return (
    <AssistantContextProvider>
      <main>
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
          <Messages />
          <Form>
            <Input />
          </Form>
        </div>
      </main>
    </AssistantContextProvider>
  );
}
