const API_URL = '/api/chat';

const baseIngredients = 'Açúcar, Margarina, Ovos, Farinha de trigo, Fermento químico, Sorbato, Água, Leite em pó';

const cakes = [
    { name: 'Bolo de Chocolate', type: '750g', description: 'Intenso e fofinho, para os amantes de cacau.', details: 'Um bolo caseiro clássico, fofinho e com sabor intenso de cacau.', ingredients: `${baseIngredients}, Chocolate.`, nutrition: { portion: '60g', calories: '147 kcal', carbs: '19g', protein: '2,5g', fats: '6,3g', sodium: '85mg' } },
    { name: 'Bolo Formigueiro', type: '750g', description: 'Massa branca fofinha com granulado.', details: 'A combinação nostálgica da massa branca com pedaços de chocolate granulado.', ingredients: `${baseIngredients}, Granulado.`, nutrition: { portion: '60g', calories: '145 kcal', carbs: '19g', protein: '2,4g', fats: '6,2g', sodium: '80mg' } },
    { name: 'Bolo de Ameixa', type: '750g', description: 'Sabor marcante com ameixa e toque de cacau.', details: 'Uma massa densa rica em ameixas secas e chocolate em pó.', ingredients: `${baseIngredients}, Ameixa seca, Chocolate.`, nutrition: { portion: '60g', calories: '145 kcal', carbs: '20g', protein: '2,4g', fats: '6,0g', sodium: '80mg' } },
    { name: 'Bolo Panettone', type: '750g', description: 'O sabor do natal, com frutas cristalizadas e passas.', details: 'Massa perfumada com essência e passas.', ingredients: `${baseIngredients}, Frutas cristalizadas.`, nutrition: { portion: '60g', calories: '150 kcal', carbs: '21g', protein: '2,3g', fats: '6,0g', sodium: '82mg' } },
    { name: 'Bolo de Laranja', type: '750g', description: 'Refrescante e cítrico, feito com suco e raspas.', details: 'Feito com suco e raspas de laranja.', ingredients: `${baseIngredients}, Suco de Laranja.`, nutrition: { portion: '60g', calories: '138 kcal', carbs: '18g', protein: '2,2g', fats: '5,5g', sodium: '75mg' } },
    { name: 'Bolo de Maracujá', type: '750g', description: 'Massa leve com o azedinho da polpa de maracujá.', details: 'Um bolo simples e tropical.', ingredients: `${baseIngredients}, Polpa de Maracujá.`, nutrition: { portion: '60g', calories: '137 kcal', carbs: '18g', protein: '2,2g', fats: '5,4g', sodium: '75mg' } },
    { name: 'Bolo Mesclado', type: '750g', description: 'O equilíbrio perfeito entre massa branca e chocolate.', details: 'Duas massas que se misturam.', ingredients: `${baseIngredients}, Chocolate em pó.`, nutrition: { portion: '60g', calories: '140 kcal', carbs: '19g', protein: '2,4g', fats: '5,8g', sodium: '78mg' } },
    { name: 'Bolo de Coco', type: '750g', description: 'Um clássico brasileiro, cheio de coco ralado.', details: 'Massa leve e úmida com bastante coco.', ingredients: `${baseIngredients}, Coco Ralado.`, nutrition: { portion: '60g', calories: '158 kcal', carbs: '18g', protein: '2,6g', fats: '7,5g', sodium: '80mg' } },
    { name: 'Bolo de Aipim', type: '750g', description: 'O verdadeiro sabor do nordeste, cremoso e irresistível.', details: 'Feito com aipim ralado fresco.', ingredients: `${baseIngredients}, Aipim.`, nutrition: { portion: '60g', calories: '155 kcal', carbs: '20g', protein: '2,0g', fats: '6,5g', sodium: '90mg' } },
    { name: 'Bolo de Macaxeira', type: '750g', description: 'Tradicional e caseiro, macio e delicioso.', details: 'Também conhecido como bolo de aipim ou mandioca.', ingredients: `${baseIngredients}, Macaxeira.`, nutrition: { portion: '60g', calories: '155 kcal', carbs: '20g', protein: '2,0g', fats: '6,5g', sodium: '90mg' } },
    { name: 'Bolo de Milho', type: '750g', description: 'Sabor de festa junina o ano inteiro.', details: 'Massa cremosa à base de milho verde.', ingredients: `${baseIngredients}, Milho verde.`, nutrition: { portion: '60g', calories: '160 kcal', carbs: '22g', protein: '3,0g', fats: '7,0g', sodium: '85mg' } },
    { name: 'Bolo de Trigo', type: '750g', description: 'O bolo simples perfeito para o café.', details: 'O clássico bolo de vó, leve e fofinho.', ingredients: `${baseIngredients}.`, nutrition: { portion: '60g', calories: '130 kcal', carbs: '18g', protein: '2,0g', fats: '5,0g', sodium: '70mg' } },
    { name: 'Bolo Nata Goiaba', type: '750g', description: 'Massa fofinha com o doce irresistível da goiabada.', details: 'Uma combinação perfeita de nata e goiabada.', ingredients: `${baseIngredients}, Nata, Goiabada.`, nutrition: { portion: '60g', calories: '165 kcal', carbs: '24g', protein: '2,5g', fats: '6,0g', sodium: '80mg' } },
    { name: 'Bolo de Abacaxi', type: '750g', description: 'Doce e refrescante com pedaços de abacaxi.', details: 'Um bolo tropical, úmido e muito saboroso.', ingredients: `${baseIngredients}, Abacaxi.`, nutrition: { portion: '60g', calories: '140 kcal', carbs: '19g', protein: '2,2g', fats: '5,2g', sodium: '75mg' } },
    { name: 'Bolo de Morango', type: '750g', description: 'Delicado, perfumado e delicioso.', details: 'O favorito, com sabor suave de morango.', ingredients: `${baseIngredients}, Morango.`, nutrition: { portion: '60g', calories: '145 kcal', carbs: '19g', protein: '2,3g', fats: '5,5g', sodium: '75mg' } },
    { name: 'Bolo de Nata', type: '750g', description: 'Extremamente macio, derrete na boca.', details: 'Feito com nata fresca para uma textura amanteigada.', ingredients: `${baseIngredients}, Nata.`, nutrition: { portion: '60g', calories: '170 kcal', carbs: '18g', protein: '2,5g', fats: '8,5g', sodium: '85mg' } },
    
    { name: 'Bolo de Saia', type: 'Bacia', description: 'O tradicional bolo de bacia pernambucano.', details: 'Massa densa e saborosa, assada na fôrma de saia.', ingredients: `${baseIngredients}.`, nutrition: { portion: '60g', calories: '135 kcal', carbs: '18g', protein: '2,0g', fats: '5,5g', sodium: '75mg' } },
    { name: 'Bolo de Laranja (Saia)', type: 'Bacia', description: 'O clássico de laranja no formato de bacia.', details: 'Cítrico e fofinho, perfeito para compartilhar.', ingredients: `${baseIngredients}, Suco de Laranja.`, nutrition: { portion: '60g', calories: '138 kcal', carbs: '18g', protein: '2,2g', fats: '5,5g', sodium: '75mg' } },
    { name: 'Bolo de Trigo (Saia)', type: 'Bacia', description: 'O sabor caseiro do trigo, assado na bacia.', details: 'Leve e perfeito com manteiga e café.', ingredients: `${baseIngredients}.`, nutrition: { portion: '60g', calories: '130 kcal', carbs: '18g', protein: '2,0g', fats: '5,0g', sodium: '70mg' } },
    { name: 'Bolo Formigueiro (Saia)', type: 'Bacia', description: 'Granulado na massa e formato tradicional.', details: 'Alegria da criançada no tamanho família.', ingredients: `${baseIngredients}, Granulado.`, nutrition: { portion: '60g', calories: '145 kcal', carbs: '19g', protein: '2,4g', fats: '6,2g', sodium: '80mg' } },
    { name: 'Bolo de Aipim (Saia)', type: 'Bacia', description: 'A cremosidade do aipim no tamanho bacia.', details: 'Pesado e saboroso, com textura de pudim.', ingredients: `${baseIngredients}, Aipim.`, nutrition: { portion: '60g', calories: '155 kcal', carbs: '20g', protein: '2,0g', fats: '6,5g', sodium: '90mg' } },
    { name: 'Bolo de Ameixa (Saia)', type: 'Bacia', description: 'Ameixa e cacau na fôrma de saia.', details: 'Destaque nas festas e reuniões de família.', ingredients: `${baseIngredients}, Ameixa.`, nutrition: { portion: '60g', calories: '145 kcal', carbs: '20g', protein: '2,4g', fats: '6,0g', sodium: '80mg' } },
    { name: 'Bolo de Chocolate (Saia)', type: 'Bacia', description: 'Para matar a vontade de chocolate de todo mundo.', details: 'Massa escura e super fofinha no formato bacia.', ingredients: `${baseIngredients}, Chocolate.`, nutrition: { portion: '60g', calories: '147 kcal', carbs: '19g', protein: '2,5g', fats: '6,3g', sodium: '85mg' } }
];

