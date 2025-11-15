document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.profile-title');
    if (titleElement) {
        // Leia do atributo data-title, ou use textContent como fallback
        let originalText = titleElement.dataset.title || titleElement.textContent;
        
        // FORÇA a substituição de espaços normais por espaços não-separáveis
        originalText = originalText.replace(/ /g, '\u00A0');

        titleElement.textContent = ''; // Use textContent para escrever
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i); // Use textContent para escrever
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        typeWriter();
    }
});
