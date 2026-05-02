const API_KEY = 'AIzaSyDQqSp8IjoV6HJvJWYezCzzT_oQTezcBao';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const baseIngredients = 'Açúcar, Margarina, Ovos, Farinha de trigo, Fermento químico, Sorbato, Água, Leite em pó';

const cakes = [
    { 
        name: 'Bolo de Chocolate', type: '750g', 
        description: 'Intenso e fofinho, para os amantes de cacau.',
        details: 'Um bolo caseiro clássico, fofinho e com sabor intenso de cacau. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Chocolate.`,
        nutrition: { portion: '60g (1 fatia)', calories: '147 kcal (7% VD)', carbs: '19g (6% VD)', protein: '2,5g (3% VD)', fats: '6,3g (11% VD)', sodium: '85mg (4% VD)' }
    },
    { 
        name: 'Bolo Formigueiro', type: '750g', 
        description: 'Massa branca fofinha com granulado.',
        details: 'A combinação nostálgica da massa branca com pedaços de chocolate granulado. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Granulado de chocolate.`,
        nutrition: { portion: '60g (1 fatia)', calories: '145 kcal (7% VD)', carbs: '19g (6% VD)', protein: '2,4g (3% VD)', fats: '6,2g (11% VD)', sodium: '80mg (4% VD)' }
    },
    { 
        name: 'Bolo de Passas', type: '750g', 
        description: 'Massa tradicional enriquecida com uvas passas.',
        details: 'Um bolo simples e saboroso com o toque adocicado das uvas passas. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Uvas passas.`,
        nutrition: { portion: '60g (1 fatia)', calories: '142 kcal (7% VD)', carbs: '20g (7% VD)', protein: '2,3g (3% VD)', fats: '5,8g (11% VD)', sodium: '78mg (4% VD)' }
    },
    { 
        name: 'Bolo de Ameixa', type: '750g', 
        description: 'Sabor marcante com ameixa e toque de cacau.',
        details: 'Uma massa densa rica em ameixas secas e chocolate em pó. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Ameixa seca, Chocolate em pó.`,
        nutrition: { portion: '60g (1 fatia)', calories: '145 kcal (7% VD)', carbs: '20g (7% VD)', protein: '2,4g (3% VD)', fats: '6,0g (11% VD)', sodium: '80mg (4% VD)' }
    },
    { 
        name: 'Bolo Panetone', type: '750g', 
        description: 'O sabor do natal, com frutas cristalizadas e passas.',
        details: 'Massa perfumada com essência, passas e frutas cristalizadas. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Uvas passas, Frutas cristalizadas, Essência de Panetone.`,
        nutrition: { portion: '60g (1 fatia)', calories: '150 kcal (8% VD)', carbs: '21g (7% VD)', protein: '2,3g (3% VD)', fats: '6,0g (11% VD)', sodium: '82mg (4% VD)' }
    },
    { 
        name: 'Bolo de Laranja', type: '750g', 
        description: 'Refrescante e cítrico, feito com suco e raspas.',
        details: 'Feito com suco e raspas de laranja, incrivelmente perfumado. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Suco de Laranja, Raspas de Laranja.`,
        nutrition: { portion: '60g (1 fatia)', calories: '138 kcal (7% VD)', carbs: '18g (6% VD)', protein: '2,2g (3% VD)', fats: '5,5g (10% VD)', sodium: '75mg (4% VD)' }
    },
    { 
        name: 'Bolo de Maracujá', type: '750g', 
        description: 'Massa leve com o azedinho da polpa de maracujá.',
        details: 'Um bolo simples e tropical, fofinho e equilibrado. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Polpa de Maracujá.`,
        nutrition: { portion: '60g (1 fatia)', calories: '137 kcal (7% VD)', carbs: '18g (6% VD)', protein: '2,2g (3% VD)', fats: '5,4g (10% VD)', sodium: '75mg (4% VD)' }
    },
    { 
        name: 'Bolo de Amendoim', type: '750g', 
        description: 'Massa rica com pedaços crocantes de amendoim.',
        details: 'Sabor acentuado e textura maravilhosa para acompanhar um café. Alérgicos: contém glúten, leite, ovos e amendoim.',
        ingredients: `${baseIngredients}, Amendoim.`,
        nutrition: { portion: '60g (1 fatia)', calories: '155 kcal (8% VD)', carbs: '17g (6% VD)', protein: '3,2g (4% VD)', fats: '7,0g (13% VD)', sodium: '78mg (4% VD)' }
    },
    { 
        name: 'Bolo de Limão', type: '750g', 
        description: 'Delicado, perfumado com suco e raspas de limão.',
        details: 'Perfeito para um lanche leve da tarde, cítrico na medida certa. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Suco de Limão, Raspas de Limão.`,
        nutrition: { portion: '60g (1 fatia)', calories: '136 kcal (7% VD)', carbs: '18g (6% VD)', protein: '2,2g (3% VD)', fats: '5,4g (10% VD)', sodium: '74mg (4% VD)' }
    },
    { 
        name: 'Bolo Mesclado', type: '750g', 
        description: 'O equilíbrio perfeito entre massa branca e chocolate.',
        details: 'Duas massas que se misturam para um visual e sabor únicos. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Chocolate em pó.`,
        nutrition: { portion: '60g (1 fatia)', calories: '140 kcal (7% VD)', carbs: '19g (6% VD)', protein: '2,4g (3% VD)', fats: '5,8g (11% VD)', sodium: '78mg (4% VD)' }
    },
    { 
        name: 'Bolo de Queijo', type: '750g', 
        description: 'Combinação irresistível de doce e salgado.',
        details: 'Massa tradicional enriquecida com queijo ralado para um sabor incomparável. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Queijo Ralado.`,
        nutrition: { portion: '60g (1 fatia)', calories: '160 kcal (8% VD)', carbs: '17g (6% VD)', protein: '3,5g (5% VD)', fats: '8,0g (15% VD)', sodium: '95mg (5% VD)' }
    },
    { 
        name: 'Bolo de Coco', type: '750g', 
        description: 'Um clássico brasileiro, cheio de coco ralado.',
        details: 'Massa leve e úmida com bastante coco, sabor de casa de vó. Alérgicos: contém glúten, leite e ovos.',
        ingredients: `${baseIngredients}, Coco Ralado.`,
        nutrition: { portion: '60g (1 fatia)', calories: '158 kcal (8% VD)', carbs: '18g (6% VD)', protein: '2,6g (3% VD)', fats: '7,5g (14% VD)', sodium: '80mg (4% VD)' }
    }
];

