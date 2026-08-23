from __future__ import annotations

from pathlib import Path

import pandas as pd
from PIL import Image, ImageDraw, ImageFont

from content_architecture_alignment import apply_content_alignment


BASE_DIR = Path(__file__).resolve().parent
OUTPUTS_DIR = BASE_DIR / "outputs"
WIDTH = 1440
HEIGHT = 1800


def pick_workbook() -> Path:
    for name in [
        "electric_dirt_bike_keyword_architecture_serp.xlsx",
        "electric_dirt_bike_keyword_architecture_semantic.xlsx",
        "electric_dirt_bike_keyword_architecture_serp_dryrun.xlsx",
        "electric_dirt_bike_keyword_architecture.xlsx",
    ]:
        path = OUTPUTS_DIR / name
        if path.exists():
            return path
    raise FileNotFoundError("No electric dirt bike workbook found in outputs.")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def num(value) -> str:
    try:
        return format(int(float(value)), ",")
    except Exception:
        return str(value or "")


def draw_round(draw: ImageDraw.ImageDraw, box, radius: int, fill, outline=None) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline)


def main() -> None:
    workbook = pick_workbook()
    prod = pd.read_excel(workbook, sheet_name="Production_Batches")
    prod = apply_content_alignment(prod)
    prod["Production Decision"] = prod["Final Content Decision"]
    km = pd.read_excel(workbook, sheet_name="Keyword_Master")
    build_now = prod[prod["Production Decision"].eq("Build now")].sort_values("Total Search Volume", ascending=False)
    hubs = (
        prod.groupby("Hub", dropna=False)
        .agg(Pages=("Primary Keyword", "count"), Volume=("Total Search Volume", "sum"))
        .reset_index()
        .sort_values("Volume", ascending=False)
    )
    decisions = prod["Production Decision"].value_counts().to_dict()

    img = Image.new("RGB", (WIDTH, HEIGHT), "#f7f8f3")
    d = ImageDraw.Draw(img)
    title_f = font(42, True)
    h2_f = font(26, True)
    body_f = font(18)
    small_f = font(14)
    metric_f = font(34, True)

    d.rectangle((0, 0, WIDTH, 150), fill="#102017")
    d.text((40, 34), "Electric Dirt Bike SEO Dashboard", fill="#ffffff", font=title_f)
    d.text((42, 92), f"Workbook: {workbook.name}", fill="#c7d6c8", font=body_f)

    metrics = [
        ("Source Keywords", len(km)),
        ("Page Candidates", len(prod)),
        ("Build Now", decisions.get("Build now", 0)),
        ("Build Later", decisions.get("Build later", 0)),
        ("Review", decisions.get("Manual review before build", 0)),
        ("Parent/FAQ", decisions.get("Merge into parent/FAQ", 0)),
    ]
    x, y = 40, 180
    card_w, card_h, gap = 210, 104, 16
    for label, value in metrics:
        draw_round(d, (x, y, x + card_w, y + card_h), 10, "#ffffff", "#d9e1d5")
        d.text((x + 18, y + 16), num(value), fill="#3f6b47", font=metric_f)
        d.text((x + 18, y + 64), label.upper(), fill="#66736b", font=small_f)
        x += card_w + gap

    y = 330
    d.text((40, y), "Own-Brand Navigation", fill="#18201b", font=h2_f)
    menu_cards = [
        ("Shop All", ["All products"]),
        ("Adult Dirt Bikes", ["Performance Bikes", "72V Powerhouses", "60V Performance"]),
        ("Kids & Youth", ["Ages 8-12", "Teens & Youth (13+)", "24V / 36V / 48V Safety Guide"]),
        ("Street Legal", ["Dual-Sport Bikes", "Registry & Compliance Guide"]),
        ("Buying Guides", ["Range", "Motor & Power", "Voltage", "Ownership"]),
        ("Blog / SEO Only", ["Competitor Comparisons", "Alternatives", "Budget Guides", "Link to Own Brand"]),
    ]
    x, y = 40, 380
    mw, mh = 420, 132
    for i, (label, items) in enumerate(menu_cards):
        if i and i % 3 == 0:
            x = 40
            y += mh + 18
        draw_round(d, (x, y, x + mw, y + mh), 10, "#ffffff", "#d9e1d5")
        d.rectangle((x, y, x + 6, y + mh), fill="#c48a35")
        d.text((x + 18, y + 16), label, fill="#18201b", font=body_f)
        yy = y + 48
        for item in items[:4]:
            d.text((x + 28, yy), f"- {item}", fill="#39463d", font=small_f)
            yy += 20
        x += mw + 18

    y = 700
    d.text((40, y), "Hub Distribution", fill="#18201b", font=h2_f)
    max_vol = max([float(v) for v in hubs["Volume"]]) if len(hubs) else 1
    y += 50
    for _, row in hubs.iterrows():
        label = str(row["Hub"])
        vol = float(row["Volume"])
        pages = int(row["Pages"])
        bar_w = int(760 * vol / max_vol) if max_vol else 0
        d.text((50, y), f"{label}  ·  {pages} pages  ·  {num(vol)} volume", fill="#18201b", font=body_f)
        d.rounded_rectangle((50, y + 30, 820, y + 42), radius=6, fill="#e8ece4")
        d.rounded_rectangle((50, y + 30, 50 + bar_w, y + 42), radius=6, fill="#3f6b47")
        y += 70

    y += 30
    d.text((40, y), "Build Now Queue", fill="#18201b", font=h2_f)
    y += 48
    headers = ["Hub", "Page", "Keyword", "Volume"]
    xs = [42, 290, 760, 1220]
    for header, xx in zip(headers, xs):
        d.text((xx, y), header.upper(), fill="#66736b", font=small_f)
    y += 28
    for _, row in build_now.head(15).iterrows():
        d.line((40, y - 8, 1390, y - 8), fill="#d9e1d5")
        d.text((42, y), str(row["Hub"])[:24], fill="#285432", font=small_f)
        d.text((290, y), str(row["Expanded Page Candidate"])[:54], fill="#18201b", font=small_f)
        d.text((760, y), str(row["Primary Keyword"])[:48], fill="#39463d", font=small_f)
        d.text((1220, y), num(row["Total Search Volume"]), fill="#18201b", font=small_f)
        y += 32

    output = OUTPUTS_DIR / "electric_dirt_bike_dashboard_preview.png"
    img.save(output)
    print(output)


if __name__ == "__main__":
    main()
