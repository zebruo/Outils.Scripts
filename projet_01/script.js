// Gère l'ouverture/fermeture du menu burger
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Gère l'affichage des différentes pages/sections
function showPage(pageId) {
    // Masque toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Affiche la page demandée
    document.getElementById(pageId).classList.add('active');

    // Ferme le menu mobile si ouvert
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Fonction pour le compteur de mots
const wordInput = document.getElementById('wordInput');
if (wordInput) { // S'assure que l'élément existe avant d'ajouter l'écouteur
    wordInput.addEventListener('input', () => {
        const text = wordInput.value.trim();
        const wordCount = text ? text.split(/\s+/).filter(word => word !== '').length : 0;
        document.getElementById('wordCount').innerText = wordCount;
    });
}

// Afficher la page "Honceuil" (home) au chargement
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});