function getImgPath(cakeName) {
    if (cakeName.includes('Formigueiro')) return 'assets/formigueiro.png';
    if (cakeName.includes('Chocolate')) return 'assets/chocolate_new.png';
    if (cakeName.includes('Ameixa')) return 'assets/ameixa.png';
    if (cakeName.includes('Panettone') || cakeName.includes('Panetone')) return 'assets/panetone.png';
    if (cakeName.includes('Laranja') || cakeName.includes('Maracujá')) return 'assets/laranja.png';
    if (cakeName.includes('Milho')) return 'assets/milho.png';
    if (cakeName.includes('Mesclado')) return 'assets/chocolate.png';
    if (cakeName.includes('Aipim') || cakeName.includes('Macaxeira')) return 'assets/aipim.png';
    if (cakeName.includes('Trigo')) return 'assets/trigo.png';
    if (cakeName.includes('Goiaba')) return 'assets/nata_goiaba.png';
    if (cakeName.includes('Abacaxi')) return 'assets/abacaxi.png';
    if (cakeName.includes('Morango')) return 'assets/morango.png';
    if (cakeName.includes('Nata')) return 'assets/nata.png';
    if (cakeName.includes('Saia') || cakeName.includes('Bacia')) return 'assets/saia.png';
    return 'assets/saia.png'; // fallback
}

