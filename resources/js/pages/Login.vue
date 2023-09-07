<template>
        <div class="row justify-center">
            <div class="col-md-6 col-xs-12">
                <q-card class="q-ma-xl q-pa-md">
                    <q-card-section>
                        <div class="text-h6 text-center">
                            Meta Parts
                        </div>
                    </q-card-section>
                    <form v-on:keyup.enter="login()">
                        <q-card-section>
                            <q-input 
                                standout="bg-primary text-white"
                                v-model="form.email"
                                label="Elektroninis paštas"
                                class="q-my-md"
                            />
                            <q-input
                                type="password" 
                                standout="bg-primary text-white" 
                                v-model="form.password" 
                                label="Slaptažodis" 
                                class="q-my-md" 
                            />
                        </q-card-section>
                        <q-card-actions>
                                <q-btn
                                    color="primary"
                                    @click="login()"
                                >
                                    Prisijungti
                                </q-btn>
                        </q-card-actions>
                    </form>
                </q-card>
            </div>
        </div>
    </template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { Notify } from 'quasar';
import { store } from '@/stores/userStore';
import router from '@/router';

    const form = ref({
        email: '',
        password: ''
    });

    function login(){
        axios
            .post('api/user/login', this.form)
            .then((response) => {
                if(response?.data?.success == true && response?.data?.user !== undefined){
                    store.commit('login', response?.data?.user);
                    router.push({ name: 'Index' })
                }
            })
            .catch((exception) => {
                console.log(exception);
                Notify.create({
                    message: exception?.response?.data?.message,
                    position: 'top-right',
                    color: 'negative'
                })
            })
    }
</script>