document.addEventListener('DOMContentLoaded', () => {
    // 導覽列捲動陰影變化
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }
    });
});

// ===== 點擊炸裂彩色星星效果 =====
document.addEventListener('click', function(e) {
    const starCount = 6; 
    const colors = ['#FFD700', '#FF69B4', '#00FFFF', '#32CD32', '#FF4500', '#9370DB'];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'click-star';
        star.textContent = '★';

        const tx = (Math.random() - 0.5) * 120 + 'px';
        const ty = (Math.random() - 0.5) * 120 + 'px';
        
        star.style.setProperty('--tx', tx);
        star.style.setProperty('--ty', ty);
        
        star.style.color = colors[Math.floor(Math.random() * colors.length)];
        star.style.left = (e.clientX - 10) + 'px';
        star.style.top = (e.clientY - 10) + 'px';

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 800);
    }
});