import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { text } = req.body;

    const { data } = await client.textToSpeech.convert(
      "zT03pEAEi0VHKciJODfn", 
      {
        text,
        modelId: "eleven_monolingual_v1",
      }
    );

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-store");

    return res.status(200).send(Buffer.from(data));
  } catch (error) {
    console.error("Voice error:", error);
    return res.status(500).json({ error: "Voice generation failed" });
  }
}