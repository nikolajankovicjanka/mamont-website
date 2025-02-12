<template>
    <section class="news-section news-section-home mt-4">
        <div class="container">
            <svg viewBox="0 0 24 24" class="icons-mamont">
                <path :d="mdiLightbulbOn10  " />
            </svg>
            <div class="project-title title">
                <h1 class="primary-color naslov-tekst custom-border">Naše usluge</h1>
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
                                    <h2 class="mt-4"><a href="single-post.html">- Pružanje kablova -</a></h2>

                                    <p>Na vrlo profesionalan i odgovoran način vršimo polaganje kablova kroz projektom definisane sisteme</p>
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
                                    <h2 class="mt-4 primary-color"><a href="">- Testiranje sistema -</a></h2>

                                    <p>Uz najsavremeniju opremu i najstručnije tim radnika vršimo testiranje elektro sistema i elektro mreža</p>
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
                                    <h2 class="mt-4"><a href="single-post.html">- Instalacija Kanalica -</a></h2>

                                    <p>Postavljanje visoko-kvalitetnih kanalica i kabl trasa. Montiranje i ugradnja istih.</p>
                                    <a class="btn readmore" href="single-post.html">read more</a>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { mdiLightbulbOn10 } from '@mdi/js';
export default {
    name: " ServicesPage",
    data () {
        return {
            mdiLightbulbOn10,
            imageHomepage: this.$img('image1'),
        }
    }
}
</script>

<style scoped>

</style>