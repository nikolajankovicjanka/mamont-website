<template>
    <header>
        <div class="container">
            <div>
                <b-navbar toggleable="lg" type="dark" variant="transparent">
                    <b-navbar-brand href="#">
                        <img :src="mamontLogo" style="max-width: 200px" alt="Logo" class="navbar-logo" />
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
                        <b-navbar-nav class="font-header">
                            <b-nav-item href="#">O nama</b-nav-item>
                            <b-nav-item href="#">Usluge</b-nav-item>
                            <b-nav-item href="#">Projekti</b-nav-item>
                            <b-nav-item href="#">Kontakti</b-nav-item>
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
            </div>
        </div>
        <div class="container">
            <div class="carousel-container">
                <swiper
                        :slides-per-view="3"
                        :space-between="20"
                        :loop="true"
                        navigation
                        pagination
                >
                    <swiper-slide v-for="(item, index) in items" :key="index">
                        <div class="carousel-item">
                            <img :src="item.image" :alt="item.title" />
                            <h3>{{ item.title }}</h3>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="project-title title">
            <h1 class="primary-color">O nama</h1>
            <h5 class="primary-color">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
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
        <div class="container">
            <div class="project-title title">
                <h1 class="primary-color">Naše usluge</h1>
                <h5 class="primary-color">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
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

    <div class="container">
        <section class="projects-section">
            <div class="container">
                <div class="project-title title">
                    <span class="sm-title">Great & awesome works</span>
                    <h2 class="box-header">OUR Projects</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> </div>
            <ul class="filter">
                <li><a class="active" href="#" data-filter="*">Show All</a></li>
                <li><a href="#" data-filter=".clean">Clean</a></li>
                <li><a href="#" data-filter=".engine">Engine Repair</a></li>
                <li><a href="#" data-filter=".oil">Oil Changes</a></li>
                <li><a href="#" data-filter=".mufflers">Mufflers</a></li>
            </ul>
            <div class="project-box iso-call d-flex justify-content-around">
                <div class="project-post clean engine oil mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/1.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post clean oil mufflers ">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/2.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post engine oil mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/3.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>

                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>

                        </div>
                    </div>
                </div>
                <div class="project-post clean engine oil">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/4.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post clean engine mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/5.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post clean mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/6.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post engine oil">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/7.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post oil mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/8.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post clean engine ">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/9.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
                <div class="project-post clean engine oil mufflers">
                    <img :src="image3" alt="">
                    <div class="hover-box">
                        <ul class="list-unstyled">
                            <li><a href="projects-details.html"><i class="icon icon-Linked"></i></a></li>
                            <li><a href="upload/projects/10.jpg" data-source="projects-details.html" title="KITCHKEN RENOVATION" data-desc="Wood Work of Rack" class="popup">
                                <i class="icon icon-Search"></i></a></li>
                        </ul>
                        <div class="bx">
                            <h2><a href="single-project.html">electrician Works</a></h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <FooterHomePage />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import FooterHomePage from './common/FooterHomePage.vue'
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
          items: [
              { title: 'Slide 1', image: this.$img('image1') },
              { title: 'Slide 2', image: this.$img('image2') },
              { title: 'Slide 3', image: this.$img('image3') },
              { title: 'Slide 4', image: this.$img('image4') },
              { title: 'Slide 5', image: this.$img('image5') },
          ],
      }
    },
}
</script>

<style scoped>
</style>
