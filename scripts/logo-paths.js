const fs = require("fs");
const s = fs.readFileSync("public/logo.svg", "utf8");
const ds = [...s.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);
ds.forEach((d, i) => {
  const n = d.match(/-?[\d.]+/g).map(Number);
  const xs = [], ys = [];
  for (let j = 0; j + 1 < n.length; j += 2) { xs.push(n[j]); ys.push(n[j + 1]); }
  console.log(i, Math.min(...xs).toFixed(1), Math.max(...xs).toFixed(1), Math.min(...ys).toFixed(1), Math.max(...ys).toFixed(1), /[a-df-z]/.test(d) ? "REL" : "");
});
fs.writeFileSync(
  "src/components/deck/logo-paths.ts",
  "export const LOGO_PATHS = " + JSON.stringify(ds, null, 1) + " as const;\n"
);
