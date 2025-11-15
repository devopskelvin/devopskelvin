document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.profile-title');
    if (titleElement) {
        const originalText = titleElement.innerText;
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
