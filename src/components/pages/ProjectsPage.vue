<template>
    <div  class="container-fluid mt-4 mb-5">
        <div>
            <svg viewBox="0 0 24 24" class="icons-mamont">
                <path :d="mdiHomeLightningBoltOutline  " />
            </svg>
            <h1 class="primary-color naslov-tekst custom-border">{{ t('projects.nasi_projekti')  }}</h1>
            <h5 class="primary-color mb-4">{{ t('projects.nasa_firma')  }}</h5>
            <div class="container mb-4">
                <section class="projects-section">
                    <div class="container">
                        <swiper
                                :modules="modules"
                                :slides-per-view="1"
                                :space-between="50"
                                navigation
                                pagination
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                        >
                            <swiper-slide v-for="(image, index) in imagesGalery" :key="index">
                                <img :src="image" :alt="'Slide ' + (index + 1)" class="slide-image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { mdiHomeLightningBoltOutline } from '@mdi/js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useI18n } from 'vue-i18n';
export default {
    name: "ProjectsPage",
    components: {
        Swiper,
        SwiperSlide, },
    data () {
        return {
            mdiHomeLightningBoltOutline,
            visible: false,
            index: 0,
        }
    },
    setup() {
        const imagesGalery = [
            '/assets/images/mamont_images/mamont2.webp',
            '/assets/images/mamont_images/mamont3.jpg',
            '/assets/images/mamont_images/mamont4.webp',
            '/assets/images/mamont_images/mamont5.jpg',
            '/assets/images/mamont_images/mamont6.jpg',
            '/assets/images/mamont_images/mamont7.jpg',
            '/assets/images/mamont_images/mamont8.webp',
            '/assets/images/mamont_images/mamont9.jpg',
            '/assets/images/mamont_images/mamont10.webp',
            '/assets/images/mamont_images/mamont11.jpg',
            '/assets/images/mamont_images/mamont12.webp',
            '/assets/images/mamont_images/mamont13.jpg',
            '/assets/images/mamont_images/mamont14.jpg',
            '/assets/images/mamont_images/mamont15.webp',
            '/assets/images/mamont_images/mamont16.webp',
            '/assets/images/mamont_images/mamont17.jpg',
            '/assets/images/mamont_images/mamont19.webp',
            '/assets/images/mamont_images/mamont20.webp',
        ];

        const { t } = useI18n();

        const onSwiper = (swiper) => {
            console.log('Swiper instance:', swiper);
        };

        const onSlideChange = () => {
            console.log('Slide changed');
        };

        return {
            modules: [Navigation, Pagination, Autoplay],
            imagesGalery,
            onSwiper,
            onSlideChange,
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
}
</script>

<style scoped>
</style>