// Initialize Cake Grid
function initCakeGrid() {
    const grid = document.getElementById('cake-grid');
    grid.innerHTML = ''; // Clear
    
    cakes.forEach(cake => {
        let imgPath = `https://placehold.co/400x300/611116/E3B044?text=${cake.name.replace(' ', '+')}`;
        
        if (cake.name.includes('Formigueiro')) imgPath = 'assets/formigueiro.png';
        else if (cake.name.includes('Chocolate')) imgPath = 'assets/chocolate_new.png';
        else if (cake.name.includes('Passas')) imgPath = 'assets/passas.png';
        else if (cake.name.includes('Ameixa')) imgPath = 'assets/ameixa.png';
        else if (cake.name.includes('Panetone')) imgPath = 'assets/panetone.png';
        else if (cake.name.includes('Laranja') || cake.name.includes('Maracujá')) imgPath = 'assets/laranja.png';
        else if (cake.name.includes('Amendoim') || cake.name.includes('Queijo')) imgPath = 'assets/milho.png';
        else if (cake.name.includes('Mesclado')) imgPath = 'assets/chocolate.png';
        else imgPath = 'assets/saia.png'; // Coco, Limão or fallback
        let badgeHTML = '';
        if (cake.name === 'Bolo de Milho') badgeHTML = '<div class="product-badge">Mais Vendido 👑</div>';
        if (cake.name === 'Bolo de Chocolate') badgeHTML = '<div class="product-badge">Favorito do Rei ⭐</div>';

        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.innerHTML = `
            ${badgeHTML}
            <div class="product-img-wrapper">
                <img src="${imgPath}" alt="${cake.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${cake.name}</h3>
                <p>${cake.description}</p>
                <div class="product-footer">
                    <span class="product-price">Tamanho: ${cake.type}</span>
                    <button class="btn-detail" onclick="openModal('${cake.name.replace("'", "\\'")}')">Ver Detalhes</button>
                </div>
            </div>
        `;
        // Also make the card clickable
        card.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') {
                openModal(cake.name);
            }
        };
        grid.appendChild(card);
    });
}

