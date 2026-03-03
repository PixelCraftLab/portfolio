import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5175", // Your frontend port
  })
);

// Initialize ElevenLabs client
const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });

app.post("/api/voice", async (req, res) => {
  try {
    console.log("Voice route hit");

    const { text } = req.body;
    console.log("Text received:", text);

    // Disable caching
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    // Generate TTS
    const { data } = await client.textToSpeech.convert(
      "zT03pEAEi0VHKciJODfn", // Your voice ID
      {
        text: text,
        modelId: "eleven_monolingual_v1",
      }
    );

    // data is already a Uint8Array or Buffer
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(data));
  } catch (error) {
    console.error("Route error:", error);
    res.status(500).send("Error generating voice");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});