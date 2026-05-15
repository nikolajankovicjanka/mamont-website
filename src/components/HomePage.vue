<template>
  <main class="mamont-home">
    <section class="mamont-hero">
      <swiper
          class="mamont-hero__swiper"
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          pagination
          :autoplay="{ delay: 4500, disableOnInteraction: false }"
          :speed="900"
      >
        <swiper-slide
            v-for="(image, index) in images"
            :key="image"
            class="mamont-hero__slide"
        >
          <img
              :src="image"
              :alt="'Mamont Montage projekat ' + (index + 1)"
              class="mamont-hero__image"
          />

          <div class="mamont-hero__overlay"></div>

          <div class="container mamont-hero__content">
                        <span class="mamont-eyebrow">
                            {{ label('homepage.hero_eyebrow', 'Elektro-montaža • Industrija • Energetika') }}
                        </span>

            <h1>{{ slogans[index] }}</h1>

            <p>
              {{ label(
                'homepage.hero_text',
            ) }}
            </p>

            <div class="mamont-hero__actions">
              <button class="mamont-btn mamont-btn--primary" @click="navigateTo('/services')">
                {{ label('homepage.pogledaj_usluge', 'Pogledaj usluge') }}
              </button>

              <button class="mamont-btn mamont-btn--ghost" @click="navigateTo('/karijera')">
                {{ label('homepage.prijavi_se', 'Prijavi se za posao') }}
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <section class="mamont-stats">
      <div class="container">
        <div class="mamont-stats__grid">
          <article v-for="stat in stats" :key="stat.label" class="mamont-stat-card">
            <h2>{{ stat.value }}+</h2>
            <p>{{ stat.label }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mamont-section mamont-why">
      <div class="container">
        <div class="mamont-section-heading">
                    <span class="mamont-eyebrow">
                        {{ label('homepage.why_eyebrow', 'Zašto izabrati nas') }}
                    </span>

          <h2>{{ label('homepage.zasto_mamont', 'Zašto Mamont?') }}</h2>

          <p>
            {{ label(
              'homepage.why_description',
          ) }}
          </p>
        </div>

        <div class="mamont-why__grid">
          <article
              v-for="reason in reasonCards"
              :key="reason.title"
              class="mamont-feature-card"
          >
            <div class="mamont-feature-card__icon">
              {{ reason.icon }}
            </div>

            <h3>{{ reason.title }}</h3>
            <p>{{ reason.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mamont-project-band">
      <div class="container">
        <div class="mamont-project-band__grid">
          <div class="mamont-project-band__image-wrap">
            <img :src="homepageWorker" alt="Mamont elektro-montažer" />
          </div>

          <div class="mamont-project-band__content">
                        <span class="mamont-eyebrow">
                            {{ label('homepage.project_eyebrow', 'Rad na terenu') }}
                        </span>

            <h2>{{ label('homepage.svaki_projekat', 'Svaki projekat zahtijeva odgovornost, preciznost i tim kojem možete vjerovati.') }}</h2>

            <button class="mamont-btn mamont-btn--light" @click="navigateTo('/projects')">
              {{ label('homepage.pogledaj_projekte', 'Pogledaj projekte') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-section mamont-team-preview">
      <div class="container">
        <div class="mamont-team-preview__grid">
          <div class="mamont-team-preview__content">
                        <span class="mamont-eyebrow">
                            {{ label('homepage.team_eyebrow', 'Naš tim') }}
                        </span>

            <h2>{{ label('homepage.mamont_tim_u_akciji', 'Mamont tim u akciji') }}</h2>

            <p>{{ label('homepage.za_nas', 'Za nas je svaki projekat odgovornost prema klijentu, timu i standardu koji gradimo.') }}</p>

            <button class="mamont-btn mamont-btn--primary" @click="navigateTo('/tim')">
              {{ label('homepage.upoznaj_tim', 'Upoznaj tim') }}
            </button>
          </div>

          <div class="mamont-team-preview__image-wrap">
            <img
                src="/assets/images/mamont_images/mamont-team1.jpg"
                alt="Mamont tim"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-section mamont-partners">
      <div class="container">
        <div class="mamont-section-heading">
                    <span class="mamont-eyebrow">
                        {{ label('homepage.klijenti_od_povjerenja', 'Klijenti od povjerenja') }}
                    </span>

          <h2>{{ label('homepage.partneri', 'Partneri') }}</h2>

          <p>{{ label('homepage.sa_zadovoljstvom', 'Sa zadovoljstvom ističemo partnere i klijente koji su nam ukazali povjerenje.') }}</p>
        </div>

        <div class="mamont-partners__grid">
          <div
              v-for="partner in partners"
              :key="partner.alt"
              class="mamont-partners__item"
          >
            <img :src="partner.src" :alt="partner.alt" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomePage',

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const router = useRouter();
    const { t, te } = useI18n();

    const animatedClients = ref(0);
    const animatedProjects = ref(0);
    const animatedEmployees = ref(0);

    const timers = [];

    const imageHomepage = '/assets/images/test_images/image1.jpg';
    const homepageWorker = '/assets/images/homepage_images/homepage-worker.png';

    const images = [
      '/assets/images/homepage_images/homepageslider1.jpg',
      '/assets/images/homepage_images/homepageslider2.jpg',
      '/assets/images/homepage_images/homepageslider3.jpg',
    ];

    const partners = [
      { src: '/assets/images/homepage_images/logo-5.png', alt: 'Partner 1' },
      { src: '/assets/images/homepage_images/mtm-logo.png', alt: 'MTM' },
      { src: '/assets/images/homepage_images/Paree-logo.png', alt: 'Paree' },
      { src: '/assets/images/homepage_images/Rellium-Logo.png', alt: 'Rellium' },
      { src: '/assets/images/homepage_images/RS_solutions_logo.png', alt: 'RS Solutions' },
    ];

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const slogans = computed(() => [
      label('slogans.prvi_slajd', 'Snaga pouzdanosti, stručnost bez granica'),
      label('slogans.drugi_slajd', 'Inovativna rješenja za svaki strujni izazov'),
      label('slogans.treci_slajd', 'Gradimo budućnost, kabel po kabel'),
    ]);

    const stats = computed(() => [
      {
        value: animatedClients.value,
        label: label('homepage.zadovoljnih_klijenata', 'Zadovoljnih klijenata'),
      },
      {
        value: animatedProjects.value,
        label: label('homepage.projekata', 'Projekata'),
      },
      {
        value: animatedEmployees.value,
        label: label('homepage.zaposlenih', 'Zaposlenih'),
      },
    ]);

    const reasonCards = computed(() => [
      {
        icon: '⚡',
        title: label('homepage.reason_1_title', 'Pouzdanost'),
        text: label('homepage.zato_sto', 'Zato što svakom projektu pristupamo odgovorno i precizno.'),
      },
      {
        icon: '🤝',
        title: label('homepage.reason_2_title', 'Lojalnost'),
        text: label('homepage.lojalnost', 'Gradimo dugoročne odnose sa klijentima i partnerima.'),
      },
      {
        icon: '🛠',
        title: label('homepage.reason_3_title', 'Iskustvo'),
        text: label('homepage.iskustvo', 'Naš tim ima iskustvo na zahtjevnim elektro-montažnim projektima.'),
      },
      {
        icon: '👷',
        title: label('homepage.reason_4_title', 'Stručan kadar'),
        text: label('homepage.visokokvalifikovani_radnici', 'Raspolažemo visokokvalifikovanim radnicima spremnim za ozbiljne projekte.'),
      },
    ]);

    const startCounting = (target, valueRef, duration = 1800) => {
      const startedAt = performance.now();

      const timer = setInterval(() => {
        const elapsed = performance.now() - startedAt;
        const progress = Math.min(elapsed / duration, 1);

        valueRef.value = Math.ceil(target * progress);

        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16);

      timers.push(timer);
    };

    const navigateTo = (path) => {
      router.push(path);
    };

    onMounted(() => {
      startCounting(74, animatedClients);
      startCounting(55, animatedProjects);
      startCounting(80, animatedEmployees);
    });

    onBeforeUnmount(() => {
      timers.forEach((timer) => clearInterval(timer));
    });

    return {
      modules: [Navigation, Pagination, Autoplay],
      images,
      imageHomepage,
      homepageWorker,
      partners,
      slogans,
      stats,
      reasonCards,
      label,
      navigateTo,
    };
  },
};
</script>