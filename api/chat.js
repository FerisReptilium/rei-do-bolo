export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    
    if (!API_KEY) {
        console.error("GEMINI_API_KEY is missing from environment variables.");
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    console.log("Using API_URL:", API_URL.replace(API_KEY, '***'));

    try {
        console.log("Sending request to Gemini API...");
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API Error:", response.status, data);
            return res.status(response.status).json({ 
                error: 'Failed to communicate with Gemini API',
                details: data.error ? data.error.message : 'Unknown error'
            });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Network or parsing error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
