<script setup>
import { ref, defineEmits } from 'vue';

const inputValue = ref('');

const validateInput = () => {
  inputValue.value = inputValue.value.replace(/[^0-9]/g, '');

};

const emit = defineEmits();
</script>

<template>
  <input
    v-model="inputValue"
    @input="validateInput"
    class="block text"
    type="text"
    maxlength="1"
    pattern="[0-9]"
    @change="emit('update:modelValue', inputValue)"

  />
</template>

<style>
.block {
    width: 50px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 9px;
    border: 1px solid var(--input-border-color);
    background: var(--input-background-color);
}

.text {
    color: var(--text-primary-color);
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 120%;
    /* 33.6px */
    letter-spacing: -0.56px;
}
</style>
