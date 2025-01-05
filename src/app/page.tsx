"use client";

import AssistantContextProvider from "@components/AssistantContextProvider";
import Messages from "@components/Messages";
import Form from "@components/Form";
import Input from "@components/Input";
import Faq from "@components/FAQ";

export default function Home() {
  return (
    <AssistantContextProvider>
      <main>
        <Faq />
        <div className="bg-radial-gradient flex flex-col items-center justify-end size-full lg:w-1/2 lg:mx-auto min-h-screen max-h-screen overflow-hidden p-4">
          <Messages />
          <Form>
            <Input />
          </Form>
        </div>
      </main>
    </AssistantContextProvider>
  );
}
