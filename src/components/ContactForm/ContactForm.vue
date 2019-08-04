<template>
  <form class="ContactForm" @submit.prevent="submitForm">
    <label for="name">{{$t('contact.form.name')}}</label>
    <input
      v-model="contact.name"
      name="name"
      type="text"
      :placeholder="$t('contact.form.placeholder.name')"
      required
    />
    <label for="surname">{{$t('contact.form.surname')}}</label>
    <input
      v-model="contact.surname"
      name="surname"
      type="text"
      :placeholder="$t('contact.form.placeholder.surname')"
      required
    />
    <label for="mail">{{$t('contact.form.email')}}</label>
    <input
      v-model="contact.email"
      name="mail"
      type="email"
      :placeholder="$t('contact.form.placeholder.email')"
      required
    />
    <label for="phone">{{$t('contact.form.phone')}}</label>
    <input
      v-model="contact.phone"
      name="phone"
      :placeholder="$t('contact.form.placeholder.phone')"
      required
    />
    <div>
      <span>
        <label for="birthDate">{{$t('contact.form.birthdate')}}</label>
      </span>
      <datepicker
        v-model="contact.birthDate"
        name="birthDate"
        class="datepicker"
        :placeholder="$t('contact.form.placeholder.birthdate')"
        :format="'yyyy-MM-dd'"
        :minimumView="'day'"
        :maximumView="'day'"
        :typeable="true"
        required
      />
    </div>

    <div>
      <span>
        <label for="reason">{{$t('contact.form.reason')}}</label>
      </span>
      <multiselect
        v-model="contact.reason"
        name="reason"
        :options="reasons"
        :placeholder="$t('contact.form.placeholder.reason')"
        required
      >
      </multiselect>
    </div>
    <textarea
      v-model="contact.message"
        :placeholder="$t('contact.form.placeholder.text')"
      rows="7"
    >
    </textarea>

    <button
      class="btn-colored ContactForm__send"
      :disabled="!isFormFilled"
    >
      {{$t('contact.form.send')}}
    </button>

    <div v-if="submitStatus === 'submitted'" class="ContactForm__submitted">
      <p>{{$t('contact.form.thanks')}} <br/> {{$t('contact.form.submitted')}}
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
      reasons: [
        this.$t("contact.form.reason_list.contact"),
        this.$t("contact.form.reason_list.consulting"),
        this.$t("contact.form.reason_list.reservation"),
        this.$t("contact.form.reason_list.cancellation")
      ],
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