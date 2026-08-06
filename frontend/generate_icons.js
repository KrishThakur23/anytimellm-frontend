const fs = require('fs');
const sharp = require('sharp');

const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#111" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
  <path d="M50 16 L22 66 C18 76 22 86 32 86 C42 86 48 78 50 74 C52 78 58 86 68 86 C78 86 82 76 78 66 Z" />
  <path d="M30 85 C42 85 58 67 70 67" />
  <path d="M70 85 C58 85 42 67 30 67" />
</svg>`;

async function generateFavicons() {
  const publicDir = './public';
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write SVG
  fs.writeFileSync(`${publicDir}/favicon.svg`, svgCode);

  // Generate PNGs
  await sharp(Buffer.from(svgCode))
    .resize(16, 16)
    .toFile(`${publicDir}/favicon-16x16.png`);

  await sharp(Buffer.from(svgCode))
    .resize(32, 32)
    .toFile(`${publicDir}/favicon-32x32.png`);

  await sharp(Buffer.from(svgCode))
    .resize(180, 180)
    .toFile(`${publicDir}/apple-touch-icon.png`);

  // Generate favicon.ico (just 32x32 png renamed)
  await sharp(Buffer.from(svgCode))
    .resize(32, 32)
    .toFormat('png')
    .toFile(`${publicDir}/favicon.ico`);

  // Write webmanifest
  const manifest = {
    name: "AnytimeLLM",
    short_name: "AnytimeLLM",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  };
  fs.writeFileSync(`${publicDir}/site.webmanifest`, JSON.stringify(manifest, null, 2));

  console.log('Favicons generated successfully.');
}

generateFavicons().catch(console.error);
