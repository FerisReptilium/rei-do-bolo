const API_KEY = 'AIzaSyA-DV5JV4VmmxTyDhOts9Ju5tsB9g4RzH4';
const model = 'gemini-1.5-flash';
const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${API_KEY}`;

async function testAPI() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Oi" }] }]
            })
        });
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}

testAPI();
