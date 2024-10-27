document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.quote');
    let currentIndex = 0;

    // Mostra a primeira frase
    quotes[currentIndex].classList.add('active');

    // Função para mostrar a frase atual
    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.classList.remove('active');
            if (i === index) {
                quote.classList.add('active');
            }
        });
    }

    // Botões de navegação do carrossel
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? quotes.length - 1 : currentIndex - 1;
        showQuote(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === quotes.length - 1) ? 0 : currentIndex + 1;
        showQuote(currentIndex);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-section ul li > a.has-submenu');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link

            // Alterna a visibilidade do submenu correspondente
            const submenu = item.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                closeAllSubmenus(); // Fecha outros submenus abertos
                submenu.style.display = 'block';
            }
        });
    });

    // Para submenus de segundo nível
    const subMenuItems = document.querySelectorAll('.submenu > li > a.has-submenu');
    
    subMenuItems.forEach(subItem => {
        subItem.addEventListener('click', (e) => {
            e.preventDefault();
            const subMenu2 = subItem.nextElementSibling;
            
            if (subMenu2.style.display === 'block') {
                subMenu2.style.display = 'none';
            } else {
                closeAllSubmenus();
                subMenu2.style.display = 'block';
            }
        });
    });

    // Fecha todos os submenus ao clicar fora do menu
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-section')) {
            closeAllSubmenus();
        }
    });

    // Função para fechar todos os submenus
    function closeAllSubmenus() {
        document.querySelectorAll('.submenu, .submenu-2').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});
