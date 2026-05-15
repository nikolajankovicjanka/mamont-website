<template>
  <main class="mamont-projects-page">
    <section class="mamont-projects-hero">
      <img
          src="/assets/images/mamont_images/mamont2.webp"
          alt="Mamont projekti"
          class="mamont-projects-hero__bg"
      />

      <div class="mamont-projects-hero__overlay"></div>

      <div class="container">
        <div class="mamont-projects-hero__content">
          <span class="mamont-projects__eyebrow">
            {{ label('projects.nasi_projekti', 'Naši projekti') }}
          </span>

          <h1>
            {{ label('projects.hero_title', 'Projekti izvedeni sa preciznošću, odgovornošću i iskustvom') }}
          </h1>

          <p>
            {{ label(
              'projects.nasa_firma',
              'Naša firma učestvuje u realizaciji elektro-montažnih projekata za industrijske i poslovne objekte širom Evrope.'
          ) }}
          </p>
        </div>
      </div>
    </section>

    <section class="mamont-projects-gallery">
      <div class="container">
        <div class="mamont-projects-gallery__heading">
          <span class="mamont-projects__eyebrow">
            {{ label('projects.gallery_eyebrow', 'Galerija radova') }}
          </span>

          <h2>{{ label('projects.featured_projects', 'Izdvojeni projekti') }}</h2>

          <p>
            {{ label(
              'projects.gallery_description',
              'Pogledajte dio atmosfere sa terena, radova i projekata na kojima je učestvovao Mamont tim.'
          ) }}
          </p>
        </div>

        <div class="mamont-projects-slider">
          <swiper
              class="mamont-projects-slider__swiper"
              :modules="modules"
              :slides-per-view="1"
              :space-between="24"
              :loop="true"
              :speed="850"
              :autoplay="{ delay: 4200, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              navigation
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide
                v-for="(project, index) in projects"
                :key="project.image"
                class="mamont-projects-slider__slide"
            >
              <article class="mamont-project-card">
                <img :src="project.image" :alt="project.title" />

                <div class="mamont-project-card__overlay"></div>

                <div class="mamont-project-card__content">
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>

                  <h3>{{ project.title }}</h3>

                  <p>{{ project.description }}</p>
                </div>
              </article>
            </swiper-slide>
          </swiper>

          <aside class="mamont-projects-slider__info">
            <span class="mamont-projects-slider__counter">
              {{ currentSlideLabel }}
            </span>

            <h3>{{ activeProject.title }}</h3>

            <p>{{ activeProject.description }}</p>

            <div class="mamont-projects-slider__meta">
              <div>
                <strong>18+</strong>
                <span>{{ label('projects.gallery_items', 'Fotografija') }}</span>
              </div>

              <div>
                <strong>EU</strong>
                <span>{{ label('projects.region', 'Regija') }}</span>
              </div>
            </div>
          </aside>
        </div>

        <div class="mamont-projects-thumbs">
          <button
              v-for="(project, index) in projects"
              :key="project.image"
              type="button"
              class="mamont-projects-thumb"
              :class="{ 'is-active': activeIndex === index }"
              @click="goToSlide(index)"
          >
            <img :src="project.image" :alt="project.title" />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, ref } from 'vue';
import { mdiHomeLightningBoltOutline } from '@mdi/js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useI18n } from 'vue-i18n';

import 'swiper/swiper-bundle.css';

