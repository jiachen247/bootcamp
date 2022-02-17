// Create enclosing div
const div = document.createElement('div');

// Create buttons
const button1 = document.createElement('button');
button1.innerText = "😄";

const button2 = document.createElement('button');
button2.innerText = "😎";

const button3 = document.createElement('button');
button3.innerText = "😦";

// Append buttons to enclosing div
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);

// p to display the selected emojis
const emojis = document.createElement('p');

// Add div to document body
document.body.appendChild(div);
document.body.appendChild(emojis);

// Function used to update and draw emojis
function drawEmoji(emoji) {
  const emojiLine = emoji + emoji + emoji + "<br/>"
  emojis.innerHTML = emojiLine + emojiLine + emojiLine;
}

// Add event listeners
button1.addEventListener('click', () => drawEmoji('😄'));
button2.addEventListener('click', () => drawEmoji('😎'));
button3.addEventListener('click', () => drawEmoji('😦'));

