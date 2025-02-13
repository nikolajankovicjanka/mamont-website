<template>
    <div  class="container mt-4 mb-5">
        <div>
            <svg viewBox="0 0 24 24" class="icons-mamont">
                <path :d="mdiLightbulbOn10  " />
            </svg>
            <h1 class="primary-color naslov-tekst custom-border">O nama</h1>
            <h5 class="primary-color mb-4">Naša firma je na tržištu centralne evrope zastupljena i bavi se velikim brojem usluga iz oblasti montaže, ugradnje, instalacija i mnogih drugih usluga Elektro energije.</h5>
        </div>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 who-content">
                        <svg viewBox="0 0 24 24" class="icons-mamont-white">
                            <path :d="mdiHomeLightningBoltOutline   " />
                        </svg>
                        <div class="project-title title title2">
                            <h2 class="box-header border-bottom mt-2">Ko smo mi?</h2>
                        </div>
                        <p>Firma sa  dugogodišnjim iskustvom i posvećenošću kvalitetu, pružamo sveobuhvatna rješenja u oblasti elektroinstalacija, što su prepoznale i naše stranke u Njemačkoj, Belgiji, Nizozemskoj i Italiji.
                            Ovi projekti potvrđuju našu stručnost, pouzdanost, produktivnost i konkurentnost.</p>
                        <svg viewBox="0 0 24 24" class="icons-mamont-white">
                            <path :d="mdiHomeLightningBoltOutline   " />
                        </svg>
                        <div class="project-title title title2">
                            <h2 class="box-header border-bottom mt-2">Posvećenost!</h2>
                        </div>
                        <p>Kao firma koja je maksimalno posvećena rokovima i  poštovanju dogovora sa klijentima i partnerima, naš tim stručnih ljudi kao prioritet na prvo mjesto  stavlja bezbijednost, profesionalnost i posvećenost</p>
                        <svg viewBox="0 0 24 24" class="icons-mamont-white">
                            <path :d="mdiHomeLightningBoltOutline   " />
                        </svg>
                        <div class="project-title title title2">
                            <h2 class="box-header border-bottom mt-2">Iskustvo i zanje!</h2>
                        </div>
                        <p>Naš tim je sastavljen od velikog broja vrhunskih stručnjaka sa dugogodišnjim iskustvom u oblasti električne energije.</p>
                    </div>
                    <div class="col-md-6 who-img"><img class="img-full" :src="image3" style="width: 568px; height: 813px" alt=""></div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mdiLightbulbOn10, mdiHomeLightningBoltOutline    } from '@mdi/js';
export default {
    name: "AboutUs",
    data () {
        return {
            image3: this.$img('image3'),
            about_us: this.$img('aboutUsImg'),
            mdiLightbulbOn10,
            mdiHomeLightningBoltOutline,
        }
    },
}
</script>

<style scoped>

</style>