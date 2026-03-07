let currentMl = 0;
const goalMl = 2000;
const log = [];

function updateDisplay() {
  document.getElementById('current-ml').textContent = currentMl;
  document.getElementById('goal-ml').textContent = goalMl;

  const percent = Math.min((currentMl / goalMl) * 100, 100);
  document.getElementById('progress-fill').style.width = percent + '%';

  const list = document.getElementById('log-list');
  list.innerHTML = '';
  [...log].reverse().forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `<span>💧 ${entry.amount}ml</span><span>${entry.time}</span>`;
    list.appendChild(li);
  });
}

function addWater(amount) {
  currentMl += amount;
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  log.push({ amount, time });
  updateDisplay();
}

document.getElementById('btn-150').addEventListener('click', () => addWater(150));
document.getElementById('btn-250').addEventListener('click', () => addWater(250));
document.getElementById('btn-500').addEventListener('click', () => addWater(500));
document.getElementById('btn-custom').addEventListener('click', () => {
  const amount = parseInt(prompt('Enter amount in ml:'));
  if (!isNaN(amount) && amount > 0) addWater(amount);
});

document.getElementById('today-date').textContent = new Date().toLocaleDateString([], {
  weekday: 'long', month: 'long', day: 'numeric'
});

updateDisplay();