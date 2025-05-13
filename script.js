// Функция для перехода в чат с выбранным специалистом
function goToChat(specialistName) {
  // Обновляем название специалиста в чате
  document.getElementById('chat-specialist').textContent = specialistName;

  // Переход в раздел чата на сайте
  document.getElementById('messages').scrollIntoView({ behavior: 'smooth' });
}

// Функция для отправки сообщений в чат
function sendMessage() {
  const message = document.getElementById('message-input').value;
  if (message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    document.getElementById('message-input').value = ''; // Очищаем поле ввода
    chatBox.scrollTop = chatBox.scrollHeight; // Прокручиваем чат до конца
  } else {
    alert("Пожалуйста, напишите сообщение!");
  }
}

// Функция для перехода на главную страницу по клику на логотип
function goHome() {
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}
function goToChat(name, username) {
  // Открываем Telegram чат с указанным пользователем
  const telegramLink = `https://t.me/${username}`;
  window.open(telegramLink, '_blank');
}