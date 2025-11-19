"use client"

import { useState } from "react"
import { Bot, Send, Paperclip, Mic, Brain } from "lucide-react"

interface Message {
    id: string
    type: "user" | "ai"
    content: string
    timestamp: string
}

const initialMessages: Message[] = [
    {
        id: "1",
        type: "ai",
        content:
            "Hi! I'm your AI Mentor. Ask me to explain concepts, generate practice tasks, or plan your study sessions.",
        timestamp: "10:02 AM",
    },
    {
        id: "2",
        type: "user",
        content: "Can you explain Python variables with a quick example?",
        timestamp: "10:03 AM",
    },
    {
        id: "3",
        type: "ai",
        content: `In Python, a variable is a name that refers to a value:

# Assign a value
x = 42

# Use the variable
print(x + 8)  # 50

Variables are dynamically typed—no need to declare a type. Want a quick practice task?`,
        timestamp: "10:03 AM",
    },
]

const threads = [
    { title: "Python variables basics", time: "Today" },
    { title: "Big-O notation intro", time: "Yesterday" },
    { title: "SQL joins practice", time: "2d" },
]

export default function AIChat() {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSendMessage = async () => {
        if (!input.trim()) return

        const newMessage: Message = {
            id: Date.now().toString(),
            type: "user",
            content: input,
            timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
        }

        setMessages([...messages, newMessage])
        setInput("")
        setIsLoading(true)

        // Simulate AI response
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: "ai",
                content: "That's a great question! Let me help you understand that better...",
                timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
            }
            setMessages((prev) => [...prev, aiMessage])
            setIsLoading(false)
        }, 1000)
    }

    return (
        <section className="mt-12 max-w-6xl mx-auto">
            <div
                className="relative overflow-hidden rounded-2xl p-px"
                style={{
                    background: "linear-gradient(120deg, rgba(0,212,255,0.45), rgba(123,97,255,0.45))",
                    boxShadow: "0 0 24px rgba(0,212,255,0.12), 0 0 36px rgba(123,97,255,0.10)",
                }}
            >
                {/* Decorative light lines */}
                <div className="pointer-events-none absolute -top-20 left-1/3 h-40 w-[120%] -rotate-6 opacity-40">
                    <div
                        className="h-px w-full"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(123,97,255,0), rgba(123,97,255,0.6), rgba(0,212,255,0.8), rgba(123,97,255,0.6), rgba(123,97,255,0))",
                        }}
                    />
                    <div
                        className="mt-6 h-px w-full blur"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(123,97,255,0), rgba(0,212,255,0.35), rgba(123,97,255,0.35), rgba(0,212,255,0.35), rgba(123,97,255,0))",
                        }}
                    />
                </div>

                <div className="rounded-2xl bg-black/60 backdrop-blur-xl ring-1 ring-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Sidebar - Threads */}
                        <aside className="hidden lg:flex lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/10 p-6 flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <Brain className="size-4 text-cyan-300" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium">Threads</div>
                                    <div className="text-xs text-zinc-400">Recent conversations</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {threads.map((thread, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-full text-left rounded-lg px-3 py-2 transition ${idx === 0 ? "bg-white/5 ring-1 ring-white/10" : "ring-1 ring-transparent hover:ring-white/10 hover:bg-white/5"}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">{thread.title}</span>
                                            <span className="text-[10px] text-zinc-500">{thread.time}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* Chat Column */}
                        <div className="col-span-1 lg:col-span-9 flex flex-col">
                            {/* Header */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                            <Bot className="size-4 text-cyan-300" />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-xl sm:text-2xl font-semibold tracking-tight"
                                                style={{ fontFamily: "Space Grotesk, system-ui" }}
                                            >
                                                AI Mentor
                                            </h3>
                                            <p className="text-xs sm:text-sm text-zinc-400">
                                                Ask anything or get personalized learning help.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Glowing divider */}
                                <div className="relative mt-4">
                                    <div
                                        className="h-[2px] w-full"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(123,97,255,0), rgba(123,97,255,0.85), rgba(0,212,255,0.85), rgba(123,97,255,0.85), rgba(123,97,255,0))",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 blur opacity-60"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(123,97,255,0), rgba(0,212,255,0.45), rgba(123,97,255,0.45), rgba(0,212,255,0.45), rgba(123,97,255,0))",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="relative flex-1 overflow-hidden">
                                <div className="px-6 pb-28 md:pb-32 space-y-4 overflow-y-auto h-[400px] md:h-[520px]">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex items-start gap-3 ${message.type === "user" ? "justify-end" : ""}`}
                                        >
                                            {message.type === "ai" && (
                                                <div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                                                    <Brain className="size-4 text-cyan-300" />
                                                </div>
                                            )}
                                            <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : ""}`}>
                                                {message.type === "ai" ? (
                                                    <div
                                                        className="rounded-2xl p-[1px]"
                                                        style={{
                                                            background: "linear-gradient(120deg, rgba(0,212,255,0.25), rgba(123,97,255,0.25))",
                                                        }}
                                                    >
                                                        <div className="rounded-2xl bg-black/50 ring-1 ring-white/10 p-4 shadow-[0_10px_30px_rgba(123,97,255,0.12)]">
                                                            <p className="text-sm text-zinc-200 whitespace-pre-wrap">{message.content}</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="rounded-2xl p-[1px] ml-auto"
                                                        style={{
                                                            background: "linear-gradient(120deg, #00D4FF, #7B61FF)",
                                                            boxShadow: "0 8px 28px rgba(0,212,255,0.18)",
                                                        }}
                                                    >
                                                        <div
                                                            className="rounded-2xl px-4 py-3"
                                                            style={{
                                                                background: "linear-gradient(120deg, rgba(0,212,255,0.25), rgba(123,97,255,0.25))",
                                                            }}
                                                        >
                                                            <p className="text-sm text-white">{message.content}</p>
                                                        </div>
                                                    </div>
                                                )}
                                                <div
                                                    className={`mt-1 text-[11px] text-zinc-500 ${message.type === "user" ? "text-right" : ""}`}
                                                >
                                                    {message.timestamp}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex items-start gap-3">
                                            <div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                                                <Bot className="size-4 text-cyan-300" />
                                            </div>
                                            <div
                                                className="rounded-2xl p-[1px]"
                                                style={{ background: "linear-gradient(120deg, rgba(0,212,255,0.25), rgba(123,97,255,0.25))" }}
                                            >
                                                <div className="rounded-2xl bg-black/50 ring-1 ring-white/10 p-4">
                                                    <div className="flex gap-2">
                                                        <div className="h-2 w-2 rounded-full bg-cyan-300 animate-bounce" />
                                                        <div className="h-2 w-2 rounded-full bg-cyan-300 animate-bounce delay-100" />
                                                        <div className="h-2 w-2 rounded-full bg-cyan-300 animate-bounce delay-200" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Input Area */}
                                <div className="pointer-events-none absolute bottom-0 inset-x-0">
                                    <div className="pointer-events-auto bg-gradient-to-t from-black/60 to-transparent px-6 pt-6 pb-4">
                                        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 p-1.5 flex items-center gap-2 shadow-[0_10px_40px_rgba(0,212,255,0.18),_0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                                            <button className="shrink-0 rounded-full p-2 hover:bg-white/10 transition" aria-label="Attach">
                                                <Paperclip className="size-4 text-zinc-400" />
                                            </button>
                                            <input
                                                type="text"
                                                placeholder="Ask Educora AI..."
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                                className="flex-1 bg-transparent placeholder-zinc-500 text-sm focus:outline-none px-1.5"
                                                style={{ fontFamily: "Inter, system-ui" }}
                                            />
                                            <button className="shrink-0 rounded-full p-2 hover:bg-white/10 transition" aria-label="Voice">
                                                <Mic className="size-4 text-zinc-400" />
                                            </button>
                                            <button
                                                onClick={handleSendMessage}
                                                disabled={!input.trim()}
                                                className="shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:opacity-50"
                                                style={{
                                                    background: "linear-gradient(90deg, #00D4FF, #7B61FF)",
                                                    boxShadow: "0 0 18px rgba(0,212,255,0.25), 0 0 28px rgba(123,97,255,0.2)",
                                                }}
                                            >
                                                <span>Send</span>
                                                <Send className="size-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-4 text-center text-sm text-zinc-400">
                Powered by AI—tuned for learning with context from your courses and progress.
            </p>
        </section>
    )
}