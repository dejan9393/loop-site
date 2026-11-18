import { normalizeVoucher } from './core/voucher.js';
import { appliedMessage } from './logic.js';

const form = document.querySelector('form');
const status = document.querySelector('[role="status"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = appliedMessage(normalizeVoucher(form.elements.voucher.value));
});
