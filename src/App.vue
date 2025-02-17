<template>
    <div id="app">
        <NavBar
            :logo="mamontLogo" />
        <router-view></router-view>
        <div v-if="showBackToTop" class="back-to-top" @click="scrollToTop">
            ↑
        </div>
        <FooterHomePage />
    </div>
</template>

<script>
import NavBar from '@/components/common/NavBar';
import FooterHomePage from '@/components/common/FooterHomePage';
import { ref, onMounted, onBeforeUnmount } from 'vue'; // Import Composition API funkcija
export default {
  name: 'App',
    components: {FooterHomePage, NavBar},
    data () {
      return {
          mamontLogo: '/assets/test_images/mamont-logo.png',
      }
    },
    setup() {
        const showBackToTop = ref(false);

        const handleScroll = () => {
            showBackToTop.value = window.scrollY > 300;
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        // Dodaj event listener prilikom montiranja komponente
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        // Ukloni event listener prilikom unmount-a komponente
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            scrollToTop,
            showBackToTop,
        };
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

router-view {
    flex: 1; /* Ovaj deo će gurati footer na dno */
}

footer {
    margin-top: auto;
    width: 100%;
}

</style>
