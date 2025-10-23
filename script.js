const tools = [
  {
    name: "Nettoyeur de Bureau",
    file: "assets/nettoyeur-bureau.exe",
    description: "Supprime les fichiers temporaires et organise ton bureau en un clic."
  },
  {
    name: "Script Python - Renommage intelligent",
    file: "assets/renommage.py",
    description: "Renomme automatiquement des fichiers selon un modèle défini."
  },
  {
    name: "Pack d’icônes Flat Design",
    file: "assets/icones-flat.zip",
    description: "Une collection de 100 icônes modernes pour tes projets web ou apps."
  },
  {
    name: "Convertisseur CSV → JSON",
    file: "assets/convertisseur-csv-json.exe",
    description: "Convertit facilement des fichiers CSV en JSON pour les développeurs."
  },
  {
    name: "Script de sauvegarde automatique",
    file: "assets/sauvegarde-auto.py",
    description: "Crée une copie de sécurité de tes dossiers importants chaque jour."
  },
  {
    name: "Mini éditeur Markdown",
    file: "assets/markdown-editor.exe",
    description: "Un éditeur léger pour écrire et prévisualiser du Markdown."
  }
];

const container = document.getElementById("tool-list");

tools.forEach(tool => {
  const div = document.createElement("div");
  div.className = "tool";
  div.innerHTML = `
    <h3>${tool.name}</h3>
    <p>${tool.description}</p>
    <a href="${tool.file}" download>Télécharger</a>
  `;
  container.appendChild(div);
});

