document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);
    let message = '';


    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    const token = '7730416973:AAGzdAy8yIaSMBRFhUlA0h_PlYCYynN14i0'; 
    const chatId = '-4680347479';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML' 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('response').innerText = 'Сообщение отправлено!';
        } else {
            document.getElementById('response').innerText = 'Ошибка при отправке сообщения.';
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('response').innerText = 'Ошибка при отправке сообщения.';
    });
});