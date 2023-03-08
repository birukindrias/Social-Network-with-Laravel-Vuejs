<template>
    <div class="flex flex-col">
        <textarea name="" id="" cols="30" rows="5" v-model="itmeval" class="bg-green-600 color-brown"></textarea>
        <button @click="postitems" class="bg-green-500">post it</button>

        <div v-for="post in posts">
            <!-- {{ post.user.name }} -->
            <!-- <div v-for="posti in post"> -->
            <Poster :likeitem="likeItem" :userName="post.user.name" :post="post.text_body" :id="post.id" :likes="post.likes" :comments="post.comments"/>
        </div>
    </div>
</template>

<script>
import axiosClient from "../../axios";
import store from "../../store";
import Poster from "./poster.vue";

export default {
    // onMounted() {
    //     this.$store.dispatch("getPosts");
    //     console.log(this.$store.state.posts);
    // },
    data() {
        return {
            itmeval: "",
        };
    },
    methods: {
        postitems() {
            // axiosClient.post("/post", { text_body: this.itmeval }).then((e) => {
            //     console.log(e);
            //     this.$store.dispatch("getPosts");
            // });
            store.dispatch("postItemv", this.itmeval).then((e) => {
                console.log(e);
                store.dispatch("getPosts");
            });


        },
        likeItem(e) {
            // axiosClient.post("/post", { text_body: this.itmeval }).then((e) => {
            //     console.log(e);
            //     this.$store.dispatch("getPosts");
            // });
            store.dispatch("likeItem", e).then((e) => {
                console.log(e);
                store.dispatch("getPosts");
            });
            console.log(e)

        },
    },
    computed: {
        posts() {
            return store.state.posts;
        },
        // likes() {
        //     return store.state.posts;
        // },
    },
    components: { Poster },
};
</script>
