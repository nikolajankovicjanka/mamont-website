<template>
    <footer>
        <div class="up-footer">
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-widget">
                            <h2 class="text-white border-bottom">{{ t('common.home') }}</h2> <!-- Koristite t() ovdje -->
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    <div class="col-md-4 color-white">
                        <img src="/assets/images/homepage_images/mamont_logo_white.png" style="max-width: 200px; max-height: 50px" alt="Logo" class="navbar-logo" />
                    </div>
                    <div class="col-md-4">
                        <div class="footer-widget info-widget">
                            <h2 class="text-white fs-6 border-bottom">{{ t('common.contact') }}</h2> <!-- Koristite t() ovdje -->
                            <p class="first-par">{{ t('common.contact_message') }}</p> <!-- Koristite t() ovdje -->
                            <div>
                                <a :href="`tel:+38670128752`">
                                    <svg viewBox="0 0 24 24" class="icons-mamont-white" style="height: 20px; width: 20px">
                                        <path :d="mdiPhone" />
                                    </svg>
                                    <p>+386 70 128 752</p>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:info@mamont.si?subject=Pitanje&body=Pozdrav,%0D%0A%0D%0AMolim vas za više informacija.">
                                    <svg viewBox="0 0 24 24" class="icons-mamont-white" style="height: 20px; width: 20px">
                                        <path :d="mdiEmailOutline" />
                                    </svg>
                                    <p>info@mamont.si</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="pull-left">
                    <p class="">
                        &copy; Copyright "MAMONT D.O.O." 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { mdiPhone, mdiEmailOutline } from '@mdi/js';

export default {
    name: "FooterHomePage",
    data() {
        return {
            mamontLogoWhite: this.$img('mamontLogoWhite'),
            mdiPhone,
            mdiEmailOutline,
        };
    },
    setup() {
        const { t } = useI18n();
        return { t }; // Vratite t kako bi bila dostupna u templateu
    },
};
</script>

<style scoped>
/* Vaši stilovi */
</style>