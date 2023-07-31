$(document).ready(function () {
    var chatContainer = $('#chat-container');
    var chatForm = $('#chat-form');
    var userInput = $('#user-input');
    var recordButton = $('#start-record-btn');
    
    
    recordButton.click(function () {
    if (recordButton.hasClass('recording')) {
        // stop recording
        recordButton.removeClass('recording');
        recordButton.html('<i class="fas fa-microphone"></i>');
    } else {
        // start recording
        recordButton.addClass('recording');
        recordButton.html('<i class="fas fa-stop-circle"></i>');
    }
});

    chatForm.submit(function (event) {
        event.preventDefault();
        var userQuery = userInput.val();
        displayMessage('user', userQuery);
        userInput.val('');

        displayTypingIndicator();

        $.post('/chat', { user_query: userQuery }, function (data) {
            var response = data.response;
            removeTypingIndicator();
            displayMessage('chatbot', response);
        });
    });

    function displayTypingIndicator() {
        setTimeout(function () {
            var typingIndicator = $('<div class="typing-indicator">Chatbot is typing...</div>');
            chatContainer.append(typingIndicator);
            chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
        }, 1000); // 1 second delay
    }

    function removeTypingIndicator() {
        $('.typing-indicator').remove();
    }

    function displayMessage(role, content) {
        var messageClass = role === 'user' ? 'user-message' : 'chatbot-message';
        var message = $('<div class="message ' + messageClass + '"></div>');
        var bubble = $('<div class="bubble"></div>').text(content);
        message.append(bubble);
        chatContainer.append(message);
        chatContainer.scrollTop(chatContainer.prop('scrollHeight'));
    }
});
