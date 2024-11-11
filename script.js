// Connect to the WebSocket server
const socket = io("http://localhost:3000");

// Send message when the user clicks the "Send" button
document.getElementById("send-btn").addEventListener("click", function() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Send the message to the server
        socket.emit("sendMessage", messageText);
        messageInput.value = "";
    }
});

// Send message when the user presses "Enter"
document.getElementById("message-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const messageText = e.target.value.trim();
        if (messageText) {
            socket.emit("sendMessage", messageText);
            e.target.value = "";
        }
    }
});

// Receive messages from other users
socket.on("receiveMessage", function(message) {
    addMessage(message);
});

// Function to add a message to the chat
function addMessage(text) {
    const messageContainer = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "user");
    messageDiv.innerHTML = text;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}




