// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    // cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: '127.0.0.1',
    // wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,

    wssPort: 6001,
    forceTLS: false,
    encrypted: false,
    enabledTransports: ['ws', 'wss'],
});


const channel = Echo.channel('public.playground.1');
channel.subscribed(() => {
    console.log('subscribe')
})
console.log('aaaaaaaaa')
