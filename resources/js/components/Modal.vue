<script setup>
import { reactive, ref } from 'vue';
import InputComponent from './InputComponent.vue';
import ActionButton from './ActionButton.vue';
import ConfirmModal from './ConfirmModal.vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },

})


let data = reactive({
    id: props.id,
    name: props.name,
    surname: props.surname,
    patronymic: props.patronymic,
    email: props.email,
    number: props.number,
    post: props.post,
    birthday: props.birthday
});


let modalShow = ref(false)
const emits = defineEmits(['close']);

const showModal = () => {
    modalShow.value = true;
}

let confirmModal = ref()
const openConfirmModal = async () => {
    confirmModal.value.showModal();

}

const closeModal = async () => {
    modalShow.value = false;
    emits('close');
}

const updatateData = async () => {

        await axios.put(`/api/personal-data/${data.id}`, {
            name: data.name,
            email: data.email,
            number: data.number,
            birthday: data.birthday,
            post: data.post,
            surname: data.surname,
            patronymic: data.patronymic
        }).then(
            response => {
                console.log(response);
                closeModal();
            }
        );

}

defineExpose({ showModal });

</script>

<template>
    <Teleport to="#modal">
        <div v-if="modalShow" class="modal-wrapper">
            <div class="modal-overlay"></div>
            <div class="modal">
                <div class="header">
                    <span class="header-title">{{ label }}</span>
                    <div class="close" @click="openConfirmModal"><img src="../assets/closeIcon.svg" alt=""></div>
                    <ConfirmModal @confirm="closeModal" ref="confirmModal"></ConfirmModal>
                </div>
                <div class="body">
                    <div class="body-title"><span class="body-title-text">Личные данные</span></div>
                    <div class="input-box">
                        <InputComponent v-model="data.number" label="Номер телефона"></InputComponent>
                        <InputComponent v-model="data.email" label="E-mail"></InputComponent>
                        <InputComponent v-model="data.surname" label="Фамилия"></InputComponent>
                        <InputComponent v-model="data.post" label="Должность"></InputComponent>
                        <InputComponent v-model="data.name" label="Имя"></InputComponent>
                        <InputComponent v-model="data.birthday" label="Дата рождения"></InputComponent>
                        <InputComponent v-model="data.patronymic" label="Отчество"></InputComponent>
                    </div>
                    <div class="photo-container">
                        <div class="body-title"><span class="body-title-text">Фотография</span></div>
                        <div class="photo-body">
                            <div class="photo">
                                <span class="main-block-photo-title">М</span>
                            </div>
                            <div class="photo-file">
                                <p class="photo-file-text">
                                    Перенесите файлы в эту область или откройте папку на диске.
                                </p>
                                <p class="photo-file-text">
                                    Поддерживаемые форматы файлов: JPEG, JPG, PNG, SVG, BMP, PJP, JFIF, GIF, WEBP (до
                                    10Мбайт)
                                </p>
                                <button class="photo-file-button">
                                    Загрузить
                                </button>
                            </div>
                        </div>

                    </div>
                    <ActionButton @click="updatateData" class="button" label="Сохранить"></ActionButton>
                </div>

            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}

.photo-file-button {
    color: var(--text-link-color);
    font-size: 14px;
    line-height: 120%;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    margin-top: 11px;
}

.photo-file-text {
    color: var(--input-field-color);
    font-size: 11px;
    line-height: 120%;
}

.photo-file {
    width: 598px;
    height: 90px;
    border-radius: 10px;
    border: 1px solid #E7E7E7;
    background: white;
    box-shadow: 0px 4px 20px 0px rgba(93, 157, 171, 0.12);
    text-align: center;
    padding: 16px 30px
}

.photo-body {
    margin-top: 15px;
    display: flex;
}

.main-block-photo-title {
    color: var(--input-border-color);
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
}

.photo {
    margin-right: 20px;
    width: 90px;
    height: 90px;
    background-color: var(--input-field-background);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-box {
    margin-top: 15px;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.body {

    margin-top: 30px;
    padding-top: 15px;
}

.body-title {
    width: 100%;
    border-bottom: 1px solid #E7E7E7;
}

.body-title-text {
    color: var(--text-primary-color);
    width: 100%;
    font-size: 14px;
    line-height: 135%;
    border-bottom: 1px solid var(--accent-color);
}

.close:hover {
    cursor: pointer;
}

.header-title {
    color: var(--text-primary-color);
    font-size: 18px;
    font-weight: 500;
    line-height: 120%;
}

.header {
    display: flex;
    justify-content: space-between;
}

.modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: 12px;
    position: absolute;
    background: white;
    width: 768px;
}

.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.modal-overlay {
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
    background: #000;
}
</style>
