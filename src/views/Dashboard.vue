<template>
    <button @click="st">stat</button>
    <div>
        <post />
    </div>
</template>

<script setup>
import post from '../components/user/post.vue';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// export default {
// compo
// components(() => post)

function st() {

window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: '127.0.0.1',
    // wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,

    wsPort: 6001,
    forceTLS: false,
    encrypted: false,
    enabledTransports: ['ws', 'wss'],
});


const cha = window.Echo.channel('public.playground.1');
cha.subscribed(() => {
    console.log('subscribe')
})
console.log('aaaaaaaaa')
}
// }
</script>

<style lang="scss" scoped></style>