<template>
    <div>
        <!-- component -->
        <!-- Container -->
        <div class="flex flex-col h-screen bg-gray-100">
            <!-- Auth Card Container -->
            <div class="grid place-items-center mx-2 my-20 sm:my-auto">



                <!-- Auth Card -->
                <div
                    class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6  bg-white rounded-lg shadow-md lg:shadow-lg">

                    <!-- Card Title -->
                    <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Login
                    </h2>

                    <form class="mt-10" @submit="login($event)">
                        <!-- user name Input -->
                        <label for="username" class="block text-xs font-semibold text-gray-600 uppercase">Username</label>
                        <input v-model="user.name" id="username" type="username" name="username" placeholder="Username"
                            autocomplete="username"
                            class="block w-full py-3 px-1 mt-2text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <!-- Email Input :v-model="user.name" -->
                        <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input v-model="user.email" id="email" type="email" name="email" placeholder="e-mail address"
                            autocomplete="email"
                            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <!-- Password Input :v-model="user.name" -->
                        <label for="password"
                            class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="password"
                            autocomplete="current-password" v-model="user.password"
                            class="block w-full py-3 px-1 mt-2 mb-4 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <!-- Auth Buttton -->
                        <button type="submit"
                            class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Create an Account
                        </button>

                        <!-- Another Auth Routes -->
                        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <a href="#" class="flex-2 underline">
                                Forgot password?
                            </a>

                            <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                                or
                            </p>

                            <a href="/signin" class="flex-2 underline">
                                login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- {{ user.uname }} -->
</template>

<script setup>
import store from '../../store';
import router from '../../router';

let user = {
    email: '',
    name: '',
    password: '',
}


function login(event) {
    // console.log();

    event.preventDefault();
    console.log(user);
    console.log('user');

    // user.uname
    store.dispatch('createUser', user).then(() => {
        router.push({ name: 'login' })
    })


}
</script>

<style lang="scss"></style>
