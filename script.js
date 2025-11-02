// Simple script for Levin's Spill portal
console.log("Levin's Spill - portal lastet!");

document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        const detailsId = button.getAttribute('aria-controls');
        const details = detailsId ? document.getElementById(detailsId) : button.parentElement.nextElementSibling;

        if (!details) {
            return;
        }

        button.addEventListener('click', () => {
            const isOpen = details.classList.toggle('active');
            button.textContent = isOpen ? '-' : '+';
            button.setAttribute('aria-expanded', String(isOpen));
        });
    });

    // Add a simple easter egg
    let konami = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const codeLength = konamiCode.length;
    
    document.addEventListener('keydown', (event) => {
        konami.push(event.key);
        konami = konami.slice(-codeLength);
        
        if (konami.join('') === konamiCode.join('')) {
            document.body.style.animation = 'rainbow 2s infinite';
            console.log('Konami Code aktivert!');
        }
    });
});

// Optional: Add CSS animation for Konami code easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

