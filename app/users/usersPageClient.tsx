"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "@/components/users/searchBar";
import UserList from "@/components/users/userList";
import { RootState, AppDispatch } from "@/store/store";
import { User } from "@/types/user";
import { setSearchTerm, setUser } from "@/store/slices/userSlice";

interface UsersPageClientProps {
  initialUsers: User[];
}

const UsersPageClient = ({ initialUsers }: UsersPageClientProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, searchTerm } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(setUser(initialUsers));
  }, [dispatch, initialUsers]);

  const filteredUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term),
    );
  }, [users, searchTerm]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            User Posts Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            View users, search instantly, and explore their posts.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={searchTerm}
            onChange={(value) => dispatch(setSearchTerm(value))}
          />
        </div>

        <UserList users={filteredUsers} />
      </div>
    </main>
  );
};

export default UsersPageClient;
