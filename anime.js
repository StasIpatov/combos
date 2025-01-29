document.getElementById('send-button').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    const message = chatInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        chatInput.value = '';
    }
});


