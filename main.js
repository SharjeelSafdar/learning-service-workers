if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported!')
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw2.js')
            .then(
                reg => console.log('Service Worker Registered :) :', reg)
            )
            .catch(
                err => console.log(`Service Worker not Registered :( Error: ${err}`)
            )
    })
}