import { User } from "../types/user";
import { downloadUsersCSV } from "../utilis/csv";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Users List</h2>
        <button
          onClick={() => downloadUsersCSV(users)}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
        >
          Download CSV
        </button>
      </div>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user._id}
            className="p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <span className="font-medium">{user.name}</span> -{" "}
            <span className="text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
