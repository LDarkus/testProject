<script setup>
import { ref, watch } from 'vue';
import ActionButton from '../components/ActionButton.vue';
import InputComponent from '../components/InputComponent.vue';
import SmsCodeForm from '../components/SmsCodeForm.vue';
import CheckboxComponent from '../components/CheckboxComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

let smsCode = ref("");
let userData = ref({ surname: "", name: "", patronymic: "", number: "", email: "", inn: "", post: "", password: "", confirmPassword: "" });
let userDataValid = ref({ surname: true, name: true, number: true, inn: true, post: true, password: true, confirmPassword: true });
let password_verification = ref([false, false])
let acceptance_agreement = ref(false)
let flag = ref(0)
let buttonFlag = ref(false);
let resendTimer = ref(120);



const validateInputForm1 = () => {
    const digitPattern = /^\d{11}$/;
    userDataValid.value.surname = userData.value.surname === "" || userData.value.surname.length < 3 || /\d/.test(userData.value.surname) ? false : true;
    userDataValid.value.name = userData.value.name === "" || userData.value.name.length < 3 || /\d/.test(userData.value.name) ? false : true;
    userDataValid.value.number = userData.value.number === "" || !digitPattern.test(userData.value.number) ? false : true;
    if ((userDataValid.value.surname && userDataValid.value.name && userDataValid.value.number)) {
        flag.value = 1;
    }
}

const validateInputForm2 = async () => {
    const INNPattern = /^\d{12}$/;
    userDataValid.value.inn = userData.value.inn == "" || !INNPattern.test(userData.value.inn) ? false : true;
    //Пост нужно доделать будет
    userDataValid.value.post = userData.value.post == "" ? false : true;
    passwordValid();
    passwordConfirmValid();
    if ((userDataValid.value.inn && userDataValid.value.post && userDataValid.value.password && userDataValid.value.confirmPassword)) {
        let resp = await registration();
        if (resp == 201) {
            console.log("Регистрация прошла успешно111");
            flag.value = 2;
        }
    }
}


const passwordValid = () => {
    const hasDigit = /[0-9]/;
    password_verification.value[0] = userData.value.password.length > 7 ? true : false
    password_verification.value[1] = hasDigit.test(userData.value.password) ? true : false
    userDataValid.value.password = password_verification.value[0] && password_verification.value[1] ? true : false;
}

const passwordConfirmValid = () => {
    userDataValid.value.confirmPassword = userData.value.confirmPassword === userData.value.password && userData.value.confirmPassword != "" ? true : false;
}

watch(() => userData.value.password, () => {
    passwordValid();
});

watch(() => userData.value.confirmPassword, () => {
    passwordConfirmValid();
});

watch(smsCode, () => {
    if (smsCode.value.length == 6) {
        buttonFlag.value = true
    }
});

watch(flag, () => {
    if (flag.value == 2) {
        const interval = setInterval(() => {
            if (resendTimer.value > 0) {
                resendTimer.value--; // Уменьшаем таймер на 1 секунду
            } else {
                clearInterval(interval); // Если время истекло, останавливаем интервал
            }
        }, 1000); // Каждую секунду
    }
})

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const registration = async () => {
    try {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/register', {
            name: userData.value.name,
            email: userData.value.email,
            password: userData.value.password,
            password_confirmation: userData.value.confirmPassword,
            number: userData.value.number,
            inn: userData.value.inn,
            post: userData.value.post,
            surname: userData.value.surname,
            patronymic: userData.value.patronymic
        });
        console.log(response);
        localStorage.setItem("x-xsrf-token", response.config.headers["X-XSRF-TOKEN"]);
        return response.status;
    } catch (error) {
        console.log(error.response.status);
        return error.response.status;
    }

}

</script>

