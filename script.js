// Функция для определения устройства
function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Функция для перенаправления на соответствующую версию сайта
function redirectToVersion() {
    if (isMobileDevice()) {
        window.location.href = 'mobile.html';
    } else {
        window.location.href = 'desktop.html';
    }
}

// Добавление обработчиков событий для кнопок
document.getElementById('desktopButton').addEventListener('click', function() {
    window.location.href = 'desktop.html';
});

document.getElementById('mobileButton').addEventListener('click', function() {
    window.location.href = 'mobile.html';
});

// Автоматическое перенаправление на основе устройства
redirectToVersion();