// Initialize Cake Grid
function initCakeGrid() {
    const grid = document.getElementById('cake-grid');
    grid.innerHTML = ''; // Clear
    
    cakes.forEach(cake => {
        let imgPath = getImgPath(cake.name);
        let badgeHTML = '';
        if (cake.name === 'Bolo de Milho') badgeHTML = '<div class="product-badge">Mais Vendido 👑</div>';
        if (cake.name === 'Bolo de Chocolate') badgeHTML = '<div class="product-badge">Favorito do Rei ⭐</div>';

        const card = document.createElement('div');
        card.className = 'product-card reveal active';
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
    
    let imgPath = getImgPath(cake.name);

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
Endereço físico e Operação: 📍 Matriz e Distribuidora na CEACA de Caruaru (Avenida José Pinheiro dos Santos, 2441, Cidade Alta, Caruaru - PE). Atuamos com venda de bolos artesanais e também como distribuidora com preço de fábrica para comerciantes, mercadinhos, padarias e lanchonetes (produtos de alto giro e ótima aceitação).
Instagram: @rei_do_bolo_caruaru | Facebook: ReidoBolo Caruaru | Email: reidobolocaruaru@gmail.com
História: Fundada por Edilson, um ex-caminhoneiro da zona rural que, incentivado pelo pai, vendeu a casa para comprar um carro e vender bolos, transformando muito sacrifício em uma grande fábrica de bolos caseiros.
Nossos produtos disponíveis hoje (apenas bolos caseiros sem recheio): ${cakes.map(c => c.name).join(', ')}.
Regras de atendimento:
1. Responda sempre em Português do Brasil de forma extremamente elegante e concisa (máximo 3 frases curtas por resposta).
2. Se perguntarem sobre ingredientes, calorias ou alergias de um bolo, forneça os dados com precisão, pois você é um especialista.
3. Nunca prometa produtos que não estão na lista oficial.
4. Se a resposta for complexa ou você não souber, peça desculpas polidamente e convide o cliente a visitar a loja física.`;

    try {
        const payload = {
            contents: chatHistory,
            system_instruction: {
                parts: [{ text: systemPrompt }]
            }
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error Details:', errorData);
            const errorMessage = errorData.details || errorData.error || `Status: ${response.status}`;
            throw new Error(`API Fail: ${errorMessage}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Falha de comunicação com o Agente IA:', error);
        return "Peço desculpas, majestade, mas tivemos um imprevisto técnico momentâneo. Como posso ajudar de outra forma?";
    }
}

// Filter Logic
window.filterCakes = function(category) {
    const buttons = document.querySelectorAll('.category-bar a');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Find button by text or via event
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    } else {
        // Fallback for manual calls
        const target = Array.from(buttons).find(b => b.innerText.toLowerCase().includes(category.toLowerCase()));
        if (target) target.classList.add('active');
    }

    const filteredCakes = category === 'todos' 
        ? cakes 
        : category === 'favoritos' 
            ? cakes.filter(c => c.name === 'Bolo de Chocolate' || c.name === 'Bolo de Milho')
            : cakes.filter(c => c.type === category);

    renderFilteredGrid(filteredCakes);
};

function renderFilteredGrid(cakeList) {
    const grid = document.getElementById('cake-grid');
    grid.innerHTML = '';
    
    cakeList.forEach(cake => {
        let imgPath = getImgPath(cake.name);
        let badgeHTML = '';
        if (cake.name === 'Bolo de Milho') badgeHTML = '<div class="product-badge">Mais Vendido 👑</div>';
        if (cake.name === 'Bolo de Chocolate') badgeHTML = '<div class="product-badge">Favorito do Rei ⭐</div>';

        const card = document.createElement('div');
        card.className = 'product-card reveal active';
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
        card.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') openModal(cake.name);
        };
        grid.appendChild(card);
    });
}

// Reveal Animations
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Chat Suggestions
window.sendQuickMessage = function(text) {
    const input = document.getElementById('chat-input');
    input.value = text;
    sendMessage();
};

// Newsletter
window.handleNewsletter = function(e) {
    e.preventDefault();
    alert('Majestade, sua inscrição no Clube do Rei foi realizada com sucesso! Prepare-se para as melhores fornadas.');
    e.target.reset();
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    initCakeGrid();
    initReveal();

    // Mobile Menu Logic
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking a link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
});
