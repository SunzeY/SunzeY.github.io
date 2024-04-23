const slider = document.getElementById('slider');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
let isDragging = false;

slider.addEventListener('mousedown', function(event) {
    isDragging = true;
    event.preventDefault(); // 防止默认行为干扰拖动操作
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
        const container = document.getElementById('container');
        const rect = container.getBoundingClientRect();
        const newLeft = event.clientX - rect.left; // 计算新的位置

        // 设置视频和滑块的裁剪和位置
        slider.style.left = newLeft + 'px';
        video1.style.clipPath = `polygon(0 0, ${newLeft}px 0, ${newLeft}px 100%, 0 100%)`;
        video2.style.clipPath = `polygon(${newLeft}px 0, 100% 0, 100% 100%, ${newLeft}px 100%)`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

window.addEventListener('resize', function() {
    const newLeft = parseInt(slider.style.left, 10);
    video1.style.clipPath = `polygon(0 0, ${newLeft}px 0, ${newLeft}px 100%, 0 100%)`;
    video2.style.clipPath = `polygon(${newLeft}px 0, 100% 0, 100% 100%, ${newLeft}px 100%)`;
});