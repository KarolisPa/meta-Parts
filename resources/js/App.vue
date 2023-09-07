<template>
    <q-layout>
        <Navbar/>
        <router-view />
    </q-layout>
</template>

<script setup>
   import Navbar from './navigation/navBar.vue';
</script>