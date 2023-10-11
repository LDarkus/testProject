<script  setup>
const props = defineProps({
    size: { type: String, default: "large" },
    label: { required: true, type: String, default: "" },
    icon: { type: String, default: "" },
    disabled: { type: Boolean, default: false }

})
</script>

<template>
    <button type="submit" :disabled="disabled" :class="[`btn-${size}`, { 'disabled': disabled }]" class="action-btn">

        <slot></slot>
        {{ props.label }}
    </button>
</template>

<style scoped>
.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.icons {
    background-color: red;
}

.action-btn {
    padding: 16px, 12px;
    border-radius: 9px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 500;
}

.btn-medium {
    min-width: 120px;
    height: 42px;
}

.btn-large {
    min-width: 344px;
    height: 50px;
}
</style>
