export function setupCounter(container) {
  const counterDiv = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = 'Contatore';
  const p = document.createElement('p');
  p.innerHTML = 'Hai cliccato il pulsante <span id="counter">0</span> volte.';
  const button = document.createElement('button');
  button.textContent = 'Cliccami';
  button.addEventListener('click', () => {
    const counterSpan = counterDiv.querySelector('#counter');
    const value = parseInt(counterSpan.textContent, 10);
    counterSpan.textContent = value + 1;
  });
  counterDiv.appendChild(heading);
  counterDiv.appendChild(p);
  counterDiv.appendChild(button);
  container.appendChild(counterDiv);
}
