"use client";

import { useState } from "react";
import { createUser } from "../services/userservices";

type Props = {
  onUserCreated: () => void;
};

export default function UserForm({ onUserCreated }: Props) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name.trim().length < 3) {
      alert("Name must be at least 3 characters.");
      return;
    }

    if (!form.email.endsWith("@gmail.com")) {
      alert("Email must end with @gmail.com");
      return;
    }

    await createUser(form);
    setForm({ name: "", email: "" });
    onUserCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}
