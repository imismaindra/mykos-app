"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    const dummy_username = "admin@admin.com";
    const dummy_password = "admin";
    if (username === dummy_username && password === dummy_password) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <section className="flex flex-col gap-3 max-w-sm mx-auto mt-20">
      <h1 className="text-xl font-bold">Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
