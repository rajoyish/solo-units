// src/convert.js
export const conversions = [
  {
    metricAbbr: 'px',
    imperialAbbr: 'rem',
    factor: 1 / 16,
    selector: '.px-rem-info',
  },
  {
    metricAbbr: 'cm',
    imperialAbbr: 'in',
    factor: 0.3937,
    selector: '.cm-inch-info',
  },
  {
    metricAbbr: 'in',
    imperialAbbr: 'ft',
    factor: 1 / 12,
    selector: '.inch-feet-info',
  },
  {
    metricAbbr: 'mm',
    imperialAbbr: 'cm',
    factor: 0.1,
    selector: '.mm-cm-info',
  },
  {
    metricAbbr: 'm',
    imperialAbbr: 'ft',
    factor: 3.281,
    selector: '.length-info',
  },
  {
    metricAbbr: 'L',
    imperialAbbr: 'gal',
    factor: 0.264,
    selector: '.volume-info',
  },
  {
    metricAbbr: 'kg',
    imperialAbbr: 'lb',
    factor: 2.204,
    selector: '.mass-info',
  },
];

export function formatResult(num) {
  const rounded = Math.round(num * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2).replace(/\.00$/, '');
}
