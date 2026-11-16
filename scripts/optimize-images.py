"""
One-off: turn the original (1-7 MB) photos into web-sized WebP files.

Run from the repo root:  python scripts/optimize-images.py <path-to-original-assets>
Writes src/assets/img/<name>-<width>.webp and public/ brand files.
"""
import os
import sys
from PIL import Image, ImageOps

SRC = sys.argv[1]
OUT = os.path.join("src", "assets", "img")
os.makedirs(OUT, exist_ok=True)

# name -> (source file, widths, crop aspect (w/h) or None).
# Widths larger than the source are skipped, so every file is a real size.
GALLERY = [480, 800, 1400]
PHOTOS = {
    "hero":        ("homeBg.jpg",                         [828, 1280, 1600, 2000], None),
    "about-1":     ("pexels-heyho-5998135.jpg",           [480, 800, 1200], 4 / 5),
    "about-2":     ("pexels-heyho-6636309.jpg",           [240, 480], 1),
    "about-3":     ("pexels-heyho-7535032.jpg",           [240, 480], 1),
    "svc-interior":  ("int.jpg",                          [480, 800, 1100], 3 / 4),
    "svc-furniture": ("bedroom.jpg",                      [480, 800, 1100], 3 / 4),
    "svc-renovation": ("4872a53e70083aac16e5db7750a706a6.jpg", [480, 800, 1100], 3 / 4),
    "offer-bg":    ("ingterior.jpg",                      [600, 1000], 5 / 4),
    "vision-bg":   ("Dark-living-room-scheme.jpg",        [1200], None),
    "g-living":    ("r-1.png",                            GALLERY, None),
    "g-green":     ("r-2.png",                            GALLERY, None),
    "g-dining":    ("r-4.png",                            GALLERY, None),
    "g-console":   ("r-5.png",                            GALLERY, None),
    "g-lounge":    ("r-6.png",                            GALLERY, None),
    "g-kitchen":   ("wp1844398.webp",                     GALLERY, None),
    "g-office":    ("pexels-heyho-7535032.jpg",           GALLERY, None),
    "g-bedroom":   ("bed3.jpg",                           GALLERY, 3 / 4),
    "g-shutters":  ("Modern-Design-for-Window-Shutters.jpg", GALLERY, None),
    "g-wardrobe":  ("pexels-heyho-6527064.jpg",           GALLERY, 3 / 4),
    "g-blue":      ("thumb-1920-595107.jpg",              GALLERY, None),
    "g-light":     ("california-interior-natural-light.jpg", GALLERY, None),
    "contact-bg":  ("dark-interior-bedroom-in-brown.jpg", [940], None),
}

for f in os.listdir(OUT):  # start clean so removed sizes don't linger
    os.remove(os.path.join(OUT, f))


def crop_to(im, aspect):
    w, h = im.size
    if w / h > aspect:
        nw = int(h * aspect)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / aspect)
    y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))


for name, (file, widths, aspect) in PHOTOS.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, file))).convert("RGB")
    if aspect:
        im = crop_to(im, aspect)
    sizes = sorted({min(t, im.width) for t in widths})
    for w in sizes:
        h = round(im.height * w / im.width)
        out = os.path.join(OUT, f"{name}-{w}.webp")
        im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=76, method=6)
        print(f"{out}  {w}x{h}  {os.path.getsize(out)//1024} KB")

# Brand: tight-cropped WS mark (transparent) for the navbar, favicon and social image.
mark = Image.open(os.path.join(SRC, "WOODSPEC png.png")).convert("RGBA")
mark = mark.crop(mark.getbbox())
m = mark.copy(); m.thumbnail((64, 64), Image.LANCZOS)
m.save(os.path.join(OUT, "ws-mark.webp"), "WEBP", lossless=True)
fav = Image.new("RGBA", (512, 512), (0, 0, 0, 0)); f = mark.copy(); f.thumbnail((440, 440), Image.LANCZOS)
fav.paste(f, ((512 - f.width) // 2, (512 - f.height) // 2), f)
os.makedirs("public", exist_ok=True)
fav.save(os.path.join("public", "favicon.png"), optimize=True)
fav.resize((180, 180), Image.LANCZOS).save(os.path.join("public", "apple-touch-icon.png"), optimize=True)

# Open Graph card 1200x630: hero photo with a dark veil and the full logo.
og = Image.open(os.path.join(SRC, "homeBg.jpg")).convert("RGB")
og = crop_to(og, 1200 / 630).resize((1200, 630), Image.LANCZOS)
veil = Image.new("RGBA", og.size, (12, 34, 38, 150))
og = Image.alpha_composite(og.convert("RGBA"), veil)
logo = Image.open(os.path.join(SRC, "WOODSPEC_LOGO-01.png")).convert("RGBA")
logo = logo.crop(logo.getbbox())
# The logo is dark teal on transparent: lighten it for the dark card.
r, g, b, a = logo.split()
light = Image.merge("RGBA", (Image.new("L", logo.size, 244), Image.new("L", logo.size, 239), Image.new("L", logo.size, 232), a))
light.thumbnail((520, 360), Image.LANCZOS)
og.paste(light, ((1200 - light.width) // 2, (630 - light.height) // 2), light)
og.convert("RGB").save(os.path.join("public", "og-image.jpg"), quality=85, optimize=True)
print("brand files written")
