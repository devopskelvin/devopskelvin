document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.profile-title');
    if (titleElement) {
        let originalText = titleElement.dataset.title || titleElement.textContent;
        
        originalText = originalText.replace(/ /g, '\u00A0');

        titleElement.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        typeWriter();
    }
});
