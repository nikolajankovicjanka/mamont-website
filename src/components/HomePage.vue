<template>
        <div class="container mb-4">
                <swiper
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
                    <swiper-slide v-for="(image, index) in images" :key="index">
                        <img :src="image" :alt="'Slide ' + (index + 1)" class="slide-image" />
                    </swiper-slide>
                </swiper>
        </div>

    <section class="news-section news-section-home">
        <div class="container mt-4">
            <div class="project-title title">
                <h1 class="primary-color custom-border">Naše usluge</h1>
                <h5 class="primary-color mb-4">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
            </div>
            <div class="news-box">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img :src="imageHomepage" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h2 class="mt-4"><a href="single-post.html">News Title Here</a></h2>

                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <a class="btn readmore" href="single-post.html">read more</a>
                                </div>
                            </div>
                        </article>

                    </div>
                    <div class="col-md-4 col-sm-6">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img :src="imageHomepage" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h2 class="mt-4"><a href="single-post.html">News Title Here</a></h2>

                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <a class="btn readmore" href="single-post.html">read more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img :src="imageHomepage" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h2 class="mt-4"><a href="single-post.html">News Title Here</a></h2>

                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <a class="btn readmore" href="single-post.html">read more</a>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <div class="container mb-4">
        <section class="projects-section">
            <div class="project-title title">
                <h1 class="primary-color custom-border">Naši projekti</h1>
                <h5 class="primary-color mb-4">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
            </div>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
export default {
    name: 'HomePage',
    components: {
        Swiper,
        SwiperSlide, },
    props: {
        msg: String
    },
    data () {
      return {
          image2: this.$img('whoWeAre'),
          imageHomepage: this.$img('image1'),

          visible: false, // Kontrola vidljivosti lightbox-a
          index: 0, // Indeks trenutno odabrane slike
      }
    },
    setup() {
        const images = [
            require('@/assets/images/test_images/image1.jpg'),
            require('@/assets/images/test_images/image2.jpg'),
            require('@/assets/images/test_images/image3.jpg'),
        ];

        const imagesGalery = [
            require('@/assets/images/test_images/image1.jpg'),
            require('@/assets/images/test_images/image1.jpg'),
            require('@/assets/images/test_images/image1.jpg'),
        ];

        const onSwiper = (swiper) => {
            console.log('Swiper instance:', swiper);
        };

        const onSlideChange = () => {
            console.log('Slide changed');
        };

        return {
            modules: [Navigation, Pagination, Autoplay],
            images,
            imagesGalery,
            onSwiper,
            onSlideChange,
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
