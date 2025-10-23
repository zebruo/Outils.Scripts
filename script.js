const tools = [
  {
    name: "Convertisseur PDF",
    file: "assets/pdf-tool.exe"
  },
  {
    name: "Script Python Nettoyage",
    file: "assets/cleaner.py"
  },
  {
    name: "Pack d'icônes",
    file: "assets/icons.zip"
  }
];

const container = document.getElementById("tool-list");

tools.forEach(tool => {
  const div = document.createElement("div");
  div.className = "tool";
  div.innerHTML = `
    <h3>${tool.name}</h3>
    <a href="${tool.file}" download>Télécharger</a>
  `;
  container.appendChild(div);
});
