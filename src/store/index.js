import { createStore } from "vuex";
import axiosClient from "../axios.js";
const store = createStore({
    state: {
        count: 5
        , user: {
            token: sessionStorage.getItem('TOKEN'),
            // sessionStorage.getItem('TOKEN')
            data: {}
        },
        posts: {},
        users: {},
        comments: {},
        freinds: {},
        yourFriends: {},
    },
    getters: {

    },
    actions: {

        createUser({ commit }, data) {
            return axiosClient.post('/regi', data)
                .then((incom) => {
                    return incom;
                })
        }
        ,
        login({ commit }, data) {
            return axiosClient.post('/login', data)
                .then((incom) => {
                    commit('setUser', incom.data.user);
                    commit('setToken', incom.data.token)
                    console.log(incom.data.token);
                    return incom;
                })
        }
        ,
        getCurrentUser({ commit }) {
            return axiosClient.post('/getCurrentUser')
                .then((incom) => {
                    console.log('ssssssssssssincom.data.user')
                    console.log(incom)
                    console.log(incom)
                    console.log(incom.data.user)
                    commit('setUser', incom.data.user);
                    commit('setToken', incom.data.token)
                    return incom;
                })
        },
        getAllUser({ commit }) {
            return axiosClient.get('/users')
                .then((incom) => {
                    console.log(incom)
                    commit('setUsers', incom.data.data);
                    return incom;
                })
        },
        getAllcomments({ commit }) {
            return axiosClient.get('/comments')
                .then((incom) => {
                    console.log(incom)
                    commit('setCommetns', incom.data.data);
                    return incom;
                })
        },
        // get posts 
        getPosts({ commit }) {
            axiosClient.get('/posts').then((e) => {
                console.log('__|_' * 6)
                console.log('posts list')
                console.log(e.data.data)
                commit('setPosts', e.data.data);
                return e;
            });
        },
        // create post
        postItemv({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/post", { text_body: data }).then((e) => {
                console.log(e);
                return e;
            });
        }
        ,
       likeItem({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/like", { posts_id: data }).then((e) => {
                console.log(e);
                return e;
            });
        },
        commentItem({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/comment", data).then((e) => {
                console.log(e);
                return e;
            });
        },
        freindRequestsend({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/freindRequestsend", data).then((e) => {
                console.log(e);
                return e;
            });
        },
        freindRequestAccept({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/freindRequestAccept", data).then((e) => {
                console.log(e);
                return e;
            });
        },
        freindRequestDecline({ commit }, data) {
            console.log('input text')
            console.log(data)
            axiosClient.post("/freindRequestDecline", data).then((e) => {
                console.log(e);
                return e;
            });
        },
        freindsget({ commit }) {
            console.log('input text')
            axiosClient.post("/freinds").then((e) => {
                // freindsfreindsfreinds
                console.log(' freindsfreindsfreinds');
                console.log(e.data);
                commit('setFreinds', e.data.data);

                return e;
            });
        },
        yourFriends({ commit }) {
            console.log('input text')
            axiosClient.post("/yourFriends").then((e) => {
                // freindsfreindsfreinds
                console.log(' freindsfreindsfreinds');
                console.log(e.data);
                commit('setyourFriends', e.data.data);

                return e;
            });
        },
        logitm() {
            console.log(sessionStorage.getItem('TOKEN'))
        }
    },
    mutations: {
        // set posts
        setPosts(state, data) {
            state.posts = data;
            console.log(state.posts)
        },
        setCommetns(state, data) {
            state.comments = data;
            console.log(state.posts)
        },
        setUser(state, data) {
            state.user.data = data;
            console.log('state.user')
            console.log(state.user)

        }
        , setUsers(state, data) {
            state.users = data;
            console.log('state.users')
            console.log(state.users)

        }
        , setFreinds(state, data) {
            state.freinds = data;
            console.log('.data.data.data.data.frined')
            console.log(state.freinds)

        }
        , setyourFriends(state, data) {
            state.yourFriends = data;
            console.log('.data.data.data.data.frined')
            console.log(state.freinds)

        }

        , setToken(state, token) {
            state.user.token = token;
            if (token) {
                sessionStorage.setItem('TOKEN', token);
            }
            else {
                sessionStorage.removeItem('TOKEN')
            }
        },
        addw() {
            console.log('sdfjkl');
            console.log(this.state.count);

            this.state.count++;
        }
    },
})

export default store
