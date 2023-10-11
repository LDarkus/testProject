<script setup>
import { computed, defineEmits } from 'vue';
const props = defineProps({
    label: {
        type: String, required: true
    },
    req: {
        type: Boolean, default: false
    },
    password: {
        type: Boolean, default: false
    },
    number: {
        type: Boolean, default: false
    },
    isValid: {
        type: Boolean, default: true
    },
    modelValue: {
        type: String
    }

})
const emit = defineEmits();

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<template>
    <div class="main">
        <input v-model="value" class="main-input-field" :class="{ 'main-input-field-error': !isValid }"
             :type="password ? 'password' : 'text'"
            :placeholder="!req ? label : label + '*'" />
    </div>
</template>

<style scoped>
.error {

    border-color: red;

}

.main {
    display: flex;
    flex-direction: column;
}

.main-input-field {
    display: flex;
    width: 344px;
    padding: 16px;
    align-items: flex-start;
    border-radius: 9px;
    background-color: var(--input-field-background);
    border: none;
    outline: none;
    font-size: 15px;
    color: var(--text-primary-color);

}

.main-input-field-error {
    border: 1px solid var(--accent-color);
}

.main-input-field::placeholder {
    font-size: 15px;
    opacity: 1 !important;
    color: var(--input-field-color);
}
</style>
