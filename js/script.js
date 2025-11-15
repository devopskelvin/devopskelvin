document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.profile-title');
    if (titleElement) {
        // Leia do atributo data-title, ou use textContent como fallback
        const originalText = titleElement.dataset.title || titleElement.textContent;
        titleElement.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                titleElement.innerText += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        typeWriter();
    }
});
