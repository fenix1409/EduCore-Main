// "use client"
// import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardNav from "@/components/dashboard/dashboard-nav"
import DashboardContent from "@/components/dashboard/dashboard-content"
import { auth } from "@/lib/better-auth/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) redirect('/');
  return (
    <div className="min-h-screen bg-[#0C0C10]">
      {/* <DashboardHeader /> */}
      <div className="flex">
        {/* <DashboardNav /> */}
        <DashboardContent />
      </div>
    </div>
  )
}
