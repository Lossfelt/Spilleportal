// Simple script for Levin's Spill portal
console.log('🎮 Levin\'s Spill - Portal lastet!');

document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.parentElement.nextElementSibling;
            details.classList.toggle('active');

            if (details.classList.contains('active')) {
                button.textContent = '[ - ]';
            } else {
                button.textContent = '[ + ]';
            }
        });
    });

    // Add a simple easter egg
    let konami = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konami.push(e.key);
        konami = konami.slice(-10);
        
        if (konami.join('') === konamiCode.join('')) {
            document.body.style.animation = 'rainbow 2s infinite';
            console.log('🎉 Konami Code aktivert!');
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
