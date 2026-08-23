import collections
import json
import pathlib
import re


root = pathlib.Path(__file__).resolve().parent
files = list((root / "pages").glob("*.md")) + [root / "product-page-template.md"]
required = [
    "title",
    "description",
    "slug",
    "pageType",
    "primaryKeyword",
    "audience",
    "intent",
    "buyerStage",
    "status",
    "primaryCta",
    "primaryCtaHref",
    "proofStatus",
    "reviewers",
]

rows = []
slugs = set()
missing = []

for path in files:
    text = path.read_text(encoding="utf-8")
    frontmatter = text.split("---", 2)[1] if text.startswith("---") else ""
    missing_fields = [
        field
        for field in required
        if not re.search(rf"(?m)^{re.escape(field)}:\s*(.+)$", frontmatter)
    ]
    if missing_fields:
        missing.append((path.name, missing_fields))

    slug_match = re.search(r'(?m)^slug:\s*["\']?([^"\'\n]+)', frontmatter)
    slug = slug_match.group(1).strip() if slug_match else ""
    slugs.add(slug)

    status_match = re.search(r'(?m)^status:\s*["\']?([^"\'\n]+)', frontmatter)
    status = status_match.group(1).strip() if status_match else ""
    body = text.split("---", 2)[-1]
    words = len(re.findall(r"\b[\w-]+\b", body))
    rows.append((path.name, slug, status, words, text.count("[DATA NEEDED:")))

unresolved_links = []
paragraph_locations = collections.defaultdict(list)
for path in files:
    text = path.read_text(encoding="utf-8")
    for url in re.findall(r"\]\((/[^)]+)\)", text):
        target = url.split("#")[0]
        if target and target not in slugs:
            unresolved_links.append((path.name, url))
    body = text.split("---", 2)[-1]
    for paragraph in re.split(r"\n\s*\n", body):
        normalized = " ".join(paragraph.split())
        if (
            len(normalized) >= 120
            and not normalized.startswith("[")
            and not normalized.startswith("|")
            and not normalized.startswith("- [")
            and not normalized.startswith("Source:")
        ):
            paragraph_locations[normalized].append(path.name)

duplicate_paragraphs = [
    {"files": locations, "text": paragraph[:180]}
    for paragraph, locations in paragraph_locations.items()
    if len(set(locations)) > 1
]

result = {
    "file_count": len(files),
    "missing_frontmatter": missing,
    "unresolved_internal_links": unresolved_links,
    "status_counts": dict(collections.Counter(row[2] for row in rows)),
    "data_needed_total": sum(row[4] for row in rows),
    "short_pages_under_250_words": [row for row in rows if row[3] < 250],
    "duplicate_long_paragraphs": duplicate_paragraphs,
}

print(json.dumps(result, ensure_ascii=False, indent=2))
