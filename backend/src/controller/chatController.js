require('dotenv').config();
const axios = require('axios');

const sendMessage = async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: "Please provide a message." });

  try {
    console.log("Sending message to DeepSeek:", message);

    const response = await axios.post(
      "https://api.deepseek.com/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message }
        ],
        stream: false
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const reply = response.data?.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
    console.log("Reply from DeepSeek:", reply);
    res.json({ reply });

  } catch (error) {
    console.error("DeepSeek API error:", error.response?.data || error.message);
    res.status(500).json({ reply: "Oops! Something went wrong with AI service." });
  }
};

module.exports = { sendMessage };
