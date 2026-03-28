import Link from "next/link";
import { User } from "@/types/user";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-bold">{user.name}</h2>

      <p>{user.email}</p>

      <p>
        Company: <strong>{user.company.name}</strong>
      </p>

      <Link
        href={`/users/${user.id}`}
        className="inline-block mt-3 bg-black text-white px-3 py-1 rounded"
      >
        View Posts
      </Link>
    </div>
  );
};

export default UserCard;
