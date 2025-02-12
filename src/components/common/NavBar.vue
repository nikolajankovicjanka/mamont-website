<template>
    <b-navbar toggleable="lg" type="dark" variant="transparent" class="fixed-navbar" :class="{ 'sticky': isSticky }" ref="navbar">
        <b-navbar-brand @click="navigateTo('/')">
            <img :src="logo" style="max-width: 200px; max-height: 50px" alt="Logo" class="navbar-logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
            <b-navbar-nav class="font-header">
                <b-nav-item @click="navigateTo('/about')">O nama</b-nav-item>
                <b-nav-item @click="navigateTo('/services')">Usluge</b-nav-item>
                <b-nav-item @click="navigateTo('/projects')">Projekti</b-nav-item>
                <b-nav-item @click="navigateTo('/tim')">Naš tim</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="SR" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">DE</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    name: "NavBar",
    props: {
        logo: {
            type: String, // Tip propa je String (putanja do slike)
            required: true // Ovo osigurava da je prop obavezan
        }
    },
    setup() {
        const isSticky = ref(false);
        const navbar = ref(null);

        const handleScroll = () => {
            if (window.scrollY > 50) {
                isSticky.value = true;
            } else {
                isSticky.value = false;
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isSticky,
            navbar,
        };
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8); /* Dodajte željenu pozadinsku boju */
    transition: background-color 0.3s ease;
}
</style>