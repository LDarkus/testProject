<script setup>
import { ref } from 'vue';
import ActionButton from '../components/ActionButton.vue';
import InputComponent from '../components/InputComponent.vue';
import CheckboxComponent from '../components/CheckboxComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

let flag = ref(0)
let checkbox_value = ref(false)

let number = ref('');
let password = ref('');


const login = () => {
    console.log("login");
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', {number: number.value, password: password.value})
        .then(function (response) {
            localStorage.setItem("x-xsrf-token", response.config.headers["X-XSRF-TOKEN"]);
            router.push("/personalAccount");
        })
        .catch(function (error) {
            console.log(error.response);
        });
    });
}
</script>

<template>
    <div class="navigate">
        <div class="navigate-el">Главная</div>
        <img src="../assets/bracket.svg" alt=">">
        <div class="navigate-el">Авторизация</div>
    </div>
    <div class="log-form">
        <div class="log-header">
            <span class="log-title">Авторизация</span>
            <span class="log-desc">Только для зарегистрированных пользователей</span>
        </div>
        <div class="input-field">
            <span>Номер телефона</span>
            <InputComponent :number="true" v-model="number" label="+7 (___)-___-__-__"></InputComponent>
        </div>
        <div class="input-field">
            <div class="password-label">
                <span>Пароль</span>
                <a href="">Забыли пароль?</a>
            </div>
            <InputComponent label="Введите пароль" v-model="password" :password="true"></InputComponent>
        </div>
        <div class="remember-me">
           <CheckboxComponent label="Запомнить меня"  v-model="checkbox_value"></CheckboxComponent>
        </div>
        <ActionButton @click="login" label="Войти"></ActionButton>
        <div class="footer">
            <span>Хотите стать клиентом Элит Трейд?</span>
            <a @click.prevent="router.push('/registration')" href="#">Зарегестрируйтесь</a>
        </div>

    </div>
</template>

<style scoped>
.password-label a{
    text-decoration: none;
    color: var(--input-field-color);
}

.footer{
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.footer span{
    font-size: 15px;
    color: var(--input-field-color);
}
.footer a{
    font-size: 15px;
    color: var(--accent-color);
}
.remember-me {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

.password-label {
    display: flex;
    justify-content: space-between;
}

.input-field {
    display: flex;
    flex-direction: column;

    gap: 15px;
    margin-top: 30px;
}

.log-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 344px;

}

.log-desc {
    font-size: 15px;
    color: var(--input-field-color);
    width: 309px;

}

.log-title {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary-color);
}

.log-form {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navigate {
    display: flex;
    margin-top: 30px;
    margin-left: 160px;
    gap: 15px;
    font-size: 14px;
    margin-bottom: 30px;


}

.navigate-el {
    color: var(--input-field-color);
}
</style>
