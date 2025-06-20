"use client";

import { useEffect, useState } from "react";
import { User } from "./types/user";
import { fetchUsers } from "./services/userservices";
import UserForm from "./components/userform";
import UserList from "./components/userlist";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <UserForm onUserCreated={loadUsers} />

      <h2 className="text-xl font-semibold mt-8 mb-2"></h2>
      
    
      <UserList users={users} />
    </main>
  );
}
