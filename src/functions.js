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

/*export const createPalette = (H) => {
  const hsl = hexToHsl(H);
  const [h, s, l] = hsl;
  return {
    base: `hsl(${h}, ${s}%, ${l}%)`,
    darker10: `hsl(${h + 1}, ${s * 0.9}%, ${l * 0.87}%)`,
    darker20: `hsl(${h + 3}, ${s * 0.79}%, ${l * 0.68}%)`,
    darker30: `hsl(${h + 3}, ${s}%, ${l * 0.49}%)`,
    darker40: `hsl(${h + 4}, ${s * 1.39}%, ${l * 0.34}%)`,
    lighter10: `hsl(${h * 0.97}, ${s * 1.12}%, ${l * 1.09}%)`,
    lighter20: `hsl(${h * 0.95}, ${s * 1.09}%, ${l * 1.18}%)`,
    lighter30: `hsl(${h * 0.94}, ${s}%, ${l * 1.22}%)`,
    lighter40: `hsl(${h * 0.91}, ${s * 1.36}%, ${l * 1.27}%)`,
    complimentary: `hsl(${h+180}, ${s}%, ${l}%)`
  }
}*/