<script setup >
const props = defineProps({
    count:{required:false, type: Number, default:0},
    label:{required:true, type: String},
})
</script>

<template>
    <button type="button"  class="action-btn">
        <div class="icons" >
            <span class="count-notify" v-if="props.count">{{ props.count }}</span>
            <slot></slot>
        </div>
        <span class="text">{{ props.label }}</span>
    </button>
</template>

<style scoped>
.count-notify{
    position: absolute;
    background-color: var(--accent-color);
    color: var(--main-bg);
    border-radius: 50%;
    font-size: 11px;
    font-weight: 600;
    height: 16px;
    min-width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    right: -4px;
    top: -3px;

}
.text{
    color: #0C0C0D;
    font-size: 12px;
}
.action-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    cursor: pointer;
    border: none;
}

.icons{
    position: relative;
    width: 25px;
    height: 25px;
}
</style>
