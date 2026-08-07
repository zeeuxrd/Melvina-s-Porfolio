import os
import shutil

src = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets\user-story -section.png"
dest_dir = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\src\assets"
dest = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\src\assets\user-story-section.png"

os.makedirs(dest_dir, exist_ok=True)
shutil.copyfile(src, dest)
print("COPIED SUCCESSFULLY")
