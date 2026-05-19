<template>
  <main class="mamont-about">
    <section class="mamont-about-hero">
      <img
          src="/assets/images/mamont_images/mamont-team2.jpg"
          alt="Mamont tim"
          class="mamont-about-hero__bg"
      />

      <div class="mamont-about-hero__overlay"></div>

      <div class="container">
        <div class="mamont-about-hero__content">
          <span class="mamont-about__eyebrow">
            {{ label('common.o_nama', 'O nama') }}
          </span>


          <h1>
            {{ label(
              'about_us.hero_title',
              'Pouzdan partner za projekte širom Evrope'
          ) }}
          </h1>

          <div class="mamont-about-hero__actions">
            <button type="button" class="mamont-about-btn mamont-about-btn--primary" @click="navigateTo('/services')">
              {{ label('common.usluge', 'Usluge') }}
            </button>

            <button type="button" class="mamont-about-btn mamont-about-btn--ghost" @click="navigateTo('/karijera')">
              {{ label('common.karijera', 'Karijera') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-about-intro">
      <div class="container">
        <div class="mamont-about-intro__grid">
          <div class="mamont-about-intro__content">
            <span class="mamont-about__eyebrow">
              {{ label('about_us.ko_smo_mi', 'Ko smo mi?') }}
            </span>

            <h2>{{ label('about_us.ko_smo_mi', 'Ko smo mi') }}</h2>

            <p>
              {{ label(
                'about_us.firma_sa_iskustvom',
                'Firma sa dugogodišnjim iskustvom i posvećenošću kvalitetu, sa sjedištem u Sloveniji, naše usluge pružamo klijentima širom Evrope, uključujući Njemačku, Belgiju, Nizozemsku i Italiju. Naša dugogodišnja tradicija i iskustvo u realizaciji zahtjevnih projekata čine nas pouzdanim partnerom u svim aspektima elektroinstalacija.'
            ) }}
            </p>

            <div class="mamont-about-intro__features">
              <article v-for="feature in features" :key="feature.title">
                <div class="mamont-about-intro__icon">
                  <svg viewBox="0 0 24 24">
                    <path :d="feature.icon" />
                  </svg>
                </div>

                <div>
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.text }}</p>
                </div>
              </article>
            </div>
          </div>

          <div class="mamont-about-intro__image-wrap">
            <img
                src="/assets/images/mamont_images/mamont-team2.jpg"
                alt="Mamont tim"
                class="mamont-about-intro__image"
            />

            <div class="mamont-about-intro__floating-card">
              <strong>EU</strong>
              <span>{{ label('about_us.projects_across_europe', 'Projekti širom Evrope') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-about-mission">
      <div class="container">
        <div class="mamont-about-mission__grid">
          <div class="mamont-about-mission__image-wrap">
            <img
                src="/assets/images/about_us_images/about_us_animation.jpg"
                alt="Mamont misija"
                class="mamont-about-mission__image"
            />
          </div>

          <div class="mamont-about-mission__content">
            <span class="mamont-about__eyebrow">
              {{ label('about_us.misija', 'Misija') }}
            </span>

            <h2>{{ label('about_us.misija', 'Misija') }}</h2>

            <p>
              {{ label(
                'about_us.nasa_misija',
                'Naša misija je jednostavna — pružiti sveobuhvatna, efikasna i inovativna rješenja koja zadovoljavaju i premašuju očekivanja naših klijenata.'
            ) }}
            </p>

            <p>
              {{ label(
                'about_us.strpljiv_pristup',
                'Kroz strpljiv pristup, posvećenost kvalitetu i tim visokokvalifikovanih stručnjaka, gradimo dugoročne odnose sa saradnicima.'
            ) }}
            </p>

            <div class="mamont-about-mission__stats">
              <div>
                <strong>74+</strong>
                <span>{{ label('homepage.zadovoljnih_klijenata', 'Zadovoljnih klijenata') }}</span>
              </div>

              <div>
                <strong>55+</strong>
                <span>{{ label('homepage.projekata', 'Projekata') }}</span>
              </div>

              <div>
                <strong>80+</strong>
                <span>{{ label('homepage.zaposlenih', 'Zaposlenih') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-about-values">
      <div class="container">
        <div class="mamont-about-section-heading">
          <span class="mamont-about__eyebrow">
            {{ label('about_us.values_eyebrow', 'Naše vrijednosti') }}
          </span>

          <h2>{{ label('about_us.values_title', 'Vrijednosti koje nas vode') }}</h2>

          <p>
            {{ label(
              'about_us.values_description',
              'U svakom projektu držimo se istih principa: odgovornost, sigurnost, preciznost i poštovanje dogovorenih rokova.'
          ) }}
          </p>
        </div>

        <div class="mamont-about-values__grid">
          <article v-for="value in values" :key="value.title" class="mamont-about-value-card">
            <div class="mamont-about-value-card__icon">
              <svg viewBox="0 0 24 24">
                <path :d="value.icon" />
              </svg>
            </div>

            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import {
  mdiLightbulbOn10,
  mdiHomeLightningBoltOutline,
  mdiHandshakeOutline,
  mdiAccountHardHatOutline,
  mdiShieldCheckOutline,
  mdiTools,
} from '@mdi/js';

export default {
  name: 'AboutUs',

  setup() {
    const { t, te } = useI18n();
    const router = useRouter();

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const navigateTo = (path) => {
      router.push(path);
    };

    const features = computed(() => [
      {
        icon: mdiHomeLightningBoltOutline,
        title: label('about_us.feature_1_title', 'Elektro-montaža'),
        text: label('about_us.feature_1_text', 'Izvođenje elektroinstalacija i montaža sistema za industrijske i poslovne objekte.'),
      },
      {
        icon: mdiHandshakeOutline,
        title: label('about_us.feature_2_title', 'Pouzdan partner'),
        text: label('about_us.feature_2_text', 'Dugoročna saradnja sa klijentima zasnovana na povjerenju i kvalitetu.'),
      },
      {
        icon: mdiAccountHardHatOutline,
        title: label('about_us.feature_3_title', 'Stručan tim'),
        text: label('about_us.feature_3_text', 'Iskusni radnici spremni za rad na zahtjevnim projektima u Evropi.'),
      },
    ]);

    const values = computed(() => [
      {
        icon: mdiShieldCheckOutline,
        title: label('about_us.value_1_title', 'Sigurnost'),
        text: label('about_us.value_1_text', 'Sigurnost radnika, klijenata i objekata uvijek je prioritet.'),
      },
      {
        icon: mdiLightbulbOn10,
        title: label('about_us.value_2_title', 'Inovativnost'),
        text: label('about_us.value_2_text', 'Primjenjujemo moderna rješenja i efikasne metode rada.'),
      },
      {
        icon: mdiTools,
        title: label('about_us.value_3_title', 'Kvalitet'),
        text: label('about_us.value_3_text', 'Svaki detalj mora biti izveden profesionalno i precizno.'),
      },
      {
        icon: mdiHandshakeOutline,
        title: label('about_us.value_4_title', 'Odgovornost'),
        text: label('about_us.value_4_text', 'Poštujemo dogovorene rokove, standarde i potrebe klijenata.'),
      },
    ]);

    return {
      label,
      navigateTo,
      features,
      values,
    };
  },
};
</script>