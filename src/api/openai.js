export const generateCaptionAndHashtags = async (prompt) => {
  try {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return {
      caption: data.caption || "",
      hashtags: data.hashtags || "",
    };
  } catch (error) {
    console.error("Error calling backend:", error);
    throw error;
  }
};
