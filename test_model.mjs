import fetch from 'node-fetch';

const API_KEY = 'AIzaSyCoQfSSHdaPoE0Jv_JzfSytr_5dZ06eXdk';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

async function test() {
    console.log("Testing Gemini API...");
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: "Oi" }] }]
            })
        });
        if (!response.ok) {
            console.log("Error:", response.status, await response.text());
        } else {
            console.log("Success:", await response.json());
        }
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}
test();
