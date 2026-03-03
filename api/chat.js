// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const { messages } = req.body;

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are Vishal Kumar Gowda's AI assistant.
// Only answer questions about Vishal.

// Vishal:
// - Computer Science student from India
// - Interested in AI, Neuroscience & Healthcare Tech
// - Open Source enthusiast (GSoC aspirant)
// - Strong in DSA & Full Stack Development
// - Builds AI-powered web apps

// If question is unrelated, say:
// "I am designed to answer only about Vishal."
// `,
//           },
//           ...messages,
//         ],
//       }),
//     });

//     const data = await response.json();
//     return res.status(200).json(data);

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Server error" });
//   }
// }