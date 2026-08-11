const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pyScript = `
import os
from PIL import Image

assets_dir = r"c:\\Users\\Lenovo\\Desktop\\somtochukwu-melvina\\images\\assets"
converted_count = 0
total_saved_bytes = 0

for filename in os.listdir(assets_dir):
    filepath = os.path.join(assets_dir, filename)
    if os.path.isfile(filepath):
        ext = os.path.splitext(filename)[1].lower()
        if ext in ['.jpg', '.jpeg', '.png'] and not filename.endswith('.webp'):
            webp_name = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(assets_dir, webp_name)
            
            try:
                with Image.open(filepath) as img:
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img.save(webp_path, 'WEBP', quality=85, method=6)
                    else:
                        rgb_img = img.convert('RGB')
                        rgb_img.save(webp_path, 'WEBP', quality=85, method=6)
                
                orig_size = os.path.getsize(filepath)
                webp_size = os.path.getsize(webp_path)
                saved = orig_size - webp_size
                total_saved_bytes += max(0, saved)
                converted_count += 1
                print(f"Converted {filename} ({orig_size // 1024} KB) -> {webp_name} ({webp_size // 1024} KB)")
            except Exception as e:
                print(f"Failed {filename}: {e}")

print(f"DONE: {converted_count} images converted, saved {total_saved_bytes // 1024 // 1024} MB")
`;

fs.writeFileSync(path.join(__dirname, 'run_conversion.py'), pyScript);

try {
  const output = execSync('python run_conversion.py', { encoding: 'utf-8' });
  console.log(output);
} catch (err) {
  console.error('Python execution output:', err.stdout || err.message);
}
