import React, { useState } from "react";
import { generateCaptionAndHashtags } from "../api/openai";

const CaptionGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { caption, hashtags } = await generateCaptionAndHashtags(prompt);
      setCaption(caption);
      setHashtags(hashtags);
    } catch (err) {
      console.error("Error generating caption or hashtags:", err);
    }
    setLoading(false);
  };

  return (
    <div className="generator">
      <textarea
        placeholder="Describe your content or idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Caption & Hashtags"}
      </button>

      {caption && (
        <div className="result">
          <h3>Generated Caption:</h3>
          <p>{caption}</p>
        </div>
      )}

      {hashtags && (
        <div className="result">
          <h3>Generated Hashtags:</h3>
          <p>{hashtags}</p>
        </div>
      )}
    </div>
  );
};

export default CaptionGenerator;
