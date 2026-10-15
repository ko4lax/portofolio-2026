projects = [
    ("me-lia.svg",  "Me+Lia", "E-commerce · Figma", "#0f766e", "#14b8a6"),
    ("faza-architect.svg", "Faza Architect", "Portfolio UI", "#b45309", "#f59e0b"),
    ("bellrock.svg",   "Bellrock Artisan Coffee", "Landing + Storefront", "#78350f", "#d97706"),
    ("bni.svg",        "BNI Mobile Banking", "UX Redesign",   "#1d4ed8", "#3b82f6"),
    ("tiktok-shop.svg","TikTok Shop", "UX Research", "#be185d", "#f472b6"),
    ("warehouse.svg",  "Warehouse Manager", "Next.js Capstone", "#15803d", "#22c55e"),
]

base = "/c/Users/Koala/portofolio-2026/public/projects"
import os
os.makedirs(base, exist_ok=True)

for fname, title, sub, c1, c2 in projects:
    lines = []
    lines.append('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="506" viewBox="0 0 900 506">')
    lines.append('  <defs>')
    lines.append('    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">')
    lines.append(f'      <stop offset="0" stop-color="{c1}"/>')
    lines.append(f'      <stop offset="1" stop-color="{c2}"/>')
    lines.append('    </linearGradient>')
    lines.append('  </defs>')
    lines.append(f'  <rect width="900" height="506" fill="url(#g)"/>')
    lines.append(f'  <rect x="0" y="0" width="900" height="6" fill="{c2}"/>')
    lines.append(f'  <rect x="0" y="500" width="900" height="6" fill="{c1}"/>')
    lines.append(f'  <text x="450" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="46" font-weight="800" fill="#ffffff" text-anchor="middle">{title}</text>')
    lines.append(f'  <text x="450" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" opacity="0.92">{sub}</text>')
    lines.append('  <text x="450" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle" opacity="0.75">Screenshot placeholder - replace with real UI frames</text>')
    lines.append(f'  <rect x="200" y="380" width="500" height="8" rx="4" fill="#ffffff" opacity="0.25"/>')
    lines.append(f'  <text x="450" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle" opacity="0.9">UI/UX - Design + Front-end</text>')
    lines.append('</svg>')
    svg = "\n".join(lines) + "\n"
    with open(os.path.join(base, fname), "w") as f:
        f.write(svg)
    print("wrote", fname)
