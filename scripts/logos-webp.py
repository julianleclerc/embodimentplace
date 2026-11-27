# Makes public/logos-webp/<name>.webp (lossless, about 40% smaller) for every public/logos/<name>.png that has none yet
# or is newer than its copy. The Worker (epAssetFetch) serves these to browsers that accept WebP and falls back to the
# PNG when a copy is missing, so running this is optional but keeps the map light. Needs Pillow: pip install pillow
# Usage: python3 scripts/logos-webp.py
import os
from PIL import Image
src, dst = "public/logos", "public/logos-webp"
os.makedirs(dst, exist_ok=True)
made = 0
for f in sorted(os.listdir(src)):
    if not f.endswith(".png"):
        continue
    a, b = os.path.join(src, f), os.path.join(dst, f[:-4] + ".webp")
    if os.path.exists(b) and os.path.getmtime(b) >= os.path.getmtime(a):
        continue
    Image.open(a).save(b, "WEBP", lossless=True, method=6)
    made += 1
print(f"made {made} WebP logos in {dst}")
