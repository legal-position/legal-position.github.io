#!/usr/bin/env python3
"""Generate a branded QR code for the website.

Outputs (into assets/):
  - qr-code.png : navy modules on white, owl logo badge in the center (for sharing/print)
  - qr-code.svg : vector version with the owl embedded (crisp at any size)

Branding: navy (#0e1c33) modules, gold (#d9b46a) ring around a white logo badge.
Error correction level H (~30%) keeps it scannable despite the center badge.

Requires: segno, Pillow.  Run:  python3 scripts/make_qr.py
"""
import base64
import io
import os

import segno
from PIL import Image, ImageDraw

URL = "https://legal-position.github.io/portfolio/"
NAVY = "#0e1c33"
GOLD = "#d9b46a"
WHITE = "#ffffff"

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = os.path.join(ROOT, "assets", "logo.png")
OUT_PNG = os.path.join(ROOT, "assets", "qr-code.png")
OUT_SVG = os.path.join(ROOT, "assets", "qr-code.svg")

BADGE_FRAC = 0.30   # badge diameter as fraction of QR width
OWL_FRAC = 0.22     # owl diameter as fraction of QR width (inside the badge)


def crop_owl(logo_path):
    """Return a tight RGBA crop of just the owl mark (top content block)."""
    im = Image.open(logo_path).convert("RGBA")
    alpha = im.getchannel("A")
    w, h = im.size
    data = list(alpha.getdata())
    thr = 16

    def row_has(r):
        row = data[r * w:(r + 1) * w]
        return max(row) > thr

    rows = [r for r in range(h) if row_has(r)]
    if not rows:
        return im  # fallback: whole image
    top = rows[0]
    # Walk down from the first content row until a sizable transparent gap
    # (separates the owl from the wordmark below).
    gap_needed = max(8, h // 100)
    gap = 0
    bottom = top
    for r in range(top, h):
        if row_has(r):
            bottom = r
            gap = 0
        else:
            gap += 1
            if gap >= gap_needed and bottom > top:
                break
    # Horizontal extent within the owl rows
    cols = []
    for c in range(w):
        col_present = any(data[r * w + c] > thr for r in range(top, bottom + 1))
        if col_present:
            cols.append(c)
    left, right = (cols[0], cols[-1]) if cols else (0, w - 1)
    return im.crop((left, top, right + 1, bottom + 1))


def make_png(owl):
    qr = segno.make(URL, error="h")
    buf = io.BytesIO()
    qr.save(buf, kind="png", scale=24, border=4, dark=NAVY, light=WHITE)
    buf.seek(0)
    img = Image.open(buf).convert("RGBA")
    W, H = img.size

    badge_d = int(W * BADGE_FRAC)
    owl_d = int(W * OWL_FRAC)
    cx, cy = W // 2, H // 2

    draw = ImageDraw.Draw(img)
    r = badge_d // 2
    # White badge with a gold ring
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=WHITE, outline=GOLD,
                 width=max(3, W // 200))

    # Fit owl into a square, preserving aspect
    ow, oh = owl.size
    scale = min(owl_d / ow, owl_d / oh)
    owl_r = owl.resize((max(1, int(ow * scale)), max(1, int(oh * scale))), Image.LANCZOS)
    img.alpha_composite(owl_r, (cx - owl_r.width // 2, cy - owl_r.height // 2))

    img.convert("RGB").save(OUT_PNG, "PNG")
    return W


def make_svg(owl, qr_px_hint):
    qr = segno.make(URL, error="h")
    scale = 10
    border = 4
    w, h = qr.symbol_size(scale=scale, border=border)
    buf = io.BytesIO()
    qr.save(buf, kind="svg", scale=scale, border=border, dark=NAVY, light=WHITE,
            unit="", svgns=True, xmldecl=True)
    svg = buf.getvalue().decode("utf-8")

    # Encode the owl crop as base64 PNG for a self-contained SVG
    ob = io.BytesIO()
    owl.save(ob, "PNG")
    owl_b64 = base64.b64encode(ob.getvalue()).decode("ascii")

    cx, cy = w / 2, h / 2
    badge_r = w * BADGE_FRAC / 2
    owl_w = w * OWL_FRAC
    ow, oh = owl.size
    s = min(owl_w / ow, owl_w / oh)
    iw, ih = ow * s, oh * s
    overlay = (
        f'<circle cx="{cx}" cy="{cy}" r="{badge_r}" fill="{WHITE}" '
        f'stroke="{GOLD}" stroke-width="{w/200:.2f}"/>'
        f'<image x="{cx - iw/2:.2f}" y="{cy - ih/2:.2f}" width="{iw:.2f}" '
        f'height="{ih:.2f}" href="data:image/png;base64,{owl_b64}"/>'
    )
    svg = svg.replace("</svg>", overlay + "</svg>")
    with open(OUT_SVG, "w", encoding="utf-8") as f:
        f.write(svg)


def main():
    owl = crop_owl(LOGO)
    print(f"owl crop size: {owl.size}")
    w = make_png(owl)
    make_svg(owl, w)
    print(f"wrote {OUT_PNG} ({w}px) and {OUT_SVG} for {URL}")


if __name__ == "__main__":
    main()
