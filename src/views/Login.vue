<script setup>
    import Input from '../components/base/Input.vue';
    import Button from '../components/base/Button.vue';
    import { ref } from 'vue';
    import axios from 'axios';

    const email = ref('')
    const password = ref('')

    /*Funcion asincronica */
    const loginHandler = async() => {
    axios.post('https://reqres.in/api/login',{
        email: email.value,
        password: password.value
    }).then((resolve) => {
        console.log(resolve)
    }).catch((reject) => {
        console.log(reject)
    })
    
}
</script>

<template>
    <div class="login">
        <div class="login__container">
            <section >
                <svg class="icon icon_agora_icon"></svg>
                <h1>Welcome to Agora</h1>
            </section>
            <section>
                <Input v-model="email" :type="'email'" :title="'Email'" :placeholder="'example@dominio.com'"/>
                <Input v-model="password" :type="'password'" :title="'Password'" :placeholder="'*********'"/>
                <Button @click="loginHandler" class="bg-blue-100 hover:bg-blue-200">Login</Button>
            </section>
            <section></section>
        </div>
    </div>
</template>