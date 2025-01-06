"use client";

import AssistantContextProvider from "@components/AssistantContextProvider";
import Messages from "@components/Messages";
import Form from "@components/Form";
import Input from "@components/Input";
import Faq from "@components/FAQ";

const MAIN_TITLE = "IMMIGRATION BOT DEMO APP";

export default function Home() {
  return (
    <AssistantContextProvider>
      <main>
        <Faq />
        <div className="bg-radial-gradient flex flex-col items-center justify-between size-full lg:w-1/2 lg:mx-auto min-h-svh lg:min-h-dvh max-h-svh lg:max-h-dvh overflow-hidden p-4">
          <h1 className="text-white text-base font-roboto-regular mb-2 uppercase font-bold">
            {MAIN_TITLE}
          </h1>
          <div className="flex flex-col items-center justify-end w-full overflow-hidden">
            <Messages />
            <Form>
              <Input />
            </Form>
          </div>
        </div>
      </main>
    </AssistantContextProvider>
  );
}
