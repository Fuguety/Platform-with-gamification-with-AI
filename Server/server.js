const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
    const apiKey = 'AIzaSyDfM39XpHwaBQSOFu1HY2rYr8SduBfgb3I'; // Replace with your Gemini API key
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        res.json(response.data); // Return the whole response or modify it according to your needs
    } catch (error) {
        console.error('Error fetching Gemini response:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error fetching Gemini response' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
