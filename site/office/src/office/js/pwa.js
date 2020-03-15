const pwa = () => {

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then((reg) => {
                    console.log('Service worker registered.', reg);
                }, ( error ) => {
                    console.log('error', error)
                });
        });
    }

};


export {pwa};
