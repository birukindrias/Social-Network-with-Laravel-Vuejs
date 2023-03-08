
<template>
    <main>

        <div class="flex items-center justify-center h-screen bg-gray-100">
            <div class="bg-white rounded-lg shadow-xl border p-8 w-3xl">
                <div class="mb-4">
                    <h1 class="font-semibold text-gray-800">Friend Requests</h1>
                </div>
                <div class="i" v-for="user in users">

                    <div class="flex justify-center items-center mb-8">
                        <div class="w-1/5">
                            <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                                src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
                        </div>

                        <div class="w-4/5">
                            
                            <span class="font-semibold text-gray-800">{{ user.name }}</span>
                        </div>
                    
                        <!-- {{ user.friend_id }} -->
                        <button @click="freindRequestsend(user.id)">Follow</button>
                    </div>
                </div>
            </div>
          
        </div>
    </main>
</template>
<script setup>
import store from "../store";
import { onBeforeMount } from 'vue'
import { computed, onMounted, ref } from "vue";
import FreindsRequest from "./freindsRequest.vue";
const users = computed(() => store.state.users);
// const friend_id = 1
onBeforeMount(() => {
    console.log('hi');


})
onMounted(() => {
    store.dispatch("getAllUser");
    // store.dispatch("freindsget");

})

function freindRequestsend(data) {
    console.log(data)
    store.dispatch('freindRequestsend', { friend_id: data })


}

</script>
