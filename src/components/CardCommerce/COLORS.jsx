export default function generateColor() {
  const red = Math.floor(Math.random() * 128 + 128);
  const green = Math.floor(Math.random() * 128 + 128);
  const blue = Math.floor(Math.random() * 128 + 128);

  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");
  const hexColor = "#" + hexRed + hexGreen + hexBlue;

  return hexColor;
}
