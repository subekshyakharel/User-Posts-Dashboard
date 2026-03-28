import { getUsers } from "@/lib/api";
import UsersPageClient from "./usersPageClient";

const UsersPage = async () => {
  try {
    const users = await getUsers();
    return <UsersPageClient initialUsers={users} />;
  } catch (error) {
    return <p>Something went wrong.</p>;
  }
};

export default UsersPage;
