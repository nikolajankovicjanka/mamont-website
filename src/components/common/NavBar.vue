<template>
  <header class="mamont-site-nav" :class="{ 'is-scrolled': isSticky }">
    <div class="mamont-site-nav__container">
      <button type="button" class="mamont-site-nav__brand" @click="navigateTo('/')">
        <img
            src="/assets/images/test_images/mamont-logo.png"
            alt="Mamont Montage"
            class="mamont-site-nav__logo"
        />
      </button>

      <nav class="mamont-site-nav__desktop" aria-label="Main navigation">
        <button
            v-for="item in navItems"
            :key="item.route"
            type="button"
            class="mamont-site-nav__link"
            :class="{ 'is-active': isActive(item.route), 'is-cta': item.cta }"
            @click="navigateTo(item.route)"
        >
          {{ label(item.key, item.fallback) }}
        </button>

        <div class="mamont-site-nav__language" ref="languageDropdown">
          <button
              type="button"
              class="mamont-site-nav__language-trigger"
              @click.stop="toggleLanguageMenu"
          >
            {{ localeLabel }}
          </button>

          <div v-if="isLanguageOpen" class="mamont-site-nav__language-menu">
            <button type="button" @click="changeLanguage('sr')">SR</button>
            <button type="button" @click="changeLanguage('en')">EN</button>
            <button type="button" @click="changeLanguage('de')">DE</button>
          </div>
        </div>
      </nav>

      <button
          type="button"
          class="mamont-site-nav__mobile-button"
          :class="{ 'is-active': isMenuOpen }"
          aria-label="Open navigation"
          :aria-expanded="isMenuOpen"
          @click="openMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <Teleport to="body">
    <transition name="mamont-menu">
      <div v-if="isMenuOpen" class="mamont-mobile-menu">
        <div class="mamont-mobile-menu__top">
          <button type="button" class="mamont-mobile-menu__logo-box" @click="navigateTo('/')">
            <img
                src="/assets/images/test_images/mamont-logo.png"
                alt="Mamont Montage"
                class="mamont-mobile-menu__logo"
            />
          </button>

          <button
              type="button"
              class="mamont-mobile-menu__close"
              aria-label="Close navigation"
              @click="closeMenu"
          >
            ×
          </button>
        </div>

        <nav class="mamont-mobile-menu__nav" aria-label="Mobile navigation">
          <button
              v-for="item in navItems"
              :key="item.route"
              type="button"
              class="mamont-mobile-menu__link"
              :class="{ 'is-active': isActive(item.route), 'is-cta': item.cta }"
              @click="navigateTo(item.route)"
          >
            <span>{{ label(item.key, item.fallback) }}</span>
          </button>
        </nav>

        <div class="mamont-mobile-menu__language">
          <p>{{ label('common.language', 'Jezik') }}</p>

          <div class="mamont-mobile-menu__language-grid">
            <button
                type="button"
                :class="{ 'is-active': locale === 'sr' }"
                @click="changeLanguage('sr')"
            >
              SR
            </button>

            <button
                type="button"
                :class="{ 'is-active': locale === 'en' }"
                @click="changeLanguage('en')"
            >
              EN
            </button>

            <button
                type="button"
                :class="{ 'is-active': locale === 'de' }"
                @click="changeLanguage('de')"
            >
              DE
            </button>
          </div>
        </div>

        <div class="mamont-mobile-menu__footer">
          <strong>MAMONT D.O.O.</strong>
          <span>Elektro-montaža • Industrija • Energetika</span>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { loadLocaleMessages } from '@/plugins/i18n';

export default {
  name: 'NavBar',

  setup() {
    const { locale, t, te } = useI18n();
    const router = useRouter();
    const route = useRoute();

    const isSticky = ref(false);
    const isMenuOpen = ref(false);
    const isLanguageOpen = ref(false);
    const languageDropdown = ref(null);

    const navItems = [
      { route: '/', key: 'common.home', fallback: 'Home' },
      { route: '/about', key: 'common.o_nama', fallback: 'O nama' },
      { route: '/services', key: 'common.usluge', fallback: 'Usluge' },
      { route: '/projects', key: 'common.projekti', fallback: 'Projekti' },
      { route: '/tim', key: 'common.nas_tim', fallback: 'Naš tim' },
      { route: '/karijera', key: 'common.karijera', fallback: 'Karijera', cta: true },
    ];

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const localeLabel = computed(() => {
      if (locale.value === 'sr') return 'SR';
      if (locale.value === 'en') return 'EN';
      return 'DE';
    });

    const lockBody = () => {
      document.body.classList.add('mamont-menu-open');
    };

    const unlockBody = () => {
      document.body.classList.remove('mamont-menu-open');
    };

    const openMenu = () => {
      isMenuOpen.value = true;
      isLanguageOpen.value = false;
      lockBody();
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      unlockBody();
    };

    const toggleLanguageMenu = () => {
      isLanguageOpen.value = !isLanguageOpen.value;
    };

    const changeLanguage = async (lang) => {
      await loadLocaleMessages(lang);
      locale.value = lang;
      localStorage.setItem('userLanguage', lang);
      isLanguageOpen.value = false;
    };

    const navigateTo = async (path) => {
      closeMenu();
      isLanguageOpen.value = false;

      try {
        if (route.path !== path) {
          await router.push(path);
        }

        await nextTick();

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };

    const isActive = (path) => {
      if (path === '/') {
        return route.path === '/';
      }

      return route.path.startsWith(path);
    };

    const handleScroll = () => {
      isSticky.value = window.scrollY > 10;
    };

    const handleClickOutside = (event) => {
      if (!languageDropdown.value) return;

      if (!languageDropdown.value.contains(event.target)) {
        isLanguageOpen.value = false;
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        isLanguageOpen.value = false;
      }
    };

    watch(
        () => route.path,
        () => {
          closeMenu();
        }
    );

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      handleScroll();

      const savedLanguage = localStorage.getItem('userLanguage');

      if (savedLanguage) {
        locale.value = savedLanguage;
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      unlockBody();
    });

    return {
      locale,
      navItems,
      isSticky,
      isMenuOpen,
      isLanguageOpen,
      languageDropdown,
      localeLabel,
      label,
      navigateTo,
      changeLanguage,
      isActive,
      openMenu,
      closeMenu,
      toggleLanguageMenu,
    };
  },
};
</script>