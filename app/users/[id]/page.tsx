import UserPostsClient from "./userPostsClient";

export default async function UserPostsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <UserPostsClient userId={Number(id)} />;
}
