<script setup>
import { reactive, ref } from 'vue';
import InputComponent from './InputComponent.vue';
import ActionButton from './ActionButton.vue';



let modalShow = ref(false)

const showModal = () => {
    modalShow.value = true;
}
const closeModal = () => {
    modalShow.value = false;
    emits('close');
}
const emits = defineEmits(['close']);

defineExpose({ showModal });

</script>

<template>
    <Teleport to="#modal">
        <div v-if="modalShow" class="modal-wrapper">
            <div class="modal-overlay"></div>
            <div class="modal">
                <div class="header">
                    <span class="header-title">Выйти</span>
                    <div class="close" @click="closeModal"><img src="../assets/closeIcon.svg" alt=""></div>
                </div>
                <div class="body">
                    <span class="body-text">Вы уверены, что не хотите изменять личные данные?</span>
                    <div class="buttons">
                        <button @click="closeModal" class="btn-1">Вернуться</button>
                        <button @click="emits('confirm')" class="btn-2">Выйти</button>
                    </div>
                </div>

            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.btn-1 {
    color: var(--text-link-color);
    background: rgba(93, 136, 150, 0.08);

}

.btn-2 {
    color: var(--accent-color);
    background: rgba(243, 34, 60, 0.08);

}

.buttons {
    margin-top: 40px;
    display: flex;
    gap: 16px;
}

.buttons button {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 120%;
    /* 18px */
    width: 164px;
    padding: 16px 10px;

    border-radius: 9px;
    border: none;
    cursor: pointer;
}

.body-text {
    color: var(--text-primary-color);
    font-size: 15px;
    line-height: 135%;
    margin-bottom: 40px;
}

.button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}







.input-box {
    margin-top: 15px;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.body {
    margin-top: 20px;
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
    padding: 30px 30px 20px 30px;
    border-radius: 12px;
    position: absolute;
    background: white;
    width: 404px;
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
}</style>
