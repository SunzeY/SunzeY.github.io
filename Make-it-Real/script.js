document.addEventListener('DOMContentLoaded', function() {
    // 初始化每个滑块和视频的功能
    for (let j = 1; j <= 1; j++) {
        for (let i = 1; i <= 4; i++) {
            initializeSlider(`container${j}_${i}`);
        }
    }
});

function initializeSlider(containerId) {
    const container = document.getElementById(containerId);
    const slider = container.querySelector('.my-video-slider');
    const videos = container.getElementsByTagName('video');
    let isDragging = false;

    slider.addEventListener('mousedown', function(event) {
        isDragging = true;
        event.preventDefault(); // Prevent default dragging action
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            const rect = container.getBoundingClientRect();
            let newLeft = event.clientX - rect.left; // Calculate new position relative to container
            newLeft = Math.max(0, Math.min(newLeft, rect.width)); // Limit newLeft to container's width

            slider.style.left = `${newLeft}px`;
            videos[0].style.clipPath = `polygon(0 0, ${newLeft}px 0, ${newLeft}px 100%, 0 100%)`;
            videos[1].style.clipPath = `polygon(${newLeft}px 0, 100% 0, 100% 100%, ${newLeft}px 100%)`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Sync videos on load to start at the same time
    videos[0].addEventListener('canplay', syncVideos);
    videos[1].addEventListener('canplay', syncVideos);
    function syncVideos() {
        if (videos[0].readyState > 3 && videos[1].readyState > 3) {
            videos[0].currentTime = videos[1].currentTime;
        }
    }

    // Initialize slider position in the middle
    const rect = container.getBoundingClientRect();
    const initialLeft = rect.width / 2;
    slider.style.left = `${initialLeft}px`;
    videos[0].style.clipPath = `polygon(0 0, ${initialLeft}px 0, ${initialLeft}px 100%, 0 100%)`;
    videos[1].style.clipPath = `polygon(${initialLeft}px 0, 100% 0, 100% 100%, ${initialLeft}px 100%)`;
}
