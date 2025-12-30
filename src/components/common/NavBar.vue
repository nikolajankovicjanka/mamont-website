<template>
    <b-navbar toggleable="lg" type="dark" class="fixed-navbar" :class="{ 'sticky': isSticky }" ref="navbar">
        <b-navbar-brand style="padding-left: 3rem" @click="navigateTo('/')">
            <img src="/assets/images/test_images/mamont-logo.png" style="max-width: 200px; max-height: 50px" alt="Logo" class="navbar-logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
            <b-navbar-nav class="font-header">
                <b-nav-item @click="navigateTo('/')">{{ $t('common.home') }}</b-nav-item>
                <b-nav-item @click="navigateTo('/about')">{{ $t('common.o_nama') }}</b-nav-item>
                <b-nav-item @click="navigateTo('/services')">{{ $t('common.usluge') }}</b-nav-item>
                <b-nav-item @click="navigateTo('/projects')">{{ $t('common.projekti') }}</b-nav-item>
                <b-nav-item @click="navigateTo('/tim')">{{ $t('common.nas_tim') }}</b-nav-item>

                <b-nav-item-dropdown right>
                    <template #button-content>
                        {{ locale === 'sr' ? 'SR' : locale === 'en' ? 'EN' : 'DE' }}
                    </template>
                    <b-dropdown-item @click="changeLanguage('sr')">SR</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('de')">DE</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { loadLocaleMessages } from '@/plugins/i18n';

export default {
    name: "NavBar",
    setup() {
        const { locale } = useI18n();
        const router = useRouter();
        const isSticky = ref(false);
        const navbar = ref(null);

        const changeLanguage = async (lang) => {
            await loadLocaleMessages(lang);
            locale.value = lang;
            localStorage.setItem('userLanguage', lang);
        };

        const navigateTo = (route) => {
            router.push(route);
        };

        const handleScroll = () => {
            isSticky.value = window.scrollY > 50;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            const savedLanguage = localStorage.getItem('userLanguage');
            if (savedLanguage) {
                locale.value = savedLanguage;
            }
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isSticky,
            navbar,
            navigateTo,
            changeLanguage,
            locale,
        };
    },
}
</script>

<style scoped>
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
}
</style>