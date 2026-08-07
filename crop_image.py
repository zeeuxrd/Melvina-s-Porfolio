from PIL import Image
import os

src_path = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets\media__1785534267008.jpg"
out_path = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets\singing_cropped.jpg"

if os.path.exists(src_path):
    img = Image.open(src_path)
    w, h = img.size
    print(f"Original dimensions: {w}x{h}")

    # Crop out top header and bottom UI bars, keeping the central video frame
    # Vertical bounds: roughly y1 = 35% to y2 = 62%
    y1 = int(h * 0.35)
    y2 = int(h * 0.62)
    x1 = 0
    x2 = w

    cropped = img.crop((x1, y1, x2, y2))
    cropped.save(out_path, quality=95)
    print(f"Saved cropped image to {out_path} with size: {cropped.size}")
