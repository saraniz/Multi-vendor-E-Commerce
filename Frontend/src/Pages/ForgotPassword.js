import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../Storage/Auth/UserAction"; // ✅ Adjust path as needed

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, forgotPasswordMessage } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(forgotPassword(email));
  };

  // Show toast and redirect after success
  React.useEffect(() => {
    if (submitted && forgotPasswordMessage) {
      toast.success(forgotPasswordMessage);
      navigate("/LoginPage");
    } else if (submitted && error) {
      toast.error(error);
    }
  }, [forgotPasswordMessage, error, submitted, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="mb-6 text-2xl font-bold text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-white bg-blue-700 rounded hover:bg-blue-800"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
