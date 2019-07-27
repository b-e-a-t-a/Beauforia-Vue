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
        <table class="About__modalTable">
          <tr>
            <td class="description">
              Produkty których używamy:
            </td>
            <td class="action">
              <button class="btn-small" @click="toggleBrands">
                <span v-if="!areBrandsVisible">
                  <i class="fas fa-sort-down"></i>
                </span>
                <span v-else>
                  <i class="fas fa-sort-up"></i>
                </span>
              </button>
              <div v-if="areBrandsVisible">
                <ul
                  v-for="(brand, idx) in brands"
                  :key="idx"
                >
                  <li>{{brand}}</li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
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

        <table class="About__modalTable">
          <tr>
            <td class="description">
              Stosujemy kosmetyki firm:
            </td>
            <td class="action">
              <button class="btn-small" @click="toggleBrands">
                <span v-if="!areBrandsVisible">
                  <i class="fas fa-sort-down"></i>
                </span>
                <span v-else>
                  <i class="fas fa-sort-up"></i>
                </span>
              </button>
              <div v-if="areBrandsVisible">
                <ul
                  v-for="(brand, idx) in brands"
                  :key="idx"
                >
                  <li>{{brand}}</li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td class="description">
              Sprawdź jakich typów lakierów używamy:
            </td>
            <td>
              <button class="btn-small" @click="showNailsTypes">
                <span v-if="!areTypesVisible">
                  <i class="fas fa-sort-down"></i>
                </span>
                <span v-else>
                  <i class="fas fa-sort-up"></i>
                </span>
              </button>
              <div v-if="areTypesVisible">
                <ul
                  v-for="(type, idx) in nailTypes"
                  :key="idx"
                >
                  <li>{{type}}</li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
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
import axios               from 'axios';
import {
  fetchData,
  fetchProductsTypes,
  fetchProductsTags
}                          from '../../../src/api/requests';
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
      data: null,
      loading: false,
      error: null,
      brands: [],
      nailTypes: [],
      faceTypes: [],
      areBrandsVisible: false,
      areTypesVisible: false,
      isModalVisible: {
        face: false,
        body: false,
        manicure: false,
        eyes: false,
        massages: false
      }
    }
  },
  mounted() {
    this.loading = true;

    fetchData()
    .then((response) => {
      this.data = response.data;
      const brands = this.data.map(b => b.brand).sort();
      this.brands = [...new Set(brands)];
    })
    .catch(error => {
      this.error = error;
    })
    .finally(() => {
      this.loading = false;
    });

    fetchProductsTypes('nail_polish')
    .then((response) => {
      const nailTypes = response.data.filter(n => n.tag_list.length > 0).map(n => n.tag_list);
      const mergedNailTypes = [].concat.apply([], nailTypes);
      const sortedNailTypes = mergedNailTypes.sort();
      this.nailTypes = [...new Set(sortedNailTypes)];
    })
    .catch(error => {
      this.error = error;
    })
    .finally(() => {
      this.loading = false;
    });
  },
  methods: {
    toggleBrands() {
      this.areBrandsVisible = !this.areBrandsVisible;
    },
    showNailsTypes() {
      this.areTypesVisible = !this.areTypesVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import './About'
</style>