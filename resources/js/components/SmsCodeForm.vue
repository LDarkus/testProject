<script setup>
import SmsCodeInput from './SmsCodeInput.vue';
import { ref, watch,defineEmits } from 'vue';
const emit = defineEmits();
const smsCode = ref([
    '',
    '',
    '',
    '',
    '',
    ''
]);

watch(smsCode, (newValue) => {
    let isAllFilled = newValue.every((item) => item != "" );
    if (isAllFilled) {
        let split_code = newValue.join('');
        emit('update:modelValue', split_code);
    }
}, { deep: true });
</script>

<template>
    <div class="sms-code-block">
        <div class="sms-code">
            <SmsCodeInput v-model="smsCode[0]"></SmsCodeInput>
            <SmsCodeInput v-model="smsCode[1]"></SmsCodeInput>
            <SmsCodeInput v-model="smsCode[2]"></SmsCodeInput>
        </div>
        <div class="sms-code">
            <SmsCodeInput v-model="smsCode[3]"></SmsCodeInput>
            <SmsCodeInput v-model="smsCode[4]"></SmsCodeInput>
            <SmsCodeInput v-model="smsCode[5]"></SmsCodeInput>
        </div>

    </div>
</template>

<style>
.sms-code-block {
    display: flex;
    gap: 12px;
}

.sms-code {
    display: flex;
    gap: 8px;
}
</style>
