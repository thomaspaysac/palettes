import hexToHsl from "hex-to-hsl";

const percentage = (value, percentage) => {
  if (value === 0) {
    return percentage
  } else {
    return percentage - (value / 100 * percentage)
  }
}

export const createPalette = (H) => {
  const hsl = hexToHsl(H);
  const [h, s, l] = hsl;
  return {
    base: `hsl(${h}, ${s}%, ${l}%)`,
    darker10: `hsl(${h + 1}, ${s - 3}%, ${l - 10}%)`,
    darker20: `hsl(${h + 3}, ${s - 7}%, ${l - 25}%)`,
    darker30: `hsl(${h + 3}, ${s + 1}%, ${l - 39}%)`,
    darker40: `hsl(${h + 4}, ${s + 13}%, ${l - 51}%)`,
    lighter10: `hsl(${h - 6}, ${s + 4}%, ${l + 7}%)`,
    lighter20: `hsl(${h - 12}, ${s + 3}%, ${l + 14}%)`,
    lighter30: `hsl(${h - 14}, ${s}%, ${l + 17}%)`,
    lighter40: `hsl(${h - 20}, ${s +12}%, ${l + 21}%)`,
    complimentary: `hsl(${h+180}, ${s}%, ${l}%)`
  }
}

export const rgbToHex = (r, g, b) => {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

export const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
