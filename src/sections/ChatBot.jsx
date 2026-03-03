// import { useState, useRef, useEffect } from "react";

// export default function ChatBot() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { role: "assistant", content: "Hi 👋 Ask me anything about Vishal!" },
//   ]);
//   const [loading, setLoading] = useState(false);

//   const messagesEndRef = useRef(null);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ messages: updatedMessages }),
//       });

//       const data = await response.json();

//       const aiReply = {
//         role: "assistant",
//         content: data.choices?.[0]?.message?.content || "No response",
//       };

//       setMessages((prev) => [...prev, aiReply]);

//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "Something went wrong 😔" },
//       ]);
//     }

//     setLoading(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 z-[99999] bg-cyan-500 hover:bg-cyan-400 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-xl transition-all duration-300"
//       >
//         {open ? "✕" : "💬"}
//       </button>

//       {/* Chat Window */}
//       <div
//         className={`fixed bottom-24 right-6 w-80 h-96 bg-zinc-900 text-white rounded-2xl shadow-2xl p-4 flex flex-col transition-all duration-300 z-[99999]
//         ${
//           open
//             ? "opacity-100 scale-100"
//             : "opacity-0 scale-90 pointer-events-none"
//         }`}
//       >
//         <div className="text-lg font-semibold mb-2">
//           Vishal AI Assistant 🤖
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto space-y-2 mb-3 text-sm">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-xl max-w-[80%] ${
//                 msg.role === "user"
//                   ? "bg-cyan-600 ml-auto"
//                   : "bg-zinc-700"
//               }`}
//             >
//               {msg.content}
//             </div>
//           ))}

//           {loading && (
//             <div className="bg-zinc-700 p-2 rounded-xl w-fit text-sm animate-pulse">
//               Thinking...
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input */}
//         <div className="flex gap-2">
//           <input
//             className="flex-1 p-2 rounded-lg bg-zinc-800 outline-none text-sm"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Ask about Vishal..."
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-cyan-500 px-3 rounded-lg hover:bg-cyan-400 text-sm"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }