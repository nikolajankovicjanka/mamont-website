<template>
  <main class="mamont-career">
    <section class="mamont-career-hero">
      <img
          src="/assets/images/career/mamont-karijera-hero.png"
          alt="Mamont career"
          class="mamont-career-hero__bg"
      />

      <div class="mamont-career-hero__overlay"></div>

      <div class="container">
        <div class="mamont-career-hero__content">
          <span class="mamont-career__eyebrow">
            {{ label('career.hero_eyebrow', 'Karijera') }}
          </span>

          <h1>{{ label('career.hero_title', 'Postani dio Mamont tima') }}</h1>

          <p>
            {{ label(
              'career.hero_subtitle',
              'Radi na velikim projektima širom Evrope'
          ) }}
          </p>

          <button type="button" class="mamont-career-btn mamont-career-btn--primary" @click="scrollToForm">
            {{ label('career.hero_button', 'Pošalji prijavu') }}
          </button>
        </div>
      </div>
    </section>

    <section class="mamont-career-intro">
      <div class="container">
        <div class="mamont-career-intro__grid">
          <div class="mamont-career-intro__content">
            <span class="mamont-career__eyebrow">
              {{ label('career.intro_eyebrow', 'Otvorene prijave') }}
            </span>

            <h2>{{ label('career.intro_title', 'Tražimo odgovorne elektro-montažere i radnike spremne za teren.') }}</h2>

            <p>
              {{ label(
                'career.intro_text',
                'Ako imate iskustva u elektro-montaži, instalacijama, kablovskim trasama ili ste spremni učiti i raditi u ozbiljnom timu, pošaljite nam prijavu.'
            ) }}
            </p>
          </div>

          <div class="mamont-career-intro__cards">
            <article v-for="item in benefits" :key="item.title">
              <strong>{{ item.number }}</strong>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section ref="formSection" class="mamont-career-form-section">
      <div class="container">
        <div class="mamont-career-form-section__grid">
          <div class="mamont-career-form-section__content">
            <span class="mamont-career__eyebrow">
              {{ label('career.form_eyebrow', 'Prijava za posao') }}
            </span>

            <h2>{{ label('career.form_title', 'Pošalji svoje podatke') }}</h2>

            <p>
              {{ label(
                'career.form_description_no_upload',
                'Popunite formu i po želji dodajte link do CV-a ili dokumenta. Naš tim će pregledati prijavu i kontaktirati vas ukoliko postoji odgovarajuća pozicija.'
            ) }}
            </p>

            <div class="mamont-career-form-section__note">
              <strong>{{ label('career.note_title', 'Napomena') }}</strong>
              <span>{{ label('career.note_text', 'Polja označena zvjezdicom su obavezna.') }}</span>
            </div>
          </div>

          <form class="mamont-career-form" @submit.prevent="submitApplication">
            <input
                type="checkbox"
                name="botcheck"
                class="mamont-career-form__botcheck"
                tabindex="-1"
                autocomplete="off"
            />

            <div class="mamont-career-form__row">
              <label>
                <span>{{ label('career.fields.full_name', 'Ime i prezime') }} *</span>
                <input
                    v-model.trim="form.fullName"
                    type="text"
                    :placeholder="label('career.placeholders.full_name', 'Unesite ime i prezime')"
                    required
                />
              </label>

              <label>
                <span>{{ label('career.fields.email', 'E-mail adresa') }} *</span>
                <input
                    v-model.trim="form.email"
                    type="email"
                    :placeholder="label('career.placeholders.email', 'ime@email.com')"
                    required
                />
              </label>
            </div>

            <div class="mamont-career-form__row">
              <label>
                <span>{{ label('career.fields.phone', 'Telefon') }} *</span>
                <input
                    v-model.trim="form.phone"
                    type="tel"
                    :placeholder="label('career.placeholders.phone', '+387 / +386 / +49')"
                    required
                />
              </label>

              <label>
                <span>{{ label('career.fields.location', 'Mjesto prebivališta') }}</span>
                <input
                    v-model.trim="form.location"
                    type="text"
                    :placeholder="label('career.placeholders.location', 'Grad / država')"
                />
              </label>
            </div>

            <div class="mamont-career-form__row">
              <label>
                <span>{{ label('career.fields.position', 'Pozicija za koju se prijavljujete') }} *</span>
                <select v-model="form.position" required>
                  <option value="" disabled>
                    {{ label('career.placeholders.position', 'Odaberite poziciju') }}
                  </option>
                  <option value="Elektro-montažer">
                    {{ label('career.positions.electro_installer', 'Elektro-montažer') }}
                  </option>
                  <option value="Pomoćni radnik">
                    {{ label('career.positions.assistant_worker', 'Pomoćni radnik') }}
                  </option>
                  <option value="Vođa tima / poslovođa">
                    {{ label('career.positions.team_lead', 'Vođa tima / poslovođa') }}
                  </option>
                  <option value="Drugo">
                    {{ label('career.positions.other', 'Drugo') }}
                  </option>
                </select>
              </label>

              <label>
                <span>{{ label('career.fields.experience', 'Godine iskustva') }}</span>
                <select v-model="form.experience">
                  <option value="">
                    {{ label('career.placeholders.experience', 'Odaberite iskustvo') }}
                  </option>
                  <option value="Bez iskustva">
                    {{ label('career.experience.no_experience', 'Bez iskustva') }}
                  </option>
                  <option value="1-2 godine">
                    {{ label('career.experience.one_two', '1–2 godine') }}
                  </option>
                  <option value="3-5 godina">
                    {{ label('career.experience.three_five', '3–5 godina') }}
                  </option>
                  <option value="5+ godina">
                    {{ label('career.experience.five_plus', '5+ godina') }}
                  </option>
                </select>
              </label>
            </div>

            <div class="mamont-career-form__row">
              <label>
                <span>{{ label('career.fields.availability', 'Dostupnost za početak rada') }}</span>
                <input
                    v-model.trim="form.availability"
                    type="text"
                    :placeholder="label('career.placeholders.availability', 'Odmah / za 15 dana / po dogovoru')"
                />
              </label>

              <label>
                <span>{{ label('career.fields.eu_citizen', 'Državljanin ste EU-a') }}</span>

                <div class="mamont-career-form__checkbox">
                  <input id="euCitizen" v-model="form.euCitizen" type="checkbox" />
                  <label for="euCitizen">
                    {{ label('career.fields.eu_citizen_confirm', 'Da, državljanin sam EU-a') }}
                  </label>
                </div>
              </label>
            </div>

            <label>
              <span>{{ label('career.fields.message', 'Radno iskustvo / kratka poruka') }}</span>
              <textarea
                  v-model.trim="form.message"
                  rows="5"
                  :placeholder="label('career.placeholders.message', 'Napišite ukratko svoje iskustvo, vještine i dostupnost za rad.')"
              ></textarea>
            </label>


            <div class="mamont-career-form__privacy">
              <input id="privacyConsent" v-model="form.privacyConsent" type="checkbox" required />

              <label for="privacyConsent">
                {{ label('career.fields.privacy_consent', 'Saglasan/saglasna sam da Mamont obradi moje podatke u svrhu prijave za posao.') }} *
              </label>
            </div>

            <button type="submit" class="mamont-career-btn mamont-career-btn--submit" :disabled="isSubmitting">
              {{ isSubmitting ? label('career.submit.loading', 'Slanje...') : label('career.submit.default', 'Pošalji prijavu') }}
            </button>

            <p v-if="successMessage" class="mamont-career-form__message mamont-career-form__message--success">
              {{ successMessage }}
            </p>

            <p v-if="errorMessage" class="mamont-career-form__message mamont-career-form__message--error">
              {{ errorMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'CareerPage',

  setup() {
    const { t, te } = useI18n();

    const formSection = ref(null);
    const isSubmitting = ref(false);
    const successMessage = ref('');
    const errorMessage = ref('');

    const form = reactive({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      position: '',
      experience: '',
      availability: '',
      euCitizen: false,
      message: '',
      privacyConsent: false,
    });

    const label = (key, fallback) => {
      return te(key) ? t(key) : fallback;
    };

    const benefits = computed(() => [
      {
        number: '01',
        title: label('career.benefits.projects.title', 'Veliki projekti'),
        text: label('career.benefits.projects.text', 'Rad na ozbiljnim elektro-montažnim projektima širom Evrope.'),
      },
      {
        number: '02',
        title: label('career.benefits.team.title', 'Stabilan tim'),
        text: label('career.benefits.team.text', 'Organizovan rad, jasna komunikacija i podrška na terenu.'),
      },
      {
        number: '03',
        title: label('career.benefits.growth.title', 'Profesionalni razvoj'),
        text: label('career.benefits.growth.text', 'Mogućnost napredovanja, učenja i dugoročne saradnje.'),
      },
    ]);

    const resetForm = () => {
      form.fullName = '';
      form.email = '';
      form.phone = '';
      form.location = '';
      form.position = '';
      form.experience = '';
      form.availability = '';
      form.euCitizen = false;
      form.message = '';
      form.privacyConsent = false;
    };

    const scrollToForm = () => {
      if (!formSection.value) return;

      formSection.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    const submitApplication = async () => {
      successMessage.value = '';
      errorMessage.value = '';

      if (!form.privacyConsent) {
        errorMessage.value = label(
            'career.errors.privacy_required',
            'Morate potvrditi saglasnost za obradu podataka.'
        );
        return;
      }

      const accessKey = process.env.VUE_APP_WEB3FORMS_ACCESS_KEY || '5788c306-268a-4b7f-a3f6-563067471674';

      if (!accessKey) {
        errorMessage.value = label(
            'career.errors.missing_key',
            'Web3Forms ključ nije podešen.'
        );
        return;
      }

      isSubmitting.value = true;

      try {
        const formData = new FormData();

        formData.append('access_key', accessKey);
        formData.append('subject', label('career.email.subject', 'Nova prijava za posao - Mamont'));
        formData.append('from_name', label('career.email.from_name', 'Mamont karijera forma'));
        formData.append('botcheck', '');

        formData.append(label('career.fields.full_name', 'Ime i prezime'), form.fullName);
        formData.append(label('career.fields.email', 'E-mail adresa'), form.email);
        formData.append(label('career.fields.phone', 'Telefon'), form.phone);
        formData.append(label('career.fields.location', 'Mjesto prebivališta'), form.location);
        formData.append(label('career.fields.position', 'Pozicija za koju se prijavljujete'), form.position);
        formData.append(label('career.fields.experience', 'Godine iskustva'), form.experience);
        formData.append(label('career.fields.availability', 'Dostupnost za početak rada'), form.availability);
        formData.append(
            label('career.fields.eu_citizen', 'Državljanin ste EU-a'),
            form.euCitizen ? label('common.yes', 'Da') : label('common.no', 'Ne')
        );
        formData.append(label('career.fields.message', 'Radno iskustvo / kratka poruka'), form.message);
        formData.append(
            label('career.fields.privacy_consent', 'Saglasnost za obradu podataka'),
            label('common.yes', 'Da')
        );

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || label('career.errors.submit_failed', 'Greška prilikom slanja prijave.'));
        }

        successMessage.value = label(
            'career.success',
            'Prijava je uspješno poslata. Hvala vam na interesovanju.'
        );

        resetForm();
      } catch (error) {
        errorMessage.value = error.message || label('career.errors.generic', 'Došlo je do greške. Pokušajte ponovo.');
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      label,
      form,
      benefits,
      isSubmitting,
      successMessage,
      errorMessage,
      formSection,
      scrollToForm,
      submitApplication,
    };
  },
};
</script>