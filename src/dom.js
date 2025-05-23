// src/dom.js
import { conversions, formatResult } from './convert.js';

export function renderConversions(value) {
  conversions.forEach(({ selector, metricAbbr, imperialAbbr, factor }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    const metricToImperial = formatResult(value * factor);
    const imperialToMetric = formatResult(value / factor);

    el.innerHTML = `
      <div class="conversion-info--wrapper">
        <div class="convert-info--first-wrapper">
          <div><span class="converted-number">${value}</span> ${metricAbbr}</div>
          <div>&equals;</div>
          <div><span class="converted-number">${metricToImperial}</span> ${imperialAbbr}</div>
        </div>
        <div class="convert-info--second-wrapper">
          <div><span class="converted-number">${value}</span> ${imperialAbbr}</div>
          <div>&equals;</div>
          <div><span class="converted-number">${imperialToMetric}</span> ${metricAbbr}</div>
        </div>
      </div>
    `;
  });
}
