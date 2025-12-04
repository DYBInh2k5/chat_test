// Tự động detect môi trường
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api/chat'
    : '/api/chat';

// Tự động điều chỉnh chiều cao textarea
const userInput = document.getElementById('userInput');
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Gửi tin nhắn khi nhấn Enter (Shift+Enter để xuống dòng)
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) {
        return;
    }
    
    // Hiển thị tin nhắn của user
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    userInput.style.height = 'auto';
    
    // Disable button và hiển thị loading
    const sendButton = document.getElementById('sendButton');
    const buttonText = document.getElementById('buttonText');
    const buttonLoader = document.getElementById('buttonLoader');
    
    sendButton.disabled = true;
    buttonText.style.display = 'none';
    buttonLoader.style.display = 'inline-block';
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
        });
        
        const data = await response.json();
        
        if (data.success) {
            addMessage(data.message, 'bot');
        } else {
            addMessage('❌ Lỗi: ' + (data.error || 'Không thể kết nối với AI'), 'bot');
        }
    } catch (error) {
        console.error('Error:', error);
        addMessage('❌ Lỗi kết nối: Vui lòng kiểm tra xem server đã chạy chưa (python backend/app.py)', 'bot');
    } finally {
        // Enable button và ẩn loading
        sendButton.disabled = false;
        buttonText.style.display = 'inline';
        buttonLoader.style.display = 'none';
        userInput.focus();
    }
}

function addMessage(text, sender) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (sender === 'user') {
        contentDiv.innerHTML = `<strong>Bạn:</strong> ${escapeHtml(text)}`;
    } else {
        contentDiv.innerHTML = `<strong>AI:</strong> ${escapeHtml(text)}`;
    }
    
    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
