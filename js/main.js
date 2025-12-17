window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const content = document.getElementById('main-content');
    
    // Set minimum display time (2000ms = 2 seconds)
    const minLoadTime = 2000; 
    const startTime = Date.now();

    const finishLoading = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);

        setTimeout(() => {
            // Fade out the loader
            loader.classList.add('loader-hidden');
            
            // Fade in the content
            content.classList.add('content-visible');

            // Optional: Completely remove loader from HTML after it fades
            setTimeout(() => {
                loader.remove();
            }, 600);
        }, remainingTime);
    };

    finishLoading();
});