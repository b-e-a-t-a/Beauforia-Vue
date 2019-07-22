<template>
  <div class="Views">
    <section class="Views__contact section-class">
      <div class="Views__contactBox">
        <div class="container">
          <div>
            <h2 class="Views__headerText">Instytut urody Beauforia</h2>
            <p class="Views__icon"><span><i class="fas fa-map-marker-alt"></i></span>Adres:</p>
            <p>ul.Grochowska 342</p>
            <p>03-838 Warszawa</p>
            <br>
            <p class="Views__icon"><span><i class="fas fa-clock"></i></span>Godziny otwarcia:</p>
            <p>pon - pt: 9:00 - 20:00</p>
            <p>sobota: 10:00 - 16:00</p>
            <br>
            <p class="Views__icon"><span><i class="fas fa-phone-square"></i></span>Telefon:</p>
            <p class="Views__contactLink"><a href="tel:+48-22-000-00-00">&#43; {{tel}}</a></p>
            <p class="Views__contactLink"><a href="tel:+48-888-000-000">&#43; {{mobile}}</a></p>
            <br>
            <p class="Views__contactMail"><span><i class="fas fa-envelope"></i><a href="mailto:recepcja0@beauforia.pl">recepcja0@beauforia.pl</a></span></p>
          </div>
        </div>
      </div>
    </section>

    <section class=" Views__contact section-class">
      <div class="Views__contactBox">
        <div class="container">
          <h2 class="Views__headerText">Skontaktuj się z nami</h2>
          <contact-form/>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import ContactForm from '../components/ContactForm/ContactForm';
export default {
  name: "Contact",
  components: {
    ContactForm
  },
  data() {
    return {
      tel: "48 22 000 00 00",
      mobile: "48 888 000 000",
      email: "recepcja0@beauforia.pl"
    }
  }
}
</script>


<style scoped lang="sass">
@import './Views'
</style>
