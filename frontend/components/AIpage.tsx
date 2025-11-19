"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Paperclip } from "lucide-react";

export default function AIMentorChat({ user, }: { user?: { name?: string }; }) {
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; content: string }[]
  >([
    {
      role: "ai",
      content: `👋 Hi ${user?.name || "student"}! I'm your AI Mentor. What would you like to learn today?`,
    },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.content })),
            { role: "user", content: input },
          ],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // show error message in chat
        const errorText = data?.error?.message || JSON.stringify(data?.error) || "Error generating response.";
        setMessages((prev) => [...prev, { role: "ai" as const, content: `Error: ${errorText}` }]);
        return;
      }

      setMessages((prev) => [...prev, { role: "ai" as const, content: data.reply }]);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) => [...prev, { role: "ai" as const, content: "Error generating response." }]);
    }
  };


  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#121212]/90 backdrop-blur p-4 text-center">
        <h1 className="text-lg font-semibold tracking-wide">Educora AI Mentor</h1>
        <p className="text-xs text-zinc-400">Powered by Educora Intelligence</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "ai" && (
              <div className="mt-1">
                <div className="bg-white/10 p-2 rounded-full">
                  <Bot className="size-4 text-cyan-400" />
                </div>
              </div>
            )}

            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed break-words ${msg.role === "user"
                ? "bg-cyan-500 text-white"
                : "bg-white/5 border border-white/10 text-zinc-100"
                }`}
              dangerouslySetInnerHTML={{ __html: msg.content }}
            />

            {msg.role === "user" && (
              <div className="mt-1">
                <div className="bg-white/10 p-2 rounded-full">
                  <User className="size-4 text-violet-400" />
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </main>

      <footer className="border-t border-white/10 bg-[#121212]/90 backdrop-blur p-4">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <button className="shrink-0 rounded-full p-2 hover:bg-white/10 transition">
            <Paperclip className="size-4 text-zinc-400" />
          </button>

          <input
            type="text"
            placeholder="Ask Educora AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
          />

          <button
            disabled={!input.trim()}
            onClick={handleSend}
            className={`p-2 rounded-full transition ${input.trim()
              ? "bg-cyan-500 hover:bg-cyan-600"
              : "bg-cyan-500/40 cursor-not-allowed"
              }`}
          >
            <Send className="size-4 text-white" />
          </button>
        </div>
      </footer>
    </div>
  );
}