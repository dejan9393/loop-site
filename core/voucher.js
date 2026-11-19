export function normalizeVoucher(code) {
  return code.trim().replace(/ +/g, '-').toUpperCase();
}
