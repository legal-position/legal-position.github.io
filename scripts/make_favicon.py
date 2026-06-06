#!/usr/bin/env python3
"""Generate a square brand favicon from the logo's owl mark.

Output: assets/favicon.png — a 512x512 navy square with the gold owl centered.
Legible on both light and dark browser tabs, and safe as an apple-touch-icon
(full-bleed background, no transparent corners).

Requires: Pillow.  Run:  python3 scripts/make_favicon.py
"""
import os
from PIL import Image, ImageDraw

NAVY = (14, 28, 51, 255)   # #0e1c33
SIZE = 512
OWL_FRAC = 0.72            # owl size as fraction of the icon

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = os.path.join(ROOT, "assets", "logo.png")
OUT = os.path.join(ROOT, "assets", "favicon.png")
OUT_ICO = os.path.join(ROOT, "favicon.ico")


def crop_owl(logo_path):
    """Return a tight RGBA crop of just the owl mark (top content block)."""
    im = Image.open(logo_path).convert("RGBA")
    alpha = im.getchannel("A")
    w, h = im.size
    data = list(alpha.getdata())
    thr = 16

    def row_has(r):
        return max(data[r * w:(r + 1) * w]) > thr

    rows = [r for r in range(h) if row_has(r)]
    if not rows:
        return im
    top = rows[0]
    gap_needed = max(8, h // 100)
    gap, bottom = 0, top
    for r in range(top, h):
        if row_has(r):
            bottom, gap = r, 0
        else:
            gap += 1
            if gap >= gap_needed and bottom > top:
                break
    cols = [c for c in range(w)
            if any(data[r * w + c] > thr for r in range(top, bottom + 1))]
    left, right = (cols[0], cols[-1]) if cols else (0, w - 1)
    return im.crop((left, top, right + 1, bottom + 1))


def main():
    owl = crop_owl(LOGO)
    icon = Image.new("RGBA", (SIZE, SIZE), NAVY)
    target = int(SIZE * OWL_FRAC)
    ow, oh = owl.size
    s = min(target / ow, target / oh)
    owl_r = owl.resize((max(1, int(ow * s)), max(1, int(oh * s))), Image.LANCZOS)
    icon.alpha_composite(owl_r, ((SIZE - owl_r.width) // 2, (SIZE - owl_r.height) // 2))
    icon.convert("RGB").save(OUT, "PNG")
    # Multi-size .ico at the site root (Google and many tools probe /favicon.ico first)
    icon.save(OUT_ICO, format="ICO", sizes=[(48, 48), (32, 32), (16, 16)])
    print(f"wrote {OUT} ({SIZE}x{SIZE}) and {OUT_ICO}, owl crop {owl.size}")


if __name__ == "__main__":
    main()
