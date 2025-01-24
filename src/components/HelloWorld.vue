<template>
    <div class="container">
        <div class="carousel-container">
            <swiper
                    :slides-per-view="3"
                    :space-between="20"
                    :loop="true"
                    navigation
                    pagination >
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <div class="carousel-item">
                        <img :src="item.index" :alt="item.title" />
                        <h3>{{ item.title }}</h3>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div class="container-fluid">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
    <div class="container">
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
                    <div class="col-md-6 who-img"><img class="img-full" :src="image2" style="width: 568px; height: 813px" alt=""></div>

                </div>
            </div>
        </section>
    </div>
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
                    <img :src="image" alt="" style="height: auto; width: auto">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
                    <img :src="image" alt="">
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
    <footer>
        <div class="up-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna.</p>
                            <ul class="social-links social-links_mod-a list-inline">
                                <li><a target="_blank" href="https://twitter.com/"><i class="icons fa fa-twitter"></i></a></li>
                                <li><a target="_blank" href="https://www.facebook.com/"><i class="icons fa fa-facebook"></i></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/"><i class="icons fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" href="https://www.google.com/"><i class="icons fa fa-google-plus"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/"><i class="icons fa fa-instagram"></i></a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h2>Our Services</h2>
                            <ul class="link-list">
                                <li><a href="#">Ceiling Fans</a></li>
                                <li><a href="#">Circuits &amp; Wiring</a></li>
                                <li><a href="#">Generators</a></li>
                                <li><a href="#">Lighting</a></li>
                                <li><a href="#">Main Electrical Panel</a></li>
                                <li><a href="#">Smoke Detectors</a></li>
                                <li><a href="#">Sub Panel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h2>Quick Links</h2>
                            <ul class="link-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-widget info-widget">
                            <h2>Info</h2>
                            <p class="first-par">You can contact or visit us during working time.</p>
                            <p><span>Tel: </span> 1234 - 5678 - 9012</p>
                            <p><span>Email: </span> support@electrician.com</p>
                            <p><span>Working Hours: </span> 8:00 a.m - 17:00 a.m</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" copyright">
            <div class="container ">
                <div class="pull-left">
                    <p class="">
                        &copy; Copyright "electrician" 2016. All rights reserved.
                    </p>
                </div>
                <div class="pull-right">
                    <p class="">
                        Created By : Deepak Chandra
                    </p>
                </div>
            </div></div>


    </footer>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    name: 'HelloWorld',
    components: {
        Swiper,
        SwiperSlide,},
    props: {
        msg: String
    },
    data () {
      return {
          image2: this.$img('whoWeAre'),
          items: [],
      }
    },
    created() {
        this.items = [
            { title: 'Slide 1', image: this.$img('image1') },
            { title: 'Slide 2', image: this.$img('image2') },
            { title: 'Slide 3', image: this.$img('image3') },
            { title: 'Slide 4', image: this.$img('image4') },
            { title: 'Slide 5', image: this.$img('image5') },
        ];
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
