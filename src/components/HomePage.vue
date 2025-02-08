<template>
    <b-navbar toggleable="lg" type="dark" variant="transparent" class="fixed-navbar" ref="navbar">
        <b-navbar-brand href="#">
            <img :src="mamontLogo" style="max-width: 200px" alt="Logo" class="navbar-logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
            <b-navbar-nav class="font-header">
                <b-nav-item href="#o-nama">O nama</b-nav-item>
                <b-nav-item href="#usluge">Usluge</b-nav-item>
                <b-nav-item href="#projekti">Projekti</b-nav-item>
                <b-nav-item href="#kontakti">Kontakti</b-nav-item>
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
    <div id="o-nama" class="container mt-4">
        <div class="project-title title">
            <h1 class="primary-color custom-border">O nama</h1>
            <h5 class="primary-color mb-4">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
        </div>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 who-content">
                        <div class="project-title title title2">
                            <span class="sm-title">All about us</span>
                            <h2 class="box-header">Who we are</h2>

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="tl-spoiler ">
                            <h6 class="ok-icon"> <i class="fa fa-check" aria-hidden="true"></i> &nbsp; &nbsp; WE ARE PASSIONATE</h6>
                            <div class="su-clearfix tl-spoiler-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!</div>
                        </div>
                        <div class="tl-spoiler ">
                            <h6 class="ok-icon"> <i class="fa fa-check" aria-hidden="true"></i> &nbsp; &nbsp; HONEST AND DEPENDABLE</h6>
                            <div class="su-clearfix tl-spoiler-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!</div>
                        </div>
                        <div class="tl-spoiler ">
                            <h6 class="ok-icon"> <i class="fa fa-check" aria-hidden="true"></i> &nbsp; &nbsp; Call Us Today - 011 4500 4501 - We Answer Our Phones 24/7</h6>
                            <div class="su-clearfix tl-spoiler-content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!</div>
                        </div>

                    </div>
                    <div class="col-md-6 who-img"><img class="img-full" :src="image3" style="width: 568px; height: 813px" alt=""></div>

                </div>
            </div>
        </section>
    </div>

    <section class="news-section news-section-home">
        <div id="usluge" class="container mt-4">
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

    <div id="projekti" class="container mb-4">
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
    <FooterHomePage />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import FooterHomePage from './common/FooterHomePage.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
    name: 'HomePage',
    components: {
        Swiper,
        SwiperSlide,
        FooterHomePage, },
    props: {
        msg: String
    },
    data () {
      return {
          image2: this.$img('whoWeAre'),
          imageHomepage: this.$img('image1'),
          mamontLogo: this.$img('mamontLogo'),
          image3: this.$img('image3'),
          visible: false, // Kontrola vidljivosti lightbox-a
          index: 0, // Indeks trenutno odabrane slike
      }
    },
    setup() {
        // Ref za navbar element
        const navbar = ref(null);

        // Funkcija za rukovanje skrolanjem
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.value.classList.add('sticky');
            } else {
                navbar.value.classList.remove('sticky');
            }
        };

        // Dodaj event listener prilikom montiranja komponente
        onMounted(() => {
            navbar.value = document.querySelector('.fixed-navbar'); // Postavi referencu na navbar
            window.addEventListener('scroll', handleScroll);
        });

        // Ukloni event listener prilikom unmount-a komponente
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

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
            handleScroll,
            onMounted,
            onBeforeUnmount,
            ref,
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
