<script  setup>
import ActionButton from './ActionButton.vue';
import IconButton from './IconButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
<div class="header">
    <img src="../assets/logo.png" alt="логотип">
    <div class="search">
        <ActionButton label="Каталог" size="medium" >
            <img src="../assets/catalogItem.svg" alt="иконка">
        </ActionButton>
        <input type="text" class="search-input" placeholder="Поиск по товарам">
        <img src="../assets/searchIcon.svg" alt="">
    </div>
    <div class="icons-buttons">
        <IconButton  label="Войти">
            <img @click="router.push('/login')" src="../assets/user.svg" alt="Икона">
        </IconButton>
        <IconButton  label="Заказы">
            <img src="../assets/order.svg" alt="Икона">
        </IconButton>
        <IconButton  label="Избранное" :count="2">
            <img src="../assets/favorite.svg" alt="Икона">
        </IconButton>
        <IconButton  label="Корзина" :count="22">
            <img src="../assets/cart.svg" alt="Икона">
        </IconButton>
    </div>
</div>
</template>

<style scoped>

.icons-buttons {
    display: flex;
    gap: 30px;
    margin-left: 62px;
}
.search {
    display: flex;
    border-radius: 0px 9px 9px 0px;
    background-color: var(--input-field-background);
    padding-right: 16px;
    width: 675px;
    margin-left: 56px;
}
.search-input {
    background-color: transparent;
    font-size: 15px;
    border: none;
    margin-left: 16px;
    flex-grow: 1;

}

.search-input::placeholder{
    color: var(--input-field-color);
}
.search-input:focus{
    outline: none;
}
.header {
    height: 94px;
    background: var(--main-bg);
    box-shadow: 0px 2px 18px 0px rgba(12, 12, 13, 0.10);
    display: flex;
    align-items: center;
    padding-left: 160px;
    padding-right: 160px;

}

</style>
