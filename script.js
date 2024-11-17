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
    // Menu com 3 níveis de submenus
    const menuItems = document.querySelectorAll('.menu-section .has-submenu');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const submenu = item.nextElementSibling;
            
            // Se o submenu de primeiro nível for clicado, exibe
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.style.display = 'block';
            }

            // Se o submenu de segundo nível for clicado, exibe
            if (submenu && submenu.classList.contains('submenu-2')) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', (e) => {
            const submenu = item.nextElementSibling;
            
            // Fecha o submenu quando o mouse sai
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.style.display = 'none';
            }
            
            if (submenu && submenu.classList.contains('submenu-2')) {
                submenu.style.display = 'none';
            }
        });
    });

    // Fecha todos os submenus ao clicar fora do menu
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-section')) {
            closeAllSubmenus();
        }
    });

    function closeAllSubmenus() {
        document.querySelectorAll('.submenu, .submenu-2').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});
