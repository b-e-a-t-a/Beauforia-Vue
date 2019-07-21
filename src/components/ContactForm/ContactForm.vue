<template>
  <form class="ContactForm" @submit.prevent="submitForm">
    <label for="name">Imię</label>
    <input
      v-model="contact.name"
      name="name"
      type="text"
      placeholder="Podaj imię"
      required
    />
    <label for="surname">Nazwisko</label>
    <input
      v-model="contact.surname"
      name="surname"
      type="text"
      placeholder="Podaj nazwisko"
      required
    />
    <label for="mail">Adres e-mail</label>
    <input
      v-model="contact.email"
      name="mail"
      type="email"
      placeholder="Twój adres e-mail"
      required
    />
    <label for="phone">Numer telefonu</label>
    <input
      v-model="contact.phone"
      name="phone"
      placeholder="Twój numer telefonu"
      required
    />
    <div>
      <span>
        <label for="birthDate">Data urodzenia</label>
      </span>
      <datepicker
        v-model="contact.birthDate"
        name="birthDate"
        class="datepicker"
        placeholder="Format: yyyy-mm-dd"
        :format="'yyyy-MM-dd'"
        :minimumView="'day'"
        :maximumView="'day'"
        :typeable="true"
        required
      />
    </div>

    <div>
      <span>
        <label for="reason">Cel kontaktu</label>
      </span>
      <multiselect
        v-model="contact.reason"
        name="reason"
        :options="reasons"
        placeholder="Wybierz jeden"
        required
      >
      </multiselect>
    </div>
    <textarea
      v-model="contact.message"
      placeholder="Wpisz treść wiadomości"
      rows="7"
    >
    </textarea>

    <button
      class="btn-colored ContactForm__send"
      :disabled="!isFormFilled"
    >
      Wyślij
    </button>

    <div v-if="submitStatus === 'submitted'" class="ContactForm__submitted">
      <p>Dziękujemy! <br/> Wiadomość została wysłana
      </p>
    </div>
    <div v-if="errors.length" class="ContactForm__error">
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">{{error}}</li>
      </ul>
    </div>
  </form>
</template>

<script>
import Multiselect  from 'vue-multiselect';
import Datepicker   from 'vuejs-datepicker';

export default {
  name: 'ContactForm',
  components: { Multiselect, Datepicker },
  data() {
    return {
      errors: [],
      reasons: ["Proszę o kontakt", "Konsultacja", "Rezerwacja wizyty", "Odwołanie wizyty"],
      submitStatus: null,
      contact: {
        name: null,
        surname: null,
        email: null,
        phone: null,
        birthDate: null,
        reason: null,
        message: null
      }
    }
  },
  methods: {
    submitForm() {
      this.checkForm();
      if (this.errors.length) {
        this.submitStatus = "error";
      } else {
        const dto = this.contact;
        console.log(dto);
        this.submitStatus = "submitted";
        this.contact = {};
      }
    },
    isEmailValid(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isPhoneValid(phone) {
      var pn = /^\d{9,10}$/;
      return pn.test(phone);
    },
    checkForm() {
      this.errors = [];
      if(!this.isEmailValid(this.contact.email)) {
        this.errors.push("Wprowadzony e-mail jest niepoprawny.");
      }
      if(!this.isPhoneValid(this.contact.phone)) {
        this.errors.push("Wprowadzony numer telefonu jest niepoprawny.");
      }
      if(!this.errors.length) return true;
    }
  },
  computed: {
    isFormFilled() {
      return Boolean(
        this.contact.name &&
        this.contact.surname &&
        this.contact.email &&
        this.contact.phone &&
        this.contact.birthDate &&
        this.contact.reason
      )
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="sass">
@import './ContactForm'
</style>