<template>
    <div class="navigate">
        <div class="navigate-el">Главная</div>
        <img src="../assets/bracket.svg" alt=">">
        <div class="navigate-el">Регистрация</div>
    </div>
    <div class="reg-form">
        <div v-if="flag == 0 || flag == 1" class="reg-header">
            <span class="reg-title">Регистрация</span>
            <span class="reg-desc">Заполните все поля, чтобы подать заявку на регистрацию</span>
        </div>

        <template v-if="flag == 0">
            <div class="reg-main">
                <InputComponent v-model="userData.surname" :isValid="userDataValid.surname" label="Фамилия" :req="true">
                </InputComponent>
                <InputComponent v-model="userData.name" :isValid="userDataValid.name" label="Имя" :req="true">
                </InputComponent>
                <InputComponent v-model="userData.patronymic" label="Отчество"></InputComponent>
                <InputComponent v-model="userData.number" :isValid="userDataValid.number" label="Номер телефона"
                    :req="true"></InputComponent>
                <InputComponent v-model="userData.email" label="E-mail"></InputComponent>
            </div>
            <ActionButton class="reg-btn-start" @click="validateInputForm1" label="Продолжить заполнение"></ActionButton>
        </template>
        <template v-if="flag == 1">
            <div class="reg-main">
                <InputComponent v-model="userData.inn" :isValid="userDataValid.inn" label="ИНН Организации" :req="true">
                </InputComponent>
                <InputComponent v-model="userData.post" :isValid="userDataValid.post" label="Должность" :req="true">
                </InputComponent>
            </div>
            <div class="password-fields">
                <div class="password-labels">
                    <span class="password-label">Придумайте пароль</span>
                    <div class="lenghth-check">
                        <template v-if="password_verification[0]"><img src="../assets/filled_checkbox.svg"
                                alt=""></template>
                        <template v-else><img src="../assets/empty_checkbox.svg" alt=""></template>
                        <span class="check-lable">Содержит не менее 8 символов</span>
                    </div>
                    <div class="lenghth-check">
                        <template v-if="password_verification[1]"><img src="../assets/filled_checkbox.svg"
                                alt=""></template>
                        <template v-else><img src="../assets/empty_checkbox.svg" alt=""></template>
                        <span class="check-lable">Должен содержать минимум одну цифру</span>
                    </div>
                </div>
                <InputComponent v-model="userData.password" :password="true" :isValid="userDataValid.password" label="Придумайте пароль"
                    :req="true"></InputComponent>
                <InputComponent v-model="userData.confirmPassword" :password="true" :isValid="userDataValid.confirmPassword"
                    label="Повторите пароль" :req="true"></InputComponent>
                <div class="agreement-check">
                    <!-- <input type="checkbox" v-model="acceptance_agreement" class="custom-checkbox" id="myCheckbox">
                    <label for="myCheckbox" class="agreement-lable">Я принимаю условия обработки персональных данных и
                        политики
                        конфиденциальности</label> -->
                    <CheckboxComponent class="agreement-lable "
                        label="Я принимаю условия обработки персональных данных и политики конфиденциальности"
                        v-model="acceptance_agreement"></CheckboxComponent>


                </div>
            </div>
            <ActionButton class="reg-btn-end" :disabled="!acceptance_agreement" @click="validateInputForm2" size="large"
                label="Завершить регистрацию">
            </ActionButton>
        </template>
        <template v-if="flag == 2">
            <div class="reg-header-sms-code">
                <span class="reg-title">Введите код</span>
                <span class="reg-desc-sms">Мы отправили вам СМС с кодом на телефон</span>
            </div>
            <SmsCodeForm v-model="smsCode"></SmsCodeForm>
            <span class="label-sms-code">Не приходит код?</span>
            <a class="reg-sms-resend" href="#">Отправить СМС-код еще раз через {{ formatTime(resendTimer) }}</a>
            <ActionButton :disabled="!buttonFlag" @click="flag = flag + 1" label="Войти"></ActionButton>
        </template>
        <template v-if="flag == 3">
            <div class="reg-header">
                <span class="reg-title">Спасибо за регистрацию</span>
                <span class="reg-desc-label">В течении 48 часов с вами свяжется менеджер по работе с новыми клиентами, чтобы
                    заключить договор и создать профиль компании</span>
                <span class="reg-desc-label-2">Чтобы ускорить процедуру заключения договора, загрузите данные о вашей
                    организации</span>
                <ActionButton @click="router.push('/personalAccount')"  label="Продолжить"></ActionButton>
            </div>

        </template>

    </div>
</template>

<style scoped>
.reg-header-sms-code {
    display: flex;
    flex-direction: column;
    gap: 15px;

}


.reg-desc-label-2 {
    width: 289px;
    color: var(--text-primary-color);
    font-size: 15px;
    line-height: 135%;
    margin-bottom: 5px;
}

.reg-desc-label {
    margin-bottom: 35px;
    width: 364px;
    font-size: 15px;
    line-height: 135%;
    color: var(--text-primary-color);
}

.reg-sms-resend {
    text-decoration: none;
    color: #5D8896;
    margin-bottom: 20px;
}

.label-sms-code {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    color: var(--input-field-color);
}

.reg-desc-sms {
    font-size: 15px;
    color: var(--input-field-color);
    width: 246px;
    margin-bottom: 40px;
}

.reg-btn-end {
    margin-top: 20px;
}

.reg-btn-start {
    margin-top: 30px;
}

.agreement-check {
    display: inline-flex;
    align-items: flex-start;
}

.agreement-lable {
    width: 323px;
    flex-shrink: 0;
    font-size: 12px;
    color: var(--input-field-color);
}

.lenghth-check {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.check-lable {
    font-size: 15px;
    color: var(--input-primary-color);
    margin-left: 5px;
}

.password-label {
    font-size: 15px;
    color: var(--input-field-color);
}

.password-labels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

.password-fields {
    margin-top: 39px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.reg-main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.reg-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;

}

.reg-desc {
    font-size: 15px;
    color: var(--input-field-color);
    width: 309px;

}

.reg-title {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary-color);
}

.reg-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
