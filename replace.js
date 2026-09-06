
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  content = content.replace(/bg-gradient-to-r from-primary to-secondary/g, "bg-brand-gradient");
  content = content.replace(/bg-gradient-to-tr from-primary\/10 to-secondary\/10/g, "bg-brand-gradient-soft");
  content = content.replace(/shadow-\[0_0_.*?\]/g, "shadow-glow");
  content = content.replace(/from-transparent via-primary\/50 to-transparent/g, "from-transparent via-brand/50 to-transparent");
  
  content = content.replace(/text-primary/g, "text-brand");
  content = content.replace(/bg-primary\/(\d+)/g, "bg-brand/$1");
  content = content.replace(/border-primary\/(\d+)/g, "border-brand/$1");
  content = content.replace(/border-primary/g, "border-brand");
  
  // the glowing pulse dot in Hero
  content = content.replace(/bg-primary animate-pulse/g, "bg-brand animate-pulse");

  fs.writeFileSync(filePath, content, "utf-8");
}
console.log("Replaced successfully!");

