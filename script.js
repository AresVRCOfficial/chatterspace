document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    if (messageText) {
        addMessage(messageText);
        messageInput.value = '';
    }
});

document.getElementById('message-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const messageText = e.target.value.trim();
        if (messageText) {
            addMessage(messageText);
            e.target.value = '';
        }
    }
});

function addMessage(text) {
    const messageContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user');
    messageDiv.innerHTML = text;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
