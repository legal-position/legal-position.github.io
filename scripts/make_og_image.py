#!/usr/bin/env python3
"""Generate a social share image (Open Graph / Twitter) from the logo.

Output: assets/og-image.png — 1200x630 navy card with the gold logo centered.
Used by og:image / twitter:image for link previews (Telegram, Facebook, X, etc.).

Requires: Pillow.  Run:  python3 scripts/make_og_image.py
"""
import os
from PIL import Image

NAVY = (14, 28, 51, 255)   # #0e1c33
W, H = 1200, 630
MARGIN = 70

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = os.path.join(ROOT, "assets", "logo.png")
OUT = os.path.join(ROOT, "assets", "og-image.png")


def main():
    logo = Image.open(LOGO).convert("RGBA")
    bbox = logo.getbbox()            # trim transparent padding
    if bbox:
        logo = logo.crop(bbox)

    max_w, max_h = W - 2 * MARGIN, H - 2 * MARGIN
    lw, lh = logo.size
    scale = min(max_w / lw, max_h / lh)
    logo = logo.resize((max(1, int(lw * scale)), max(1, int(lh * scale))), Image.LANCZOS)

    card = Image.new("RGBA", (W, H), NAVY)
    card.alpha_composite(logo, ((W - logo.width) // 2, (H - logo.height) // 2))
    card.convert("RGB").save(OUT, "PNG")
    print(f"wrote {OUT} ({W}x{H}), logo placed at {logo.size}")


if __name__ == "__main__":
    main()
