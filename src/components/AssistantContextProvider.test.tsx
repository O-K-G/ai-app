import { render, screen } from "@testing-library/react";
import { useChat } from "ai/react";
import AssistantContextProvider, {
  AssistantContext,
} from "@components/AssistantContextProvider";

// Mock the `useChat` hook from the `ai/react` package
jest.mock("ai/react", () => ({
  useChat: jest.fn(),
}));

describe("AssistantContextProvider", () => {
  it("provides the correct context value to children", () => {
    const mockChatData = {
      messages: ["Hello", "How can I help you?"],
      input: "Hi",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      append: jest.fn(),
    };

    // Mock the `useChat` hook to return `mockChatData`
    (useChat as jest.Mock).mockReturnValue(mockChatData);

    const TestComponent = () => {
      return (
        <AssistantContext.Consumer>
          {(value) => {
            return (
              <>
                <div>{value.messages.join(", ")}</div>
                <div>{value.input}</div>
              </>
            );
          }}
        </AssistantContext.Consumer>
      );
    };

    render(
      <AssistantContextProvider>
        <TestComponent />
      </AssistantContextProvider>
    );

    // Assert that the context value is correctly provided to children
    expect(screen.getByText("Hello, How can I help you?")).toBeInTheDocument();
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });
});
