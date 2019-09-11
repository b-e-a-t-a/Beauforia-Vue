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
            <h2 class="About__headerText">{{ $t('about.header') }}</h2>
          </div>
        </div>
        <div class="row about-us-row">
          <div class="col-lg-6 col-sm-12 text-column">
            <p>{{$t('about.text_1')}}<b> {{$t('about.text_2')}} </b>{{$t('about.text_3')}}<i> {{$t('about.text_4')}} </i>{{$t('about.text_5')}}</p>
            <p>{{$t('about.text_6')}}<b> {{$t('about.text_7')}} </b>{{$t('about.text_8')}}</p>
            <p>{{$t('about.text_8')}}{{$t('about.text_9')}}</p>
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
            <h2 class="About__headerText">{{$t('offer.header')}}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-m-4 col-s-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_1.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;"  ondrag="window.event.returnValue=false;"/>
            <div class="offerCaption">
              <p>{{$t('offer.face')}}</p>

            </div>
            <div class="offerCaptionText" @click="isModalVisible.face = true">
              <p>{{$t('offer.face')}}</p>
            </div>
          </div>
          <div class="col-m-4 col-s-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_2.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>{{$t('offer.body')}}</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.body = true">
              <p>{{$t('offer.body')}}</p>
            </div>
          </div>
          <div class="col-m-4 col-s-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_3.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>{{$t('offer.manicure')}}<br>{{$t('offer.pedicure')}}</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.manicure = true">
              <p>{{$t('offer.manicure')}}<br>{{$t('offer.pedicure')}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-m-6 col-s-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_4.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;"/>
            <div class="offerCaption">
              <p>{{$t('offer.eyelash')}}</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.eyes = true">
              <p>{{$t('offer.eyelash')}}</p>
            </div>
          </div>
          <div class="col-m-6 col-s-12 col-offer">
            <img src="../../assets/MotywKwiatowy_small_5.jpg" alt="motyw-kwiatowy" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;" />
            <div class="offerCaption">
              <p>{{$t('offer.massages')}}</p>
            </div>
            <div class="offerCaptionText" @click="isModalVisible.massages = true">
              <p>{{$t('offer.massages')}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <modal
      v-if="isModalVisible.face"
      @close="isModalVisible.face = false">
      <h3 slot="header">
        Poznaj naszą ofertę zabiegów
      </h3>
      <div slot="body">
        <p>W naszej bogatej ofercie zabiegów na pewno znajdziesz coś dla siebie.
          Skorzystaj z wybranych zabiegów kosmetycznych na twarz oraz zabiegów medycyny estetycznej.
          Oferujemy również profesjonalne doradztwo i zabiegi w zakresie podologii.
          Nasi specjaliści zajmą się Tobą kompleksowo.</p>
        <table class="About__modalTable">
          <tr>
            <td class="description">
              Produkty których używamy:
            </td>
            <td class="action">
              <button class="btn-small" @click="showFaceProducts">
                <span v-if="!areFaceProductsVisible">
                  <i class="fas fa-sort-down"></i>
                </span>
                <span v-else>
                  <i class="fas fa-sort-up"></i>
                </span>
              </button>
              <div class="About__modalSpinner" v-if="loading.face && !areFaceProductsVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.face && areFaceProductsVisible">
                <ul>
                  <li
                    v-for="(name, idx) in faceProducts"
                    :key="idx"
                  >
                    {{name}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td class="description">
              Oferujemy szeroką gamę kategorii:
            </td>
            <td class="action">
              <button class="btn-small" @click="showFaceCategories">
                <span v-if="!areFaceCategoriesVisible">
                  <i class="fas fa-sort-down"></i>
                </span>
                <span v-else>
                  <i class="fas fa-sort-up"></i>
                </span>
              </button>
              <div class="About__modalSpinner" v-if="loading.faceCategories && !areFaceCategoriesVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.faceCategories && areFaceCategoriesVisible">
                <ul>
                  <li
                    v-for="(category, idx) in faceCategories"
                    :key="idx"
                  >
                    {{category}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.body"
      @close="isModalVisible.body = false">
      <h3 slot="header">
        Poznaj naszą ofertę zabiegów
      </h3>
      <div slot="body">
        <p>W naszej bogatej ofercie zabiegów na pewno znajdziesz coś dla siebie.
          Skorzystaj z wybranych zabiegów kosmetycznych na ciało oraz zabiegów medycyny estetycznej.
          Oferujemy również profesjonalne doradztwo i zabiegi w zakresie podologii.
          Nasi specjaliści zajmą się Tobą kompleksowo.
        </p>
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
              <div class="About__modalSpinner" v-if="loading.brands && areBrandsVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.brands && areBrandsVisible">
                <ul>
                  <li
                    v-for="(brand, idx) in brands"
                    :key="idx"
                  >
                    {{brand}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.manicure"
      @close="isModalVisible.manicure = false">
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
              <div class="About__modalSpinner" v-if="loading.brands && areBrandsVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.brands && areBrandsVisible">
                <ul>
                  <li
                    v-for="(brand, idx) in brands"
                    :key="idx"
                  >
                    {{brand}}
                  </li>
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
              <div class="About__modalSpinner" v-if="loading.nails && !areTypesVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.nails && areTypesVisible">
                <ul>
                  <li
                    v-for="(type, idx) in nailTypes"
                    :key="idx"
                  >
                    {{type}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </modal>

    <modal
      v-if="isModalVisible.eyes"
      @close="isModalVisible.eyes = false">
      <h3 slot="header">
        Poznaj naszą ofertę pięlegnacji oczu
      </h3>
      <div slot="body">
        <p>Wszystkie dostępne usługi znajdziesz w naszym cenniku</p>
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
              <div class="About__modalSpinner" v-if="loading.brands && areBrandsVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.brands && areBrandsVisible">
                <ul>
                  <li
                    v-for="(brand, idx) in brands"
                    :key="idx"
                  >
                    {{brand}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
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
        <p>Poczuj Co To Prawdziwy Relaks! Zapraszamy do skorzystania z usług naszych wykwalifikowanych masażystów.</p>
        <table class="About__modalTable">
          <tr>
            <td class="description">
              Zobacz jakie typy masażu wykonujemy:
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
              <div class="About__modalSpinner" v-if="loading.brands && areBrandsVisible">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              </div>
              <div class="About__modalList" v-if="!loading.brands && areBrandsVisible">
                <div class="About__search">
                  <input type="text" v-model="search" placeholder="Szukaj masażu..."/>
                  <ul>
                    <li
                      v-for="(filteredBrand, idx) in filteredBrands"
                      :key="idx"
                    >
                      {{filteredBrand}}
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </modal>

    <notification v-if="error" :error="error" @close="error = null">
      <div slot="content">
        <p>{{$t('about.error_message')}}</p>
        <p>{{error}}</p>
      </div>
    </notification>
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
import Notification        from '../Notification/Notification';

export default {
  name: "About",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide,
    Modal,
    Notification
  },
  data() {
    return {
      data: null,
      error: null,
      search: '',
      brands: [],
      nailTypes: [],
      faceProducts: [],
      faceCategories: [],
      areBrandsVisible: false,
      areTypesVisible: false,
      areFaceProductsVisible: false,
      areFaceCategoriesVisible: false,
      isModalVisible: {
        face: false,
        body: false,
        manicure: false,
        eyes: false,
        massages: false
      },
      loading: {
        brands: true,
        nails: false,
        face: false,
        faceCategories: false,
      }
    }
  },
  mounted() {
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
      this.loading.brands = false;
    });
  },
  methods: {
    showNailsTypes() {
      this.loading.nails = true;
      fetchProductsTypes('nail_polish')
      .then((response) => {
        const nailTypes = response.data.filter(n => n.tag_list.length > 0).map(n => n.tag_list);
        const mergedNailTypes = [].concat.apply([], nailTypes);
        const sortedNailTypes = mergedNailTypes.sort();
        this.nailTypes = [...new Set(sortedNailTypes)];
        this.areTypesVisible = !this.areTypesVisible;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading.nails = false;
      })
    },
    showFaceProducts() {
      this.loading.face = true;
      fetchProductsTypes('foundation')
      .then((response) => {
        this.faceProducts = response.data.map(p => p.name);
        this.areFaceProductsVisible = !this.areFaceProductsVisible;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading.face = false;
      })
    },
    showFaceCategories() {
      this.loading.faceCategories = true;
      fetchProductsTypes('foundation')
      .then((response) => {
        const faceCategories = response.data.filter(c => c.category).map(c => c.category);
        const sortedCategories = faceCategories.sort();
        this.faceCategories = [...new Set(sortedCategories)];
        this.areFaceCategoriesVisible = !this.areFaceCategoriesVisible;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.loading.faceCategories = false;
      })
    },
    toggleBrands() {
      this.areBrandsVisible = !this.areBrandsVisible;
    }
  },
  computed: {
    filteredBrands() {
      if(!this.brands) return [];
      return this.brands.filter(brand => {
        // return (brand || '').toLowerCase().includes(this.search.toLowerCase()) // not for IE11
        return (brand || '').toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import './About'
</style>