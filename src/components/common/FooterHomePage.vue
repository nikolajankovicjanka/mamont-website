<template>
  <footer class="mamont-art-footer">
    <div class="mamont-art-footer__blue-area">
      <div class="mamont-art-footer__circle"></div>

      <div class="container mamont-art-footer__inner">
        <div class="mamont-art-footer__brand-block">
          <button type="button" class="mamont-art-footer__brand" @click="navigateTo('/')">
            <span>MAMONT</span>
            <strong>ELEKTRO</strong>
          </button>

          <p>
            {{ label(
              'footer.description',
              'Profesionalna elektro firma sa dugogodišnjim iskustvom u pružanju kvalitetnih električarskih usluga za domaćinstva i poslovne objekte.'
          ) }}
          </p>
        </div>

        <div class="mamont-art-footer__contact-card">
          <span class="mamont-art-footer__contact-label">
            {{ label('common.contact', 'Kontakt') }}
          </span>

          <a :href="phoneHref">{{ phone }}</a>
          <a :href="emailHref">{{ email }}</a>
        </div>
      </div>
    </div>

    <div class="mamont-art-footer__white-band">
      <div class="container mamont-art-footer__white-inner">
        <nav class="mamont-art-footer__nav" aria-label="Footer navigation">
          <button
              v-for="item in navItems"
              :key="item.route"
              type="button"
              @click="navigateTo(item.route)"
          >
            {{ label(item.key, item.fallback) }}
          </button>
        </nav>

        <div class="mamont-art-footer__socials" aria-label="Social networks">
          <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="mamont-art-footer__social-card"
              :class="`mamont-art-footer__social-card--${social.key}`"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
          >
            <svg viewBox="0 0 24 24">
              <path :d="social.icon" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="mamont-art-footer__bottom">
      <div class="container mamont-art-footer__bottom-inner">
        <div>
          <small>{{ label('footer.contact_info', 'Kontakt informacije') }}</small>
          <strong>{{ label('footer.location', 'Slovenija / Evropa') }}</strong>
        </div>

        <p>© {{ currentYear }} MAMONT. {{ label('footer.rights', 'Sva prava zadržana.') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import {
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
} from '@mdi/js';

export default {
  name: 'FooterHomePage',

  setup() {
    const { t, te } = useI18n();
    const router = useRouter();

    const phone = '+386 70 128 752';
    const phoneHref = 'tel:+38670128752';

    const emailUser = 'office';
    const emailDomain = 'mamont-montage.com';
    const email = `${emailUser}@${emailDomain}`;

    const emailHref = computed(() => {
      const subject = encodeURIComponent('Upit preko web sajta');
      const body = encodeURIComponent('Pozdrav,\n\nMolim vas za više informacija.');

      return `mailto:${email}?subject=${subject}&body=${body}`;
    });

    const currentYear = new Date().getFullYear();

    const navItems = [
      { route: '/about', key: 'common.o_nama', fallback: 'O nama' },
      { route: '/services', key: 'common.usluge', fallback: 'Usluge' },
      { route: '/projects', key: 'common.projekti', fallback: 'Projekti' },
      { route: '/tim', key: 'common.nas_tim', fallback: 'Naš tim' },
      { route: '/karijera', key: 'common.karijera', fallback: 'Karijera' },
    ];

    const socialLinks = [
      {
        key: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: mdiFacebook,
      },
      {
        key: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: mdiInstagram,
      },
      {
        key: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/',
        icon: mdiLinkedin,
      },
    ];

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const navigateTo = (path) => {
      router.push(path);
    };

    return {
      label,
      navItems,
      socialLinks,
      navigateTo,
      phone,
      phoneHref,
      email,
      emailHref,
      currentYear,
    };
  },
};
</script>