export default {
  name: 'ProjectsPage',

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const { t, te } = useI18n();

    const swiperInstance = ref(null);
    const activeIndex = ref(0);

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const projects = computed(() => [
      {
        image: '/assets/images/mamont_images/mamont2.webp',
        title: label('projects.project_1_title', 'Industrijske elektro instalacije'),
        description: label('projects.project_1_text', 'Radovi na elektro-montaži i instalacijama za industrijske i poslovne objekte.'),
      },
      {
        image: '/assets/images/mamont_images/mamont3.jpg',
        title: label('projects.project_2_title', 'Montaža kablovskih trasa'),
        description: label('projects.project_2_text', 'Organizovana izvedba kablovskih trasa, kanalica i pripadajuće elektro infrastrukture.'),
      },
      {
        image: '/assets/images/mamont_images/mamont4.webp',
        title: label('projects.project_3_title', 'Radovi na terenu'),
        description: label('projects.project_3_text', 'Mamont tim na zahtjevnim projektima uz fokus na sigurnost, kvalitet i rokove.'),
      },
      {
        image: '/assets/images/mamont_images/mamont5.jpg',
        title: label('projects.project_4_title', 'Elektro-montažni projekti'),
        description: label('projects.project_4_text', 'Izvođenje radova za klijente kroz preciznu organizaciju i stručan tim.'),
      },
      {
        image: '/assets/images/mamont_images/mamont6.jpg',
        title: label('projects.project_5_title', 'Tehnička izvedba'),
        description: label('projects.project_5_text', 'Radovi na sistemima i instalacijama koji zahtijevaju iskustvo i odgovornost.'),
      },
      {
        image: '/assets/images/mamont_images/mamont7.jpg',
        title: label('projects.project_6_title', 'Projekti širom Evrope'),
        description: label('projects.project_6_text', 'Iskustvo u realizaciji projekata u Sloveniji i na evropskom tržištu.'),
      },
      {
        image: '/assets/images/mamont_images/mamont8.webp',
        title: label('projects.project_7_title', 'Instalacije i montaža'),
        description: label('projects.project_7_text', 'Pouzdana izvedba elektro radova za različite tipove objekata.'),
      },
      {
        image: '/assets/images/mamont_images/mamont9.jpg',
        title: label('projects.project_8_title', 'Mamont tim'),
        description: label('projects.project_8_text', 'Stručan kadar, timski rad i organizacija na terenu.'),
      },
      {
        image: '/assets/images/mamont_images/mamont10.webp',
        title: label('projects.project_9_title', 'Kvalitetna izvedba'),
        description: label('projects.project_9_text', 'Svaki projekat izvodimo sa pažnjom prema detaljima i tehničkim standardima.'),
      },
      {
        image: '/assets/images/mamont_images/mamont11.jpg',
        title: label('projects.project_10_title', 'Elektro sistemi'),
        description: label('projects.project_10_text', 'Radovi na elektro sistemima i pripadajućim instalacijama.'),
      },
      {
        image: '/assets/images/mamont_images/mamont12.webp',
        title: label('projects.project_11_title', 'Profesionalna montaža'),
        description: label('projects.project_11_text', 'Pouzdana montaža i izvođenje radova u skladu sa zahtjevima projekta.'),
      },
      {
        image: '/assets/images/mamont_images/mamont13.jpg',
        title: label('projects.project_12_title', 'Terenski radovi'),
        description: label('projects.project_12_text', 'Praktična izvedba projekata uz iskustvo i odgovornu organizaciju.'),
      },
      {
        image: '/assets/images/mamont_images/mamont14.jpg',
        title: label('projects.project_13_title', 'Instalacija kanalica'),
        description: label('projects.project_13_text', 'Montaža kanalica i kablovskih sistema za industrijske objekte.'),
      },
      {
        image: '/assets/images/mamont_images/mamont15.webp',
        title: label('projects.project_14_title', 'Industrijska postrojenja'),
        description: label('projects.project_14_text', 'Radovi u industrijskim okruženjima sa posebnim tehničkim zahtjevima.'),
      },
      {
        image: '/assets/images/mamont_images/mamont16.webp',
        title: label('projects.project_15_title', 'Elektro oprema'),
        description: label('projects.project_15_text', 'Rad sa elektro opremom i instalacijama na projektima različitog obima.'),
      },
      {
        image: '/assets/images/mamont_images/mamont17.jpg',
        title: label('projects.project_16_title', 'Realizacija projekta'),
        description: label('projects.project_16_text', 'Od planiranja do završne izvedbe, fokus ostaje na kvalitetu i sigurnosti.'),
      },
      {
        image: '/assets/images/mamont_images/mamont19.webp',
        title: label('projects.project_17_title', 'Kompleksni radovi'),
        description: label('projects.project_17_text', 'Izvođenje zahtjevnih elektro-montažnih radova sa stručnim timom.'),
      },
      {
        image: '/assets/images/mamont_images/mamont20.webp',
        title: label('projects.project_18_title', 'Mamont projekti'),
        description: label('projects.project_18_text', 'Dio naših izvedenih radova i terenskog iskustva.'),
      },
    ]);

    const activeProject = computed(() => {
      return projects.value[activeIndex.value] || projects.value[0];
    });

    const currentSlideLabel = computed(() => {
      const current = String(activeIndex.value + 1).padStart(2, '0');
      const total = String(projects.value.length).padStart(2, '0');

      return `${current} / ${total}`;
    });

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.realIndex;
    };

    const goToSlide = (index) => {
      if (!swiperInstance.value) return;

      swiperInstance.value.slideToLoop(index);
      activeIndex.value = index;
    };

    return {
      modules: [Navigation, Pagination, Autoplay],
      mdiHomeLightningBoltOutline,
      projects,
      activeIndex,
      activeProject,
      currentSlideLabel,
      label,
      onSwiper,
      onSlideChange,
      goToSlide,
    };
  },
};
</script>