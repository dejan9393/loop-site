import { normalizeVoucher } from './vouchers.js';
import { appliedMessage } from './logic.js';

const form = document.querySelector('form');
const status = document.querySelector('[role="status"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const code = form.elements.voucher.value;
  if (!code.trim()) {
    status.textContent = 'Enter a voucher code.';
    return;
  }
  try {
    status.textContent = appliedMessage(await normalizeVoucher(code));
  } catch (error) {
    console.error(error);
    status.textContent = 'Unable to apply voucher. Please try again.';
  }
});
