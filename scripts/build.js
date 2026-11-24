
const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const destino = path.join(raiz, "dist");

console.log("Iniciando Build...");

if (fs.existsSync(destino)) {
  fs.rmSync(destino, {
    recursive: true,
    force: true
  });
}

fs.mkdirSync(destino, { recursive: true });

const arquivos = ["index.html", "style.css"];

for (const arquivo of arquivos) {
  fs.copyFileSync(
    path.join(raiz, arquivo),
    path.join(destino, arquivo)
  );
}

console.log("Build concluido com sucesso!");
console.log("Arquivos salvos na pasta dist.");
