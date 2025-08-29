import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Header/Navbar";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

import { fetchStoreById, fetchProductsByStoreId } from "../Storage/Store/storeAction";
import { followStore } from "../Storage/Follow/followAction";

//new chatbot integration
// Chat Widget Component
const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hello! How can I assist you today?" }]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:2000/api/chat/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([...newMessages, { from: "bot", text: data.reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([...newMessages, { from: "bot", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className="bg-gray-800 text-white w-14 h-14 rounded-full text-2xl shadow-lg hover:bg-black transition"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="mt-2 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[75%] ${
                  msg.from === "user" ? "bg-gray-800 text-white ml-auto" : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="bg-gray-200 text-black p-2 rounded-xl">Typing...</div>}
            <div ref={messagesEndRef}></div>
          </div>

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
              className="bg-gray-800 text-white rounded-r-xl px-4 hover:bg-black"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Shop Page
const ShopPage = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const { store, loading, error } = useSelector((state) => state);

  const [isFollowed, setIsFollowed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const form = useRef();

  useEffect(() => {
    const fetchData = async () => {
      Swal.fire({
        title: "Loading...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        await dispatch(fetchStoreById(storeId));
        await dispatch(fetchProductsByStoreId(storeId));
      } catch (err) {
        console.error(err);
      } finally {
        Swal.close();
      }
    };
    fetchData();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email) setUserEmail(storedUser.email);
  }, [dispatch, storeId]);

  useEffect(() => {
    if (error) Swal.fire({ icon: "error", title: "Oops...", text: error });
  }, [error]);

  const handleFollow = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      Swal.fire({ title: "Login Required", text: "Please log in to follow this store", icon: "warning" }).then((res) => {
        if (res.isConfirmed) window.location.href = "/LoginPage";
      });
      return;
    }
    dispatch(followStore(storeId))
      .then(() => setIsFollowed(true))
      .catch(() => Swal.fire({ icon: "error", title: "Could not follow store" }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!userEmail.trim() || !message.trim()) {
      Swal.fire("Warning", "Please enter your email and message.", "warning");
      return;
    }

    emailjs
      .sendForm(
        "service_17a9nnp",
        "template_avwt63k",
        form.current,
        "5PzYC7qX_TMWGOy2B"
      )
      .then(
        () => {
          Swal.fire("Success", "Message sent successfully!", "success");
          setMessage("");
          setIsModalOpen(false);
        },
        (err) => {
          console.error(err);
          Swal.fire("Error", "Failed to send message", "error");
        }
      );
  };

  if (loading || !store?.store) return null;
  const { store_name, business_email, products: storeProducts = [] } = store.store;

  return (
<<<<<<< HEAD
    <div className="p-6 max-w-7xl mx-auto">
      {/* Store Header */}
      <div className="flex items-center gap-4 p-4 border rounded-xl shadow-sm bg-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
          alt={store_name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{store_name}</h2>
          <p className="text-gray-500 text-sm">1.3k followers</p>
          <p className="text-gray-500 text-sm">{business_email}</p>
        </div>

        <button
          className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
            isFollowed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
          }`}
          onClick={handleFollow}
          disabled={isFollowed}
        >
          {isFollowed ? "Followed" : "Follow"}
        </button>

        <button
          className="ml-3 px-6 py-2 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Message
        </button>
      </div>

      {/* Product List */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        {storeProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {storeProducts.map((product) => (
              <div
                key={product.product_id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.product_image || "default-product-image.jpg"}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p className="text-xl font-bold text-black mt-2">Rs. {product.price}</p>
              </div>
            ))}
=======
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        {/* Store Header */}
        <div className="flex items-center gap-4 p-4 bg-white border shadow-sm rounded-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
            alt={store_name}
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{store_name}</h2>
            <p className="text-sm text-gray-500">1.3k followers</p>
            <p className="text-sm text-gray-500">{business_email}</p>
>>>>>>> 7d64dfe96b0e99c76ee9270404a7aa82107b8d14
          </div>
          <button
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${isFollowed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
              }`}
            onClick={handleFollow}
            disabled={isFollowed}
          >
            {isFollowed ? "Followed" : "Follow"}
          </button>
        </div>

        {/* Product List */}
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-semibold">Products</h2>
          {storeProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {storeProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="p-4 transition bg-white border rounded-lg shadow-sm hover:shadow-md"
                >
                  <img
                    src={product.product_image || "default-product-image.jpg"}
                    alt={product.name}
                    className="object-cover w-full h-40 mb-3 rounded"
                  />
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="mt-2 text-xl font-bold text-black">Rs. {product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products available at the moment.</p>
          )}
        </div>
      </div>

      {/* Message Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Send Message to {store_name}</h3>
            <form ref={form} onSubmit={handleSendEmail} className="flex flex-col gap-3">
              <input
                type="email"
                name="user_email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="email"
                value={business_email}
                readOnly
                className="w-full border rounded-lg p-2 bg-gray-100"
              />
              <textarea
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default ShopPage;
