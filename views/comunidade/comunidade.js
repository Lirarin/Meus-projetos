// Captura elementos do DOM
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const messagesList = document.getElementById('messages');

// Função para adicionar mensagem na lista
function addMessage(name, message) {
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  const span = document.createElement('span');
  strong.textContent = name + ': ';
  span.textContent = message;
  li.appendChild(strong);
  li.appendChild(span);
  messagesList.appendChild(li);
}

// Função para enviar mensagem
function sendMessage() {
  const name = nameInput.value;
  const message = messageInput.value;
  if (name && message) {
    addMessage(name, message);
    nameInput.disabled = true;
    messageInput.value = '';
  }
}

// Adiciona evento de clique ao botão de enviar
sendButton.addEventListener('click', sendMessage);

// Adiciona evento de tecla pressionada à caixa de texto
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

const chatWindow = document.getElementById('chat-window');
const chatMinimizeButton = document.getElementById('chat-minimize-button');

chatWindow.addEventListener('click', () => {
  chatWindow.style.display = 'none'; // ocultando o chat
  chatMinimizeButton.style.display = 'block'; // exibindo o botão de minimizar
});

chatMinimizeButton.addEventListener('click', () => {
  chatWindow.style.display = 'block'; // exibindo o chat
  chatMinimizeButton.style.display = 'none'; // ocultando o botão de minimizar
});

