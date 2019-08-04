<template>
  <div class="Views">
    <section class="Views__gallery">
      <div class="container">
        <loader v-if="loading === true" />
        <div class="row">
          <div class="col-12">
            <h2 class="Views__headerText">{{$t('gallery.header')}}</h2>
            <div class="Views__galleryWrapper">
              <p>{{$t('gallery.text')}}</p>
            </div>
            <div class="Views__galleryPhotos">
              <div
                class="Views__galleryPhoto"
                v-for="(image, idx) in images"
                :key="idx">
                <img v-bind:src="image.api_featured_image"/>
                <span class="Views__galleryPhotoDescription">
                  <ul>
                    <li class="name">
                      <b>{{$t('gallery.name')}}:</b>
                      {{image.name}}
                      <i
                        class="fa fa-info-circle"
                        @mouseover="showByIndex = image"
                        @mouseleave="showByIndex = null"
                        :class="{'tooltipIcon': showByIndex == image}"
                      >
                      </i>
                      <div
                        class="Views__galleryTooltip"
                        v-show="showByIndex === image"
                      >
                        {{image.description}}
                      </div>
                      <div
                        class="Views__galleryTooltipBackground"
                        v-show="showByIndex === image"
                      >
                      </div>
                    </li>
                    <li><b>{{$t('gallery.brand')}}:</b> {{image.brand}}</li>
                    <li><b>{{$t('gallery.category')}}:</b> {{image.category}}</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios               from 'axios';
import {fetchData}         from '../../src/api/requests';
import Loader              from '../../src/components/Loader/Loader';

export default {
  name: "Gallery",
  components: {
    Loader
  },
  data() {
    return {
      images: [],
      error: null,
      loading: false,
      showByIndex: null
    }
  },
  mounted() {
    this.loading = true;
    fetchData()
    .then((response) => {
      this.images = response.data
        .filter(d => d.product_type="eyeshadow")
        .filter(d => d.price >= 50);
    })
    .catch(error => {
      this.error = error;
    })
    .finally(() => {
      this.loading = false;
    });
  }
}
</script>

<style lang="sass">
@import './Views'
</style>
