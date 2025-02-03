import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const OUTPUT_DIR = path.resolve(ASSETS_DIR, 'optimized');

const optimizationConfigs = {
  avatar: {
    width: 400,
    height: 400,
    fit: 'cover',
    quality: 80
  },
  mobile: {
    width: 768,
    height: null,
    fit: 'inside',
    quality: 80
  },
  desktop: {
    width: 1920,
    height: null,
    fit: 'inside',
    quality: 80
  },
  icon: {
    width: 64,
    height: 64,
    fit: 'inside',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    quality: 80
  }
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath, config) {
  try {
    await ensureDirectoryExists(path.dirname(outputPath));
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculer les dimensions en préservant le ratio d'aspect
    let resizeOptions = {
      fit: config.fit,
      withoutEnlargement: true
    };

    if (config.background) {
      resizeOptions.background = config.background;
    }

    await image
      .resize(config.width, config.height, resizeOptions)
      .webp({ quality: config.quality })
      .toFile(outputPath);
      
    console.log(`✓ Optimized ${inputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name !== 'optimized') {
        await processDirectory(fullPath);
      }
      continue;
    }

    if (!entry.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
      continue;
    }

    const relativePath = path.relative(ASSETS_DIR, fullPath);
    const fileName = path.parse(entry.name).name;
    const outputBasePath = path.join(OUTPUT_DIR, path.dirname(relativePath));

    if (fileName.includes('avatar')) {
      await optimizeImage(
        fullPath,
        path.join(outputBasePath, `${fileName}-optimized.webp`),
        optimizationConfigs.avatar
      );
    } else if (fileName.includes('mobile')) {
      await optimizeImage(
        fullPath,
        path.join(outputBasePath, `${fileName}-optimized.webp`),
        optimizationConfigs.mobile
      );
    } else if (fileName.includes('desktop')) {
      await optimizeImage(
        fullPath,
        path.join(outputBasePath, `${fileName}-optimized.webp`),
        optimizationConfigs.desktop
      );
    } else if (dir.includes('icons')) {
      await optimizeImage(
        fullPath,
        path.join(outputBasePath, `${fileName}-optimized.webp`),
        optimizationConfigs.icon
      );
    } else {
      await optimizeImage(
        fullPath,
        path.join(outputBasePath, `${fileName}-optimized.webp`),
        optimizationConfigs.desktop
      );
    }
  }
}

console.log('📸 Starting image optimization...');
await processDirectory(ASSETS_DIR);
console.log('✨ Image optimization complete!'); 