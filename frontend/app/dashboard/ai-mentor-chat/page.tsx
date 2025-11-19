import AIMentorChat from "@/components/AIpage";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AIMentorChatPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/");
  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  }

  return <AIMentorChat user={user} />;
}