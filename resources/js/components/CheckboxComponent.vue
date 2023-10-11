<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    modelValue: {
        type: Boolean, // Используем boolean для v-model
        required: true,
    },
});

const emit = defineEmits();

const updateModelValue = (newValue) => {
    emit('update:modelValue', newValue); // Отправляем обновленное значение в родительский компонент
};

//Перестали работать картинки(для флага) до этого работали
</script>


<template>
    <label class="checkbox-other">
        <input type="checkbox" class="custom-checkbox" :checked="modelValue" @change="updateModelValue(!modelValue)" />
        {{ label }}
    </label>
</template>

<style scoped>
.custom-checkbox {
    margin-right: 6px;
}

.checkbox-other {
    display: flex;
    align-items: center;
    /* Выравниваем элементы вертикально */
    margin: 0 0 10px 0;
    line-height: 22px;
}

.checkbox-other input[type=checkbox] {
    flex-shrink: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
    padding: 0;
    vertical-align: top;
    outline: none;
    transition: background 0.3s ease;
    background: url(../assets/empty_checkbox.svg) 0 0 no-repeat;
    cursor: pointer;
}

/* Checked */
.checkbox-other input[type=checkbox]:checked {

    background-image: url(../assets/filled_checkbox.svg);
}
</style>
