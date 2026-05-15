<template>
  <main class="mamont-services">
    <section class="mamont-services-hero">
      <img
          src="/assets/images/mamont_images/mamont_pruzanje_kablova.jpg"
          alt="Mamont usluge"
          class="mamont-services-hero__bg"
      />

      <div class="mamont-services-hero__overlay"></div>

      <div class="container">
        <div class="mamont-services-hero__content">
          <span class="mamont-services__eyebrow">
            {{ label('services.nase_usluge', 'Naše usluge') }}
          </span>

          <h1>
            {{ label('services.hero_title', 'Elektro-montažna rješenja za ozbiljne projekte') }}
          </h1>

          <p>
            {{ label(
              'services.navescemo_usluge',
              'U nastavku izdvajamo ključne usluge koje Mamont pruža kroz stručan tim, iskustvo i rad na zahtjevnim projektima širom Evrope.'
          ) }}
          </p>

          <div class="mamont-services-hero__actions">
            <a class="mamont-services-btn mamont-services-btn--primary" :href="emailHref">
              {{ label('services.posalji_upit', 'Pošalji upit') }}
            </a>

            <button
                type="button"
                class="mamont-services-btn mamont-services-btn--ghost"
                @click="navigateTo('/projects')"
            >
              {{ label('common.projekti', 'Projekti') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-services-list">
      <div class="container">
        <div class="mamont-services-section-heading">
          <span class="mamont-services__eyebrow">
            {{ label('services.what_we_do', 'Šta radimo') }}
          </span>

          <h2>{{ label('services.nase_usluge', 'Naše usluge') }}</h2>

          <p>
            {{ label(
              'services.services_description',
              'Od pružanja kablova i instalacije kanalica, do testiranja sistema — fokusirani smo na kvalitet, sigurnost i preciznost izvođenja.'
          ) }}
          </p>
        </div>

        <div class="mamont-services-list__grid">
          <article
              v-for="(service, index) in services"
              :key="service.title"
              class="mamont-service-card"
          >
            <div class="mamont-service-card__image-wrap">
              <img :src="service.image" :alt="service.title" />

              <div class="mamont-service-card__number">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
            </div>

            <div class="mamont-service-card__body">
              <span>{{ service.tag }}</span>

              <h3>{{ service.title }}</h3>

              <p>{{ service.text }}</p>

              <a :href="emailHref" class="mamont-service-card__link">
                {{ label('services.zatrazi_ponudu', 'Zatraži ponudu') }}
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mamont-services-process">
      <div class="container">
        <div class="mamont-services-process__grid">
          <div class="mamont-services-process__content">
            <span class="mamont-services__eyebrow">
              {{ label('services.process_eyebrow', 'Način rada') }}
            </span>

            <h2>{{ label('services.process_title', 'Od dogovora do izvedbe — jasno, precizno i odgovorno.') }}</h2>

            <p>
              {{ label(
                'services.process_text',
                'Svaki projekat posmatramo kroz planiranje, organizaciju tima, sigurnost na terenu i kvalitet završne izvedbe.'
            ) }}
            </p>
          </div>

          <div class="mamont-services-process__steps">
            <article v-for="step in steps" :key="step.title">
              <strong>{{ step.number }}</strong>

              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="mamont-services-cta">
      <div class="container">
        <div class="mamont-services-cta__inner">
          <div>
            <span class="mamont-services__eyebrow">
              {{ label('services.cta_eyebrow', 'Trebate pouzdan tim?') }}
            </span>

            <h2>{{ label('services.cta_title', 'Razgovarajmo o vašem projektu.') }}</h2>

            <p>
              {{ label(
                'services.cta_text',
                'Pošaljite nam upit i javit ćemo vam se sa informacijama za saradnju.'
            ) }}
            </p>
          </div>

          <a class="mamont-services-btn mamont-services-btn--light" :href="emailHref">
            {{ label('services.kontaktirajte_nas', 'Kontaktirajte nas') }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default {
  name: 'ServicesPage',

  setup() {
    const { t, te } = useI18n();
    const router = useRouter();

    const emailUser = 'office';
    const emailDomain = 'mamont-montage.com';
    const email = `${emailUser}@${emailDomain}`;

    const emailHref = computed(() => {
      const subject = encodeURIComponent('Upit za Mamont usluge');
      const body = encodeURIComponent('Pozdrav,\n\nMolim vas za više informacija o vašim uslugama.');

      return `mailto:${email}?subject=${subject}&body=${body}`;
    });

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const navigateTo = (path) => {
      router.push(path);
    };

    const services = computed(() => [
      {
        image: '/assets/images/mamont_images/mamont_pruzanje_kablova.jpg',
        tag: label('services.service_tag_1', 'Elektro-montaža'),
        title: label('services.pruzanje_kablova', 'Pružanje kablova'),
        text: label(
            'services.pruzanje_kablova_nacin',
            'Profesionalno pružanje kablova uz planiranje trasa, preciznu organizaciju rada i poštovanje tehničkih standarda.'
        ),
      },
      {
        image: '/assets/images/mamont_images/mamont_testing.jpg',
        tag: label('services.service_tag_2', 'Kontrola kvaliteta'),
        title: label('services.testiranje_sistema', 'Testiranje sistema'),
        text: label(
            'services.oprema_za_testiranje',
            'Korištenje odgovarajuće opreme za provjeru, testiranje i kontrolu ispravnosti izvedenih elektro sistema.'
        ),
      },
      {
        image: '/assets/images/mamont_images/mamont14.jpg',
        tag: label('services.service_tag_3', 'Instalacije'),
        title: label('services.instalacija_kanalica', 'Instalacija kanalica'),
        text: label(
            'services.instalacija_kanalica_text',
            'Montaža elektro kanalica i kablovskih trasa za industrijske, poslovne i tehnički zahtjevne objekte.'
        ),
      },
    ]);

    const steps = computed(() => [
      {
        number: '01',
        title: label('services.step_1_title', 'Analiza projekta'),
        text: label('services.step_1_text', 'Razumijemo potrebe klijenta, obim posla i tehničke zahtjeve projekta.'),
      },
      {
        number: '02',
        title: label('services.step_2_title', 'Organizacija tima'),
        text: label('services.step_2_text', 'Planiramo ljude, opremu, dinamiku rada i sigurnosne procedure.'),
      },
      {
        number: '03',
        title: label('services.step_3_title', 'Izvedba na terenu'),
        text: label('services.step_3_text', 'Radimo precizno, odgovorno i u skladu sa dogovorenim rokovima.'),
      },
    ]);

    return {
      label,
      navigateTo,
      services,
      steps,
      emailHref,
    };
  },
};
</script>