import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SellerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate login API call
    console.log("Logging in with:", email, password);

    // Redirect to dashboard after successful login
    navigate("/seller-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg bg-white rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">Seller Login</h2>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleLogin}>
            Login
          </Button>

          <p className="text-sm text-center mt-3">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/seller-signup")}>
              Sign up
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
