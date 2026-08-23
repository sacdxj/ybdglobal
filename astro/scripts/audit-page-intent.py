from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIELDS = [
    "title", "route", "pageType", "primaryKeyword", "audience", "intent",
    "buyerStage", "status", "primaryCta", "proofStatus",
]

def frontmatter(path: Path) -> dict[str, str]:
    data = {field: "" for field in FIELDS}
    text = path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    if len(parts) < 3:
        return data
    for line in parts[1].splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        if key in data:
            data[key] = value.strip().strip('"').strip("'")
    return data

rows = []
for path in sorted((ROOT / "src" / "content" / "site").glob("*.md")):
    data = frontmatter(path)
    if data["status"] != "draft":
        rows.append((path.name, data))

print("\t".join(["file", *FIELDS]))
for filename, data in rows:
    print("\t".join([filename, *(data[field] for field in FIELDS)]))

required = ["title", "route", "pageType", "audience", "intent", "buyerStage", "status", "proofStatus"]
missing = [(filename, field) for filename, data in rows for field in required if not data[field]]
print(f"\nACTIVE={len(rows)}")
print(f"MISSING_REQUIRED={len(missing)}")
for filename, field in missing:
    print(f"MISSING\t{filename}\t{field}")
