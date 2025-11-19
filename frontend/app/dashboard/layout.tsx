import Header from "@/components/sections/header";
import DashboardNav from "@/components/dashboard/dashboard-nav";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) redirect('/');


    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }

    return (
        <div className="min-h-screen bg-[#0C0C10]">
            <Header user={user} />
            <div className="flex">
                <DashboardNav />
                <main className="flex-1 overflow-y-auto pt-4">
                    <div className="container px-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Layout
