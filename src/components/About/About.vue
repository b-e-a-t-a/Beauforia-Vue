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

    <section class="About__header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="About__headerText">{{ msg }}</h2>
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

    <section class="About__header section-class">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="About__headerText">Oferta</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_1.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;"  ondrag="window.event.returnValue=false;"/>
            <div class="offerCaption">
              <p>zabiegi na twarz</p>

            </div>
            <div class="offerCaptionText" @click="isModalVisible.face = true">
              <p>zabiegi na twarz</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_2.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>zabiegi na ciało</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.body = true">
              <p>zabiegi na ciało</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_3.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>manicure<br>pedicure</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.manicure = true">
              <p>manicure<br>pedicure</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_4.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;"/>
            <div class="offerCaption">
              <p>przedłużanie rzęs</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.eyes = true">
              <p>przedłużanie <br> rzęs</p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_5.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>masaże</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.massages = true">
              <p>masaże</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <modal
      v-if="isModalVisible.face"
      @close="isModalVisible.face = false"
    >
      <h3 slot="header">
        Poznaj naszą ofertę zabiegów
      </h3>
      <div slot="body">
        <p>Stosujemy kosmetyki firm:</p>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.body"
      @close="isModalVisible.body = false"
    >
      <h3 slot="header">
        Poznaj naszą ofertę zabiegów
      </h3>
      <div slot="body">
        <p>Stosujemy kosmetyki firm:</p>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.manicure"
      @close="isModalVisible.manicure = false"
    >
      <h3 slot="header">
        Poznaj naszą ofertę pięlegnacji dłoni i stóp
      </h3>
      <div slot="body">
        <p>Z nami najlepiej zadbasz o swoje dłonie i stopy.</p>
        <p>Stosujemy kosmetyki firm:</p>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.eyes"
      @close="isModalVisible.eyes = false"
    >
      <h3 slot="header">
        Poznaj naszą ofertę pięlegnacji oczu
      </h3>
      <div slot="body">
        <p>Stosujemy kosmetyki firm:</p>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.massages"
      @close="isModalVisible.massages = false"
    >
      <h3 slot="header">
        Poznaj naszą ofertę masaży
      </h3>
      <div slot="body">
        <p>Stosujemy kosmetyki firm:</p>
      </div>
    </modal>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Modal               from '../Modal/Modal';

export default {
  name: "About",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide,
    Modal
  },
  data() {
    return {
      isModalVisible: {
        face: false,
        body: false,
        manicure: false,
        eyes: false,
        massages: false
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import './About'
</style>