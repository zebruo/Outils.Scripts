// Gestion du menu burger (mobile uniquement)
        const burgerMenu = document.getElementById('burgerMenu');
        const burgerNav = document.getElementById('burgerNav');
        const burgerClose = document.getElementById('burgerClose');
        const burgerOverlay = document.getElementById('burgerOverlay');

        function openBurgerMenu() {
          burgerNav.classList.add('active');
          burgerOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        function closeBurgerMenu() {
          burgerNav.classList.remove('active');
          burgerOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }

        if (burgerMenu) {
          burgerMenu.addEventListener('click', openBurgerMenu);
        }
        
        if (burgerClose) {
          burgerClose.addEventListener('click', closeBurgerMenu);
        }
        
        if (burgerOverlay) {
          burgerOverlay.addEventListener('click', closeBurgerMenu);
        }

        // Fermer le menu lors du clic sur un lien
        document.querySelectorAll('.burger-nav-item').forEach(item => {
          item.addEventListener('click', closeBurgerMenu);
        });

        // Gérer l'ouverture du person-panel depuis le burger menu
        const burgerOpenPanel = document.getElementById('burgerOpenPanel');
        if (burgerOpenPanel) {
          burgerOpenPanel.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Fermer le burger menu d'abord
            closeBurgerMenu();
            
            // Ouvrir le panel après un court délai pour une meilleure UX
            setTimeout(() => {
              const personPanel = document.getElementById('person-panel');
              if (personPanel && personPanel.classList.contains('is-open')) {
                // Si le panel est déjà ouvert, le fermer
                familyTreeApp.closePanel();
              } else if (familyTreeApp.currentPersonId) {
                // Sinon l'ouvrir avec la personne courante
                familyTreeApp.openPanel(familyTreeApp.currentPersonId);
              } else {
                // Si pas de personne sélectionnée, ouvrir le panel vide
                personPanel.classList.add('is-open');
                const arrow = document.getElementById('rootTabArrow');
                if (arrow) {
                  arrow.classList.add('rotated');
                }
              }
            }, 300);
          });
        }

        // Gérer le dark mode pour le menu burger
        const burgerDarkMode = document.getElementById('burgerDarkMode');
        if (burgerDarkMode) {
          burgerDarkMode.addEventListener('click', function(e) {
            e.preventDefault();
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            if (darkModeToggle) {
              darkModeToggle.click();
            }
          });
        }

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && burgerNav && burgerNav.classList.contains('active')) {
            closeBurgerMenu();
          }
        });