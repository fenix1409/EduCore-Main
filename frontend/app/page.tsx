"use server"
// Server Component
import Hero from "@/components/sections/hero"
import Preview from "@/components/sections/preview"
import Features from "@/components/sections/features"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"
import FAQ from "@/components/sections/faq"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"
import Background from "@/components/background"
import Header from "@/components/sections/header"
import { auth } from "@/lib/better-auth/auth"
import { headers } from "next/headers"
import AIChat from "@/components/sections/AI-chat"

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  const user = (() => {
    const s = session?.user;
    if (!s) return undefined;
    return {
      id: s.id,
      name: s.name,
      email: s.email,
    };
  })();

  return (
    <>
      <Background />
      <div className="relative mx-auto  px-4 sm:px-6 lg:px-8">
        {user ? (
          <Header user={user} />
        ) : (
          <Header />
        )}
        <Hero />
        {user ?
          <>
            <Preview />
            <AIChat />
          </>
          :
          null
        }
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        {!user ? <CTA /> : null}
        <Footer />
      </div>
    </>
  );
}
