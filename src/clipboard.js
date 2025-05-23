// src/clipboard.js
export function setupClipboard(container = document) {
  container.addEventListener('click', function (e) {
    if (e.target.classList.contains('converted-number')) {
      const text = e.target.textContent;
      navigator.clipboard.writeText(text).then(() => {
        showTooltip(e.target);
      });
    }
  });
}

function showTooltip(target) {
  const tooltip = document.createElement('span');
  tooltip.className = 'copy-tooltip';
  tooltip.innerText = 'Copied!';
  target.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 1000);
}
