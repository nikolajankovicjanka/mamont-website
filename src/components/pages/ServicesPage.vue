<template>
    <section class="news-section news-section-home mt-4">
        <div class="container-fluid mb-4" style="margin-top: 80px">
            <svg viewBox="0 0 24 24" class="icons-mamont">
                <path :d="mdiLightbulbOn10" />
            </svg>
            <div class="project-title title">
                <h1 class="primary-color naslov-tekst custom-border">{{ t('services.nase_usluge') }}</h1>
                <h5 class="primary-color mb-4">{{ t('services.navescemo_usluge') }}</h5>
            </div>
            <div class="news-box">
                <div class="row">
                    <div class="col-md-4 col-sm-6 mb-2 mb-md-0">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img src="/assets/images/mamont_images/mamont_pruzanje_kablova.jpg" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h1 class="mt-4"><a href="single-post.html">- {{ t('services.pruzanje_kablova') }} -</a></h1>
                                    <p>{{ t('services.pruzanje_kablova_nacin') }}</p>
                                    <a class="btn readmore" href="single-post.html">{{ t('common.read_more') }}</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-2 mb-md-0">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img src="/assets/images/mamont_images/mamont_testing.jpg" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h1 class="mt-4 primary-color"><a href="">- {{ t('services.testiranje_sistema') }} -</a></h1>
                                    <p>{{ t('services.oprema_za_testiranje') }}</p>
                                    <a class="btn readmore" href="single-post.html">{{ t('common.read_more') }}</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <article>
                            <div class="news-post">
                                <div class="img-cap-effect">
                                    <div class="img-box">
                                        <img src="/assets/images/mamont_images/mamont14.jpg" alt="Awesome Image">
                                        <div class="img-caption">
                                            <div class="box-holder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-content-text">
                                    <h1 class="mt-4"><a href="single-post.html">- {{ t('services.instalacija_kanalica') }} -</a></h1>
                                    <p>{{ t('services.instalacija_kanalica_text') }}</p>
                                    <a class="btn readmore" href="single-post.html">{{ t('common.read_more') }}</a>
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
import { useI18n } from 'vue-i18n';
export default {
    name: " ServicesPage",
    data () {
        return {
            mdiLightbulbOn10,
        }
    },
    setup() {
        const { t } = useI18n();
        return { t };
    },
}
</script>

<style scoped>

</style>