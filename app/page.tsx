import SearchBar from "@/components/users/searchBar";
import { getPostsByUserId, getUsers } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="border p-6 rounded bg-white shadow text-center">
        <h1 className="text-2xl font-bold">User Posts Dashboard</h1>

        <p className="mt-2 text-sm">View users and explore their posts.</p>

        <Link
          href="/users"
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Go to Users Page
        </Link>
      </div>
    </main>
  );
}
