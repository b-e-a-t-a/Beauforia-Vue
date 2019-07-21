<template>
  <form class="ContactForm" @submit.prevent="submitForm">
    <label for="name">Imię</label>
    <input
      v-model="contact.name"
      name="name"
      placeholder="Podaj imię"
      required
    />
    <label for="surname">Nazwisko</label>
    <input
      v-model="contact.surname"
      name="surname"
      placeholder="Podaj nazwisko"
      required
    />
    <label for="mail">Adres e-mail</label>
    <input
      v-model="contact.email"
      name="mail"
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

    <button class="btn-colored ContactForm__send">
      Wyślij
    </button>


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
      reasons: ["Proszę o kontakt", "Konsultacja", "Rezerwacja wizyty", "Odwołanie wizyty"],
      contact: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        birthDate: '',
        reason: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      const dto = this.contact;
      console.log(dto);
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="sass">
@import './ContactForm'
</style>