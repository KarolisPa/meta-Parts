<template>
    <div>
      <q-toolbar class="bg-primary text-white">
        <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>Meta Parts</q-toolbar-title>
        <q-btn class="q-mr-sm" flat dense :label="getUsername()" v-if="$q.screen.lt.md && (getUsername !== undefined || null)" @click="drawerLeft = !drawerLeft" />

        <q-btn-dropdown class="q-mr-sm" flat dense :label="getUsername()" v-else-if="getUsername() !== undefined || null">
            <q-list>
                <q-item clickable v-close-popup @click="logout()">
                    <q-item-section>
                        <q-item-label>Atsijungti</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

        <q-drawer
            v-model="drawerLeft"
            :width="200"
            :breakpoint="1024"
            elevated
            class="bg-primary text-white"
        >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 20" :key="n">Drawer {{ n }} / 20</div>
          </div>
          <q-separator/>
            <q-item-section>
                <q-item clickable @click="logout()">
                    <q-item-label>Atsijungti</q-item-label>
                </q-item>
            </q-item-section>
        </q-scroll-area>
      </q-drawer>
    </q-toolbar>
    </div>
</template>

<script setup>
    import { store } from '@/stores/userStore';
    import { ref } from 'vue';
    import router from '@/router';

    const username = ref(null);
    const drawerLeft = ref(false);

    function logout(){
        store.commit('logout');
        router.push({name: 'Login'});
    }

    function getUsername(){
        return username.value = store.getters.getUsername;
    }  
</script>