// Modal Logic
window.openModal = function(cakeName) {
    const cake = cakes.find(c => c.name === cakeName);
    if (!cake) return;

    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-body');
    
    let imgPath = `https://placehold.co/400x300/611116/E3B044?text=${cake.name.replace(' ', '+')}`;
    
    if (cake.name.includes('Formigueiro')) imgPath = 'assets/formigueiro.png';
    else if (cake.name.includes('Chocolate')) imgPath = 'assets/chocolate_new.png';
    else if (cake.name.includes('Passas')) imgPath = 'assets/passas.png';
    else if (cake.name.includes('Ameixa')) imgPath = 'assets/ameixa.png';
    else if (cake.name.includes('Panetone')) imgPath = 'assets/panetone.png';
    else if (cake.name.includes('Laranja') || cake.name.includes('Maracujá')) imgPath = 'assets/laranja.png';
    else if (cake.name.includes('Amendoim') || cake.name.includes('Queijo')) imgPath = 'assets/milho.png';
    else if (cake.name.includes('Mesclado')) imgPath = 'assets/chocolate.png';
    else imgPath = 'assets/saia.png';

    modalContent.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image">
                <img src="${imgPath}" alt="${cake.name}">
                <div class="modal-cake-title">
                    <h2>${cake.name}</h2>
                    <span class="badge">${cake.type}</span>
                </div>
            </div>
            <div class="modal-details">
                <div class="accordion">
                    <div class="accordion-item active" id="acc-details">
                        <div class="accordion-header" onclick="toggleAccordion('acc-details')">
                            <span>Detalhes</span>
                            <span class="icon">▼</span>
                        </div>
                        <div class="accordion-content" style="display: block;">
                            <p>${cake.details}</p>
                        </div>
                    </div>
                    <div class="accordion-item" id="acc-ingredients">
                        <div class="accordion-header" onclick="toggleAccordion('acc-ingredients')">
                            <span>Ingredientes</span>
                            <span class="icon">►</span>
                        </div>
                        <div class="accordion-content">
                            <p>${cake.ingredients}</p>
                        </div>
                    </div>
                    <div class="accordion-item" id="acc-nutrition">
                        <div class="accordion-header" onclick="toggleAccordion('acc-nutrition')">
                            <span>Informação Nutricional</span>
                            <span class="icon">►</span>
                        </div>
                        <div class="accordion-content">
                            <table class="nutrition-table">
                                <tr><th>Porção</th><td>${cake.nutrition.portion}</td></tr>
                                <tr><th>Valor Energético</th><td>${cake.nutrition.calories}</td></tr>
                                <tr><th>Carboidratos</th><td>${cake.nutrition.carbs}</td></tr>
                                <tr><th>Proteínas</th><td>${cake.nutrition.protein}</td></tr>
                                <tr><th>Gorduras Totais</th><td>${cake.nutrition.fats}</td></tr>
                                <tr><th>Sódio</th><td>${cake.nutrition.sodium}</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

window.toggleAccordion = function(id) {
    const item = document.getElementById(id);
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.icon');
    
    const isActive = item.classList.contains('active');
    
    // Close all
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.display = 'none';
        i.querySelector('.icon').innerText = '►';
    });

    if (!isActive) {
        item.classList.add('active');
        content.style.display = 'block';
        icon.innerText = '▼';
    }
};

// Close modal on overlay click
document.getElementById('product-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Chat Functionality and Agent Logic
let chatHistory = [];

window.toggleChat = function() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('active');
};

window.handleKeyPress = function(e) {
    if (e.key === 'Enter') sendMessage();
};

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    appendMessage('user', text);
    input.value = '';

    // Add user message to history
    chatHistory.push({ role: "user", parts: [{ text: text }] });

    // Typing indicator
    const typingId = 'typing-' + Date.now();
    appendMessage('bot', '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>', typingId);

    const responseText = await getGeminiResponse();
    
    // Remove typing indicator and append real message
    const typingMsg = document.getElementById(typingId);
    if (typingMsg) typingMsg.remove();
    
    appendMessage('bot', responseText);

    // Save bot response to history if it's not an error message
    if (!responseText.includes('imprevisto real')) {
        chatHistory.push({ role: "model", parts: [{ text: responseText }] });
    }
}

function appendMessage(sender, text, id = null) {
    const container = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    if (id) msg.id = id;
    msg.innerHTML = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

async function getGeminiResponse() {
    const systemPrompt = `Você é o "Concierge do Rei", o assistente virtual de luxo da padaria "Rei do Bolo".
Sua missão é encantar o cliente com um atendimento majestoso, prestativo e acolhedor.
O Lema da empresa é: "Sabor e Qualidade".
Endereço físico: Avenida José Pinheiro dos Santos, 2441, Cidade Alta, Caruaru - PE, CEP 55031-148.
Instagram: @rei_do_bolo_caruaru | Facebook: ReidoBolo Caruaru | Email: reidobolocaruaru@gmail.com
História: Fundada por Edilson, um ex-caminhoneiro da zona rural que, incentivado pelo pai, vendeu a casa para comprar um carro e vender bolos, transformando muito sacrifício em uma grande fábrica de bolos caseiros.
Nossos produtos disponíveis hoje (apenas bolos caseiros sem recheio): ${cakes.map(c => c.name).join(', ')}.
Regras de atendimento:
1. Responda sempre em Português do Brasil de forma extremamente elegante e concisa (máximo 3 frases curtas por resposta).
2. Se perguntarem sobre ingredientes, calorias ou alergias de um bolo, forneça os dados com precisão, pois você é um especialista.
3. Nunca prometa produtos que não estão na lista oficial.
4. Se a resposta for complexa ou você não souber, peça desculpas polidamente e convide o cliente a visitar a loja física.`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
                contents: chatHistory
            })
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('API Error Details:', errorDetails);
            throw new Error(`API Fail: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Falha de comunicação com o Agente IA:', error);
        return "Peço desculpas, majestade, mas tivemos um imprevisto técnico momentâneo. Como posso ajudar de outra forma?";
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initCakeGrid();
});
