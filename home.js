const like = {
    "heart.png": "redheart.png",
    "redheart.png": "heart.png",
};

const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const currentSrc = image.src.split('/').pop();
        
        if (like[currentSrc]) {
            image.src = like[currentSrc];
        }
    });
});