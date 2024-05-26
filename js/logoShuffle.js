// logoShuffle.js

// Array of image URLs for the logo collection thumbnails
const logoCollectionImages = [
    "images/care-package/fp_carepackages_letitbe.jpg",
    "images/care-package/fp_carepackages_hands.jpg",
    "images/care-package/fp_carepackages_nuance.jpg",
    "images/care-package/fp_carepackages_papaya.jpg",
    "images/care-package/fp_carepackages_stillife.jpg",
    
    
    
];

// Get the logo collection image element
const logoCollectionImage = document.getElementById('logoCollectionImage');

let currentLogoIndex = 0;
let logoShuffleInterval;

function shuffleLogoImage() {
    // Update the source of the logo collection image
    logoCollectionImage.src = logoCollectionImages[currentLogoIndex];

    // Move to the next image in the array
    currentLogoIndex = (currentLogoIndex + 1) % logoCollectionImages.length;
}

// Start shuffling the logo collection images
logoShuffleInterval = setInterval(shuffleLogoImage, 500);

// Pause shuffling on hover
logoCollectionImage.addEventListener('mouseenter', () => {
    clearInterval(logoShuffleInterval);
});

// Resume shuffling on mouseleave
logoCollectionImage.addEventListener('mouseleave', () => {
    logoShuffleInterval = setInterval(shuffleLogoImage, 500);
});
