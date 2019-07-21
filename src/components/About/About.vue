<template>
  <div class="About">
    <section class="About__carousel">
      <carousel
        :per-page="1"
        :autoplay="true"
        :autoplayHoverPause="true"
        :centerMode="true"
        paginationActiveColor="#58c5c2"
        :paginationSize="12"
        :paginationPadding="8"
        :loop="true"
        >
        <slide class="About__carouselSlide" data-index="0">
          <img class="poster" src="../../assets/otwarcie.png" alt="First slide" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
        </slide>
        <slide class="About__carouselSlide" data-index="1">
					<img src="../../assets/carousel_photo_1.jpg" alt="Second slide" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
        </slide>
        <slide class="About__carouselSlide" data-index="2">
          <img src="../../assets/carousel_photo_2.jpg" alt="Third slide" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
        </slide>
        <slide class="About__carouselSlide" data-index="3">
          <img src="../../assets/carousel_photo_3.jpg" alt="Third slide" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
        </slide>
      </carousel>
    </section>

    <section class="About__description">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="my-about-text">{{ msg }}</h1>
          </div>
        </div>
        <div class="row about-us-row">
          <div class="col-lg-6 col-sm-12 text-column">
            <p>Miło nam, że tu zajrzałaś! To znaczy, że jesteś świadomą osobą dbającą o siebie. Dlaczego <b>Beauforia</b>?
              Jest to połączenie francuskiego <i>piękna</i> (beau, beauté) z radością, euforią. Naszą misją jest zadowolenie z
              efektów i Wasze dobre samopoczucie.
              Chcemy dostarczyć Wam, naszym drogim Klientkom, czystej euforii, <b>radości bycia piękną</b>!</p>
            <p>U nas możesz odpocząć i zrelaksować się. <b>Instytut Urody Beauforia</b> to miejsce, w którym bardzo dokładnie
              wsłuchujemy się w Wasze oczekiwania
              i dobieramy zabiegi stosownie do indywidualnych potrzeb.</p>
            <p>Dobro klientów stawiamy na pierwszym miejscu, dlatego nie zwlekaj! Odwiedź nas i pozwól Nam bezkarnie Cię
              rozpieszczać!</p>
          </div>
          <div class="col-lg-6 col-sm-12 photo">
            <img src="../../assets/about.jpg" alt="about-us" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
          </div>
        </div>
      </div>
    </section>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "About",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import './About'
</style>