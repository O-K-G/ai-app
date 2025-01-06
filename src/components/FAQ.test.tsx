import { render, screen, fireEvent } from "@testing-library/react";
import Faq from "@components/FAQ";
import { AssistantContext } from "@components/AssistantContextProvider";
import FAQ_LIST from "@constants/faq-list.json"; // Make sure you import this properly for your tests
import { DIALOG_TEST_ID } from "@components/Dialog";

// Mocking the Dialog component and its methods
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

jest.mock("ai/react", () => ({
  useChat: jest.fn(),
}));

describe("Faq component", () => {
  it("renders the FAQ button", () => {
    const mockChatData = {
      messages: [
        { content: "Hello", role: "user", id: "1" },
        { content: "How can I help you?", role: "assistant", id: "2" },
      ],
      input: "Hi",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      append: jest.fn(),
    };

    render(
      <AssistantContext.Provider
        value={{
          messages: mockChatData.messages,
          input: mockChatData.input,
          handleInputChange: mockChatData.handleInputChange,
          handleSubmit: mockChatData.handleSubmit,
          append: mockChatData.append,
        }}
      >
        <Faq />
      </AssistantContext.Provider>
    );

    // Check if the FAQ button is rendered correctly
    const faqButton = screen.getByLabelText("Frequently Asked Questions");
    expect(faqButton).toBeInTheDocument();
  });

  it("opens the dialog when the FAQ button is clicked", () => {
    const mockChatData = {
      messages: [
        { content: "Hello", role: "user", id: "1" },
        { content: "How can I help you?", role: "assistant", id: "2" },
      ],
      input: "Hi",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      append: jest.fn(),
    };

    render(
      <AssistantContext.Provider
        value={{
          messages: mockChatData.messages,
          input: mockChatData.input,
          handleInputChange: mockChatData.handleInputChange,
          handleSubmit: mockChatData.handleSubmit,
          append: mockChatData.append,
        }}
      >
        <Faq />
      </AssistantContext.Provider>
    );

    // Find the FAQ button and click it
    const faqButton = screen.getByLabelText("Frequently Asked Questions");
    fireEvent.click(faqButton);

    // Check if the dialog is opened (by checking the showModal method was called)
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
  });

  it("renders the list of FAQ questions inside the dialog", () => {
    const mockChatData = {
      messages: [
        { content: "Hello", role: "user", id: "1" },
        { content: "How can I help you?", role: "assistant", id: "2" },
      ],
      input: "Hi",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      append: jest.fn(),
    };

    render(
      <AssistantContext.Provider
        value={{
          messages: mockChatData.messages,
          input: mockChatData.input,
          handleInputChange: mockChatData.handleInputChange,
          handleSubmit: mockChatData.handleSubmit,
          append: mockChatData.append,
        }}
      >
        <Faq />
      </AssistantContext.Provider>
    );

    // Click the FAQ button to show the dialog
    const faqButton = screen.getByLabelText("Frequently Asked Questions");
    fireEvent.click(faqButton);

    // Check if the dialog is in the document
    const dialog = screen.getByTestId(DIALOG_TEST_ID);
    expect(dialog).toBeInTheDocument();

    // Ensure FAQ questions are rendered inside the dialog
    FAQ_LIST.faqQuestions.forEach((faqQuestion) => {
      expect(screen.getByText(faqQuestion)).toBeInTheDocument();
    });
  });

  it("closes the dialog when a list item is clicked", () => {
    const mockChatData = {
      messages: [
        { content: "Hello", role: "user", id: "1" },
        { content: "How can I help you?", role: "assistant", id: "2" },
      ],
      input: "Hi",
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      append: jest.fn(),
    };

    render(
      <AssistantContext.Provider
        value={{
          messages: mockChatData.messages,
          input: mockChatData.input,
          handleInputChange: mockChatData.handleInputChange,
          handleSubmit: mockChatData.handleSubmit,
          append: mockChatData.append,
        }}
      >
        <Faq />
      </AssistantContext.Provider>
    );

    // Click the FAQ button to open the dialog
    const faqButton = screen.getByLabelText("Frequently Asked Questions");
    fireEvent.click(faqButton);

    // Find the first FAQ item and click it
    const faqItem = screen.getByText(FAQ_LIST.faqQuestions[0]);
    fireEvent.click(faqItem);

    // Ensure the dialog is closed (by checking the close method was called)
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledTimes(1);
  });
});
