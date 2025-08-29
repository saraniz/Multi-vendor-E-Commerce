import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // { from: "bot", text: "Hello! How can I help you today?" } // Initial welcome message
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:2000/api/chat/chats", { message: input });

      setMessages([
        ...newMessages,
        { from: "bot", text: response.data.reply }
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        { from: "bot", text: "Oops! Something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      <button
        className="bg-gray-800 text-white w-14 h-14 rounded-full text-2xl shadow-lg hover:bg-gray-900 transition"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="mt-2 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-gray-800 text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="bg-gray-200 text-black p-2 rounded-xl">Typing...</div>}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-300 rounded-l-xl p-2 outline-none"
              placeholder="Ask me about our services..."
            />
            <button
              onClick={handleSend}
              className="bg-gray-800 text-white rounded-r-xl px-4 hover:bg-gray-900"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
