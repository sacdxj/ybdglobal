import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "D:/软件/weixin/xwechat_files/husac__070c/msg/file/2026-07/G1价目表参数表.xlsx";
const outputDir = path.resolve("outputs/g1_product_params");

await fs.mkdir(outputDir, { recursive: true });

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const overview = await workbook.inspect({
  kind: "workbook,sheet,table,region,drawing",
  maxChars: 24000,
  tableMaxRows: 30,
  tableMaxCols: 30,
  tableMaxCellChars: 200,
});

const sheetList = await workbook.inspect({
  kind: "sheet",
  include: "id,name",
  maxChars: 10000,
});

await fs.writeFile(path.join(outputDir, "workbook_overview.ndjson"), overview.ndjson, "utf8");
await fs.writeFile(path.join(outputDir, "sheet_list.ndjson"), sheetList.ndjson, "utf8");

const parsedSheets = [];
for (const line of sheetList.ndjson.trim().split(/\r?\n/)) {
  if (!line.trim()) continue;
  const row = JSON.parse(line);
  if (row.kind !== "sheet") continue;
  const sheetName = row.name;
  const sheet = workbook.worksheets.getItem(sheetName);
  const used = sheet.getUsedRange(true);
  const values = used.values;
  parsedSheets.push({
    name: sheetName,
    rowCount: values.length,
    colCount: values.reduce((max, r) => Math.max(max, r.length), 0),
    values,
  });

  const render = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    path.join(outputDir, `${sheetName.replace(/[\\/:*?"<>|]/g, "_")}.png`),
    new Uint8Array(await render.arrayBuffer()),
  );
}

await fs.writeFile(path.join(outputDir, "sheet_values.json"), JSON.stringify(parsedSheets, null, 2), "utf8");

console.log(JSON.stringify({
  source: inputPath,
  sheets: parsedSheets.map(({ name, rowCount, colCount }) => ({ name, rowCount, colCount })),
  outputs: {
    overview: path.join(outputDir, "workbook_overview.ndjson"),
    sheetValues: path.join(outputDir, "sheet_values.json"),
  },
}, null, 2));
