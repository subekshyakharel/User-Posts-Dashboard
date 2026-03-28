import { User } from "@/types/user";
import UserCard from "./userCard";

const UserList = ({ users }: { users: User[] }) => {
  if (users.length === 0) {
    return <p className="text-sm text-gray-600">No users found.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
