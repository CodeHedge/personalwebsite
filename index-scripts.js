// index-scripts.js

// Background GIF rotation
let audioPlayed = false;
let gifs = [
    "https://media3.giphy.com/media/3ohs4oQe6t43f6ZBS0/giphy.gif?cid=ecf05e47bnh31mnvufgaxxjjuufx0tprj20h40zai3g2x3xq&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/TQmCzpo9oqniU/giphy.gif?cid=ecf05e47bnh31mnvufgaxxjjuufx0tprj20h40zai3g2x3xq&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZraDRmMGQ4cm5pdDYxaWE4ZTMyNXBrMDZxdzF3dXphN2FhN3IwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9k4xC1ijCwGiC5y/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2d3cDV2NXMybHFwdTVoMGUxNm0zYTc4ZGx2bTJsaDFxY251YmZ3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jEnypymbFQJ9CM/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlldXFpOGZ4Y2VuODg1YXFpZ3Q2ZDQ1dG1qNXczeGt5aTY0bDE5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VI2UC13hwWin1MIfmi/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3puMGozN3V5OWw1a29oNW95MXNqc3NjbDRqYjRtMW0zd3dlbGRmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CGTN1SVEwIThC/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3A2eWxyeDRvdXRnem1jaWNlMHZwZGJuMWJld2g5OHliZG81aDhiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cInsDfTTM8Hlu/giphy.webp"
];

// Pre-load GIFs
let preloadedGifs = [];
gifs.forEach((gif) => {
    let img = new Image();
    img.src = gif;
    preloadedGifs.push(img);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const bgAudio = document.getElementById('bgAudio');
    const body = document.body;
    const actualContent = document.getElementById('actualContent');
    const audioToggle = document.getElementById('audioToggle');
    let currentGifIndex = 0;
    let isPlaying = false; // Track the audio state

    // Function to rotate background GIFs
    function rotateGifs() {
        body.style.backgroundImage = `url('${gifs[currentGifIndex]}')`;
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
    }

    if (bgAudio) {
        bgAudio.pause(); // Pause the audio by default

        // Ensure actualContent is visible
        if (actualContent) {
            actualContent.style.display = 'block';
            actualContent.style.opacity = '1';
        }

        // Start the GIF rotation
        setInterval(rotateGifs, 5000);

        // Audio toggle functionality
        audioToggle.addEventListener('click', () => {
            if (isPlaying) {
                bgAudio.pause();
                audioToggle.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
            } else {
                bgAudio.play();
                audioToggle.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
            }
            isPlaying = !isPlaying; // Toggle the audio state
        });
    }
});
