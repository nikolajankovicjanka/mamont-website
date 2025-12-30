<template>
    <div class="container-fluid mb-4" style="margin-top: 80px">
        <div>
            <svg viewBox="0 0 24 24" class="icons-mamont">
                <path :d="mdiLightbulbOn10  " />
            </svg>
            <h1 class="primary-color naslov-tekst custom-border">{{ t('common.o_nama')  }}</h1>
            <h5 class="primary-color mb-4">{{ t('about_us.mi_smo_kompanija_mamont')  }}</h5>
        </div>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 who-content">
                        <svg viewBox="0 0 24 24" class="icons-mamont-white">
                            <path :d="mdiHomeLightningBoltOutline   " />
                        </svg>
                        <div class="project-title title title2">
                            <h2 class="box-header border-bottom custom-border mt-2">{{ t('about_us.ko_smo_mi')  }}</h2>
                        </div>
                        <p>{{ t('about_us.firma_sa_iskustvom')  }}.</p>
                    </div>
                    <div class="col-md-6 who-img"><img class="img-full" src="/assets/images/mamont_images/mamont-team2.jpg" style="width: auto; height: 400px" alt=""></div>
                </div>
            </div>
        </section>
    </div>
    <div class="container d-block d-md-flex">
        <div class="col-12 col-lg-6">
            <img src="/assets/images/about_us_images/about_us_animation.jpg" class="img-responsive" alt="">
        </div>
        <div class="col-12 col-lg-6 our-mission mt-3 mt-lg-0">
            <div class="project-title title title2">
                <h2 class="mt-2 custom-border">{{ t('about_us.misija')  }}</h2>
            </div>
            <h5>{{ t('about_us.nasa_misija')  }}</h5>
            <h5>{{ t('about_us.strpljiv_pristup')  }}</h5>
        </div>
    </div>
</template>

<script>
import { mdiLightbulbOn10, mdiHomeLightningBoltOutline, mdiHandshakeOutline, mdiAccountHardHatOutline   } from '@mdi/js';
import { useI18n } from 'vue-i18n';
export default {
    name: "AboutUs",
    data () {
        return {
            aboutUsImg: this.$img('aboutUsImg'),
            aboutUsAnimation: this.$img('aboutUsAnimation'),
            mdiLightbulbOn10,
            mdiHomeLightningBoltOutline,
            mdiHandshakeOutline,
            mdiAccountHardHatOutline
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