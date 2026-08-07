import os
import glob

assets_dir = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets"
files = glob.glob(os.path.join(assets_dir, "*"))

files_with_time = []
for f in files:
    mtime = os.path.getmtime(f)
    files_with_time.append((mtime, os.path.basename(f)))

files_with_time.sort(reverse=True)

print("Top 5 newest files in images/assets:")
for mtime, name in files_with_time[:5]:
    print(f"- {name} (modified timestamp: {mtime})")
