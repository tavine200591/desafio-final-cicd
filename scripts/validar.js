
const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const limite = 500 * 1024;
let erros = 0;

console.log("Iniciando validacao do projeto...");

function verificar(mensagem) {
  console.error("ERRO: " + mensagem);
  erros++;
}

function percorrer(pasta) {
  const arquivos = fs.readdirSync(pasta, { withFileTypes: true });

  for (const item of arquivos) {
    if (["node_modules", ".git", ".github", "dist", "build"].includes(item.name)) {
      continue;
    }

    const caminho = path.join(pasta, item.name);

    if (item.isDirectory()) {
      percorrer(caminho);
    } else if (fs.statSync(caminho).size > limite) {
      verificar(item.name + " ultrapassou 500 KB.");
    }
  }
}

const index = path.join(raiz, "index.html");

if (!fs.existsSync(index)) {
  verificar("index.html nao encontrado.");
} else {
  const html = fs.readFileSync(index, "utf8");

  if (/<!--[\s\S]*?\b(TODO|FIXME|password|senha)\b[\s\S]*?-->/i.test(html)) {
    verificar("Comentario proibido encontrado.");
  }

  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)]
    .map(item => item[1]);

  for (const item of html.matchAll(/\bhref=["']([^"']*)["']/g)) {
    const valor = item[1].trim();

    if (valor.startsWith("#") && !ids.includes(valor.slice(1))) {
      verificar("Destino nao encontrado: " + valor);
    }
  }
}

percorrer(raiz);

if (erros > 0) {
  console.error("Validacao reprovada: " + erros + " erro(s).");
  process.exit(1);
}

console.log("Todos os testes foram aprovados!");
