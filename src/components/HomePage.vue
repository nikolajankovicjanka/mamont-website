<template>
    <div class="container-fluid mb-4">
        <swiper
                class="swiper-homepage"
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                navigation
                pagination
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                :speed="1000"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
        >
            <swiper-slide class="swiper-slide-homepage" v-for="(image, index) in images" :key="index">
                <img :src="image" :alt="'Slide ' + (index + 1)" class="slide-image-homepage" />
                <!-- Dodajte slogane za svaki slajd -->
                <div class="slide-text">
                    <h2>{{ slogans[index] }}</h2>
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <div class="counter-section">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="counter-item">
                        <h2 class="counter-number">{{ animatedClients }}</h2>
                        <p class="counter-label">{{ $t('homepage.zadovoljnih_klijenata') }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="counter-item">
                        <h2 class="counter-number">{{ animatedProjects }}</h2>
                        <p class="counter-label">{{ $t('homepage.projekata') }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="counter-item">
                        <h2 class="counter-number">{{ animatedEmployees }}</h2>
                        <p class="counter-label">{{ $t('homepage.zaposlenih') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-4 d-block d-md-flex" style="padding-top: 5rem;">
        <div class="col-lg-7 p-3">
            <div style="background-color: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 10px;">
                <h1 class="text-homepage-title custom-border">{{ $t('homepage.zasto_mamont') }}</h1>
                <h5 class="text-homepage-small">{{ $t('homepage.zato_sto') }}</h5>
                <h5 class="text-homepage-small">{{ $t('homepage.lojalnost') }}</h5>
                <h5 class="text-homepage-small">{{ $t('homepage.iskustvo') }}</h5>
                <h5 class="text-homepage-small">{{ $t('homepage.visokokvalifikovani_radnici') }}</h5>
                <svg viewBox="0 0 24 24" class="icons-mamont">
                    <path :d="mdiLightbulbOn20" />
                </svg>
            </div>
        </div>
        <div class="col-lg-5">
            <img :src="imageHomepage" class="image-homepage">
        </div>
    </div>

    <div class="prioriteti-section">
        <div class="container-fluid d-block d-md-flex p-0">
            <div class="col-lg-7">
                <img :src="homepageWorker" alt="Prioriteti slika">
            </div>
            <div class="col-lg-5 d-none d-md-flex mt-5">
                <h5>{{ $t('homepage.svaki_projekat') }}</h5>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-light-subtle mt-5 mb-5">
        <div class="d-block d-md-flex justify-content-center">
            <div class="col-lg-6">
                <h1 class="mamont-team-title">{{ $t('homepage.mamont_u_akciji') }}</h1>
                <h5 class="mamont-team-text">{{ $t('homepage.mamont_u_akciji_text') }}</h5>
            </div>
            <div  class="col-lg-6">
                <img src="/assets/images/mamont_images/mamont-team1.jpg" class="team-img" alt="Prioriteti slika">
            </div>
        </div>
    </div>

    <section class="clients-section pt-5 mt-4">
        <div class="container">
            <div class="project-title title">
                <span class="sm-title">{{ $t('homepage.klijenti_od_povjerenja') }}</span>
                <h1 class="text-homepage-title custom-border">{{ $t('homepage.partneri') }}</h1>
                <p>{{ $t('homepage.sa_zadovoljstvom') }}</p>
            </div>
            <div class="row">
                <div class="textwidget">
                    <div class="logo-panel">
                        <div class="row d-block d-md-flex">
                            <div class="col"><img :src="partner1" alt="Client" height="98" width="208"></div>
                            <div class="col"><img :src="partner2" alt="Client" height="98" width="208"></div>
                            <div class="col"><img :src="partner3" alt="Client" height="98" width="208"></div>
                            <div class="col"><img :src="partner4" alt="Client" height="98" width="208"></div>
                            <div class="col"><img :src="partner5" alt="Client" height="98" width="208"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref, onMounted, computed } from 'vue';
import { mdiLightbulbOn20 } from '@mdi/js';
import { useI18n } from 'vue-i18n';

export default {
    name: 'HomePage',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        msg: String
    },
    data() {
        return {
            imageHomepage: '/assets/images/test_images/image1.jpg',
            homepageWorker: '/assets/images/homepage_images/homepage-worker.png',
            partner1: '/assets/images/homepage_images/logo-5.png',
            partner2: '/assets/images/homepage_images/mtm-logo.png',
            partner3: '/assets/images/homepage_images/Paree-logo.png',
            partner4: '/assets/images/homepage_images/Rellium-Logo.png',
            partner5: '/assets/images/homepage_images/RS_solutions_logo.png',
            mdiLightbulbOn20,
            visible: false,
            index: 0,
        };
    },
    setup() {
        const animatedClients = ref(0);
        const animatedProjects = ref(0);
        const animatedEmployees = ref(0);

        const { t } = useI18n();

        const startCounting = (target, refValue, duration) => {
            let start = 0;
            const increment = target / (duration / 16); // 16ms za 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    refValue.value = target;
                    clearInterval(timer);
                } else {
                    refValue.value = Math.ceil(start);
                }
            }, 16);
        };

        onMounted(() => {
            startCounting(74, animatedClients, 2000);
            startCounting(55, animatedProjects, 2000);
            startCounting(80, animatedEmployees, 2000);
        });

        const images = [
            '/assets/images/homepage_images/homepageslider1.jpg',
            '/assets/images/homepage_images/homepageslider2.jpg',
            '/assets/images/homepage_images/homepageslider3.jpg',
        ];

        const slogans = computed(() => [
            t('slogans.prvi_slajd'),
            t('slogans.drugi_slajd'),
            t('slogans.treci_slajd'),
        ]);

        const onSwiper = (swiper) => {
            console.log('Swiper instance:', swiper);
        };

        const onSlideChange = () => {
            console.log('Slide changed');
        };

        return {
            modules: [Navigation, Pagination, Autoplay],
            images,
            slogans,
            onSwiper,
            onSlideChange,
            animatedClients,
            animatedProjects,
            animatedEmployees,
            t,
        };
    },

    methods: {
        // Prikaz lightbox-a
        showLightbox(index) {
            this.index = index;
            this.visible = true;
        },
    },
};
</script>

<style scoped>
/* Dodajte stilove po potrebi */
</style>