<script setup>
import { onMounted, ref } from 'vue';


import Modal from '../components/Modal.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const sideMenu = [
    {
        title: "Данные",
        expanded: true, // Статус развернутости этой секции
        items: [
            { title: "Личные кабинет", url: "personal-cabinet", active: false },
            { title: "Организации", url: "organizations", active: false },
            { title: "Настройки", url: "settings", active: true },
            { title: "Бонусы", url: "bonuses", active: false },
            { title: "Меню-борд", url: "menu-board", active: false },
            { title: "Центр коммуникаций", url: "communication-center", active: false },
        ],
    },
    { title: "Заказы", expanded: false, items: [] },
    { title: "Платежи и документы", expanded: false, items: [] },
    { title: "Отчеты и планирования", expanded: false, items: [] },
    { title: "Информация", expanded: false, items: [] },
];

const editModalRef = ref();

const formModel = ref({
    id: "",
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    number: "",
    post: "",
    birthday: "",
    role: "",
})



onMounted(() => {
    getData()
})




const openModal = () => {
    editModalRef.value.showModal();
};


const logout = () => {
    axios.post("/logout").then(response => {
        console.log(response);
        localStorage.removeItem("x-xsrf-token");
        router.push("/login");
    });
};

let dataLoaded = ref(false);
const getData = async () => {
    await axios.get('/api/personal-data').then(response => {

        formModel.value = response.data.data;
        dataLoaded.value = true;
        console.log(formModel.value);

    });

}

</script>

<template>
    <div class="navigate">
        <div class="navigate-el">Главная</div>
        <img src="../assets/bracket.svg" alt=">">
        <div class="navigate-el">Личный кабинет</div>
    </div>
    <div class="container">
        <aside class="menu">
            <div v-for="(section, index) in sideMenu" :key="index">
                <div class="menu-section">
                    <div class="section-title">{{ section.title }}</div>
                    <img class="menu-icon" src="../assets/menuIcon.svg" alt=">">
                </div>
                <template v-if="section.expanded">
                    <div class="submenu">
                        <span v-for="(item, itemIndex) in section.items" :key="itemIndex">
                            <router-link :class="{ 'menu-link-active': item.active, 'menu-link': !item.active }"
                                :to="item.url">{{ item.title }}</router-link>
                        </span>
                    </div>
                </template>
            </div>
        </aside>
        <div class="main-conteiner">
            <div class="main-title">Настройки
                <button @click="logout" style="color:  red;"
                    class=" btn btn-danger">Выйти</button>

                </div>
            <div class="main-menu">
                <div class="main-menu-el">
                    <div class="main-menu-el-title">Профиль</div>
                    <div class="main-menu-el-rectangle"></div>
                </div>
                <div class="main-menu-el">Доверенности</div>
                <div class="main-menu-el">Мои представители</div>
                <div class="main-menu-el">Торговые точки</div>
                <div class="main-menu-el">Уведомления</div>
            </div>
            <div class="main-block-info">
                <div class="main-block-photo">
                    <span class="main-block-photo-title">М</span>
                    <div class="main-block-photo-icon"><img src="../assets/photoIcon.svg" alt=">"></div>
                </div>
                <div class="main-block-conteiner">
                    <div class="main-block-label">
                        <span class="main-block-label-title">ФИО</span>
                        <span class="main-block-label-info">{{ formModel.surname + " " + formModel.name + " " +
                            formModel.patronymic }}</span>
                    </div>
                    <div class="main-block-label">
                        <span class="main-block-label-title">E-mail</span>
                        <span class="main-block-label-info">{{ formModel.email }}</span>
                    </div>
                    <div class="main-block-label">
                        <span class="main-block-label-title">Телефон</span>
                        <span class="main-block-label-info">{{ formModel.number }}</span>
                    </div>
                    <div class="main-block-label">
                        <span class="main-block-label-title">Должность</span>
                        <span class="main-block-label-info">{{ formModel.post }}</span>
                    </div>
                    <div class="main-block-label">
                        <span class="main-block-label-title">Права доступа</span>
                        <span class="main-block-label-info">{{ formModel.role }}</span>
                    </div>
                    <div class="main-block-label">
                        <span class="main-block-label-title">Дата рождения</span>
                        <span class="main-block-label-info">{{ formModel.birthday }}</span>
                    </div>
                </div>
                <div class="edit-button">
                    <button @click="openModal"><img src="../assets/editIcon.svg" alt=""></button>
                </div>
                <Modal v-if="dataLoaded" @close="getData" v-bind="formModel" ref="editModalRef"
                    label="Редактирование личных данных"></Modal>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-block-photo {
    position: relative;
    width: 90px;
    height: 90px;
    background-color: var(--input-field-background);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-block-photo-title {
    color: var(--input-border-color);
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
}

.main-block-photo-icon {
    width: 22px;
    height: 22px;
    position: absolute;
    background-color: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;

}

.edit-button button {
    background: none;
    border: none;
    /* Убираем границу */
    cursor: pointer;
    outline: none;
}

.edit-button {
    margin-left: 33px;
}

.main-block-label {
    display: flex;
    gap: 70px;

}

.main-block-label-title {
    width: 40%;
    color: var(--input-field-color);
    font-size: 15px;
    line-height: 120%;
    /* 18px */
}

.main-block-label-info {
    width: 60%;
    color: var(--text-primary-color);
    font-size: 15px;
    line-height: 120%;
    /* 18px */
}

.main-block-conteiner {
    margin-left: 40px;
    width: 390px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.main-block-photo {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
}

.main-block-info {
    display: flex;
    margin-top: 31px;
    padding-left: 19px;
    padding-right: 20px;
    padding-top: 21px;
    padding-bottom: 21px;
}

.main-menu-el {
    position: relative;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 135%;
}

.main-menu-el-title {
    position: relative;
    display: inline-block;
    color: var(--text-primary-color);
}

.main-menu-el-rectangle {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
    bottom: 0;
    left: 0;
}


.main-menu {
    margin-top: 50px;
    display: flex;
    gap: 30px;
    height: 22px;
    flex-shrink: 0;
}

.main-title {
    color: var(--text-primary-color);
    leading-trim: both;
    text-edge: cap;
    font-size: 24px;
    font-weight: 600;
    line-height: 135%;
}

.main-conteiner {
    margin-left: 60px;
    width: 1020px;
}

.menu-link-active {
    text-decoration: none;
    color: var(--text-primary-color);
    font-weight: 400;
    line-height: 120%;
    font-size: 14px;
}

.menu-link {
    text-decoration: none;
    color: var(--input-field-color);
    font-weight: 400;
    line-height: 120%;
    font-size: 14px;
}


.submenu {
    margin-left: 20px;
    margin-top: 15px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
}

.section-title {
    width: 188px;
    flex-shrink: 0;
    color: var(--text-primary-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 120%;

}

.menu-section {
    display: flex;
    width: 201px;
    align-items: center;
}

.menu {
    display: flex;
    width: 200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    /* 16.8px */
}

.sidebar {
    display: flex;
    width: 200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.container {
    margin-left: 160px;
    display: flex;
}
</style>
