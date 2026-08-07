import shutil

src1 = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets\user-story.png"
dest1 = r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\f52b3201-ba03-4370-b747-2e3639b59bf8\user-story.png"

src2 = r"c:\Users\Lenovo\Desktop\Melvina's Porfolio\images\assets\reflection-and-strategic-takeaway-verse.png"
dest2 = r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\f52b3201-ba03-4370-b747-2e3639b59bf8\reflection-and-strategic-takeaway-verse.png"

try:
    shutil.copyfile(src1, dest1)
    shutil.copyfile(src2, dest2)
    print("COPIED NEW ASSETS TO ARTIFACTS")
except Exception as e:
    print("ERROR:", e)
