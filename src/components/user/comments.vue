<template>
    <div>
        <svg @click="chi"
            class="cursor-pointer fill-current h-5 w-autor-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            viewBox="0 0 24 24">
            <g>
                <path
                    d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                </path>
            </g>
        </svg>
        <div class="m" v-if="open">
            <div class="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20">
                <div class="px-3 mb-2 mt-2">
                    <textarea v-model="body" :posts_id="posts_id" placeholder="comment"
                        class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
                </div>
                <div class="flex justify-end px-4">
                    <!-- <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment"> -->
                    <button @click="commentit(posts_id)">comment</button>
                </div>
            </div>
            <div class="o" v-if="comments.length > 0">
                <div class="comments" v-for="(comment, index) in comments"  :key="comment.id">
            
            <li v-for="n in comment.users">{{ n.name }}</li>
            {{ comment.body
                        }}</div></div>
        </div>
    </div>
</template>

<script >
// import Name from '@/components/Name.vue';
import { onBeforeMount } from 'vue';
import store from '../../store';

onBeforeMount(() => {
    store.dispatch('getAllcomments')


})

export default {

    props: {
        posts_id: Number,
        comments: { required: true }
    },

    computed: {

        token() {
            return store.state.user.token;
        }
    },
    data() {
        return {
            open: false,
            body: '',
            len: 0
        }
    },
    methods: {
        chi() {
            this.open = !this.open;
        },
        commentit(posts_id) {

            store.dispatch('commentItem', { body: this.body, posts_id: posts_id })
            store.dispatch('getPosts')

        }
    },
}
// function commentItem() {
//     store.dispatch('commentItem')
// }
</script>
