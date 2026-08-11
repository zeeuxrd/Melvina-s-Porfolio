

assets_dir = r"c:\Users\Lenovo\Desktop\somtochukwu-melvina\images\assets"
converted_count = 0
total_saved_bytes = 0

print("Starting image WebP conversion...")

for filename in os.listdir(assets_dir):
    filepath = os.path.join(assets_dir, filename)
    if os.path.isfile(filepath):
        ext = os.path.splitext(filename)[1].lower()
        if ext in ['.jpg', '.jpeg', '.png'] and not filename.endswith('.webp'):
            webp_name = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(assets_dir, webp_name)
            
            try:
                with Image.open(filepath) as img:
                    # Convert RGBA/P to RGB if saving to webp without alpha, or keep RGBA if png has transparency
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
                print(f"Failed to convert {filename}: {e}")

print(f"\nSuccessfully converted {converted_count} images!")
print(f"Total space saved: {total_saved_bytes // 1024 // 1024} MB")
