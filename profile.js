document.addEventListener('DOMContentLoaded', function () {
    // Get all post and highlight images
    const postImages = document.querySelectorAll('.post img');
    const highlightImages = document.querySelectorAll('.highlight img');
    const profileImage = document.querySelector('#profile'); // Profile image element
    
    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    // Create an image element inside the modal
    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);

    // Function to open modal with the clicked image
    function openModal(imgSrc) {
        modalImage.src = imgSrc;
        modal.style.display = 'flex';  // Use 'flex' to center the modal content
    }

    // Add event listeners for post images
    postImages.forEach(function (img) {
        img.addEventListener('click', function () {
            openModal(img.src);
        });
    });

    // Add event listeners for highlight images
    highlightImages.forEach(function (img) {
        img.addEventListener('click', function () {
            openModal(img.src);
        });
    });

    // Add event listener for profile image
    profileImage.addEventListener('click', function () {
        openModal(profileImage.src);
    });

    // Add an event listener to close the modal when clicked
    modal.addEventListener('click', function () {
        modal.style.display = 'none';  // Hide the modal
    });
});
