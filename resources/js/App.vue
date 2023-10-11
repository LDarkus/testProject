<script setup>
import axios from 'axios';
import PageHeader from './components/PageHeader.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const logout = () => {
    axios.post('/logout').
        then(response => {
            router.push('/login');
        });
}

</script>

<template>
    <PageHeader></PageHeader>
    <!-- <router-link to="/login">login</router-link> <br>
    <router-link to="/register">Register</router-link>
    <a @click.prevent="logout" href="#">Выйти</a> -->
    <router-view></router-view>
</template>

<style scoped></style>
