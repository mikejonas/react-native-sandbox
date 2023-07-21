/**
 * Lightens a hexadecimal color.
 *
 * @param {string} color - The hexadecimal color to lighten. Must be in the form '#RRGGBB'.
 * @param {number} percent - The percentage to lighten the color. Must be a value between 0 and 1.
 *
 * @return {string} The lightened color in hexadecimal format.
 */
const lightenColor = (color: string, percent: number) => {
  // Check if the color is a valid hexadecimal number
  if (!/^#[0-9a-f]{6}$/i.test(color)) {
    throw new Error(
      'Invalid color. Must be a hexadecimal color in the form #RRGGBB',
    );
  }

  // Check if the percent is between 0 and 1
  if (percent < 0 || percent > 1) {
    throw new Error('Invalid percent. Must be a value between 0 and 1');
  }

  const num = parseInt(color.slice(1), 16);
  const amount = Math.round(255 * percent); // Convert percentage to an amount

  let r = Math.min(255, Math.max(0, (num >> 16) + amount));
  let b = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  let g = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));

  return `#${(g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
};

export default lightenColor;
