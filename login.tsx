import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHistory } from "react-router-dom";  // For routing

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    // Simple mock authentication
    if (username === "admin" && password === "password123") {
      // Redirect to the homepage upon successful login
      history.push("/home");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-[#2d2e3e] rounded-xl p-6 shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-white text-center mb-6">Login to StreamX</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6"
        />
        <Button
          className="w-full py-2 bg-orange-400 hover:bg-orange-500"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
