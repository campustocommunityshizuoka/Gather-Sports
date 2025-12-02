document.addEventListener('DOMContentLoaded', function() {
    initializeHamburgerMenu();
});

function initializeHamburgerMenu() {
    const btn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('global-nav');

    if (btn && nav) {
        // ボタンを押したらメニューを開閉
        btn.addEventListener('click', function() {
            btn.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        });
        
        // メニュー内のリンクをクリックしたら閉じる
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                btn.classList.remove('is-open');
                nav.classList.remove('is-open');
            });
        });
    }
}