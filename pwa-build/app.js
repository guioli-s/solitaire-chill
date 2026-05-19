document.addEventListener('DOMContentLoaded', () => {
    const g = new SolitaireGame();
    const u = new GameUI(g);
    u.init();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado com sucesso!', reg.scope))
            .catch(err => console.error('Erro ao registrar Service Worker:', err));
    });
}