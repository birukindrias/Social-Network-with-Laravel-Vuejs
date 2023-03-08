<template>
    <div>
        <!-- {{ yourFriends }} -->
        <div class="mt-5  flex items-center justify-center h-screen bg-gray-100">
            <div class="bg-white rounded-lg shadow-xl border p-8 w-3xl">
                <div class="mb-4">
                    <h1 class="font-semibold text-gray-800">accepted Friends </h1>
                </div>
                <div class="i" v-for="friends in yourFriends">

                    <div class="flex flex-row justify-between items-center mb-8">
                        <div class="w-1/5 flex flex-row justify-between">
                            <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                                src="https://randomfriends.me/api/portraits/men/20.jpg" alt="friends image" />
                                                   
            <li v-for="n in friends.users">{{ n.name }}</li>
                        </div>
                     <div class="dot">....</div>
                    </div>
                </div>
                <div class="mb-4">
                    <h1 class="font-semibold text-gray-800">Friend Requests</h1>
                </div>
                <div class="i" v-for="user in freinds">

                    <div class="flex justify-center items-center mb-8">
                        <div class="w-1/5">
                            <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                                src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
                        </div>
                        <div class="w-4/5">
                            <span class="font-semibold text-gray-800">{{ user.users.name }}
                               
            <li v-for="n in user.users">{{ n.name }}</li>
         </span>
                            <span class="text-gray-400">wants to be your friend</span>
                        </div>
                        <div class="font-semibold">
                            <a @click="freindRequestAccept(user.friend_id)" class="text-blue-600 mr-2">Accept</a>
                            <a @click="freindRequestDecline(user.friend_id)"  class="text-gray-400">Decline</a>

                        </div>
                        <!-- {{ user.friend_id }} -->
                        <!-- <button @click="freindRequestAccept(user.friend_id)">freindRequestsend</button> -->
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import store from '../store';

onBeforeMount(() => {
    store.dispatch("freindsget").then((e) => {
        console.log('lorem10')
        console.log(e)
    });

    console.log('hi');
    store.dispatch("yourFriends")


})
function freindRequestAccept(fiends_id) {
    console.log(fiends_id)
    store.dispatch("freindRequestAccept", { friend_id: fiends_id }).then((e) => {
        console.log('lorem10')
        console.log(e)
    });
    store.dispatch("freindsget")
    store.dispatch("yourFriends")

}
function freindRequestDecline(fiends_id) {
    store.dispatch("freindRequestDecline", { friend_id: fiends_id }).then((e) => {
        console.log('lorem10')
        console.log(e)
        store.dispatch("freindsget")
    store.dispatch("yourFriends")
    });
}
// const freinds = 
const freinds = computed(() => store.state.freinds);
const yourFriends = computed(() => store.state.yourFriends);
</script>
