<template>
  <div class="Navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/kontakt">
				<img src="../../assets/Beauforia_Logo_Poziom_cut.png" alt="logo" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
			</router-link>

      <div class="menu-list">
        <router-link to="/">{{$t('menu.home')}}</router-link>
        <router-link to="/cennik">{{$t('menu.pricelist')}}</router-link>
        <router-link to="/galeria">{{$t('menu.gallery')}}</router-link>
        <router-link to="/kontakt">{{$t('menu.contact')}}</router-link>
      </div>

      <div class="language-box">
        <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
          <flag :iso="entry.flag" v-bind:squared=false />
        </button>
      </div>
      <div class="contact-box">
				<ul class="contact-list">
					<li class="contact-tel">
						<i class="fas fa-phone"></i>
						<a>&#43;  {{tel}}</a>
					</li>
					<li class="contact-tel">
						<i class="fas fa-phone"></i>
						<a>&#43; {{mobile}}</a>
					</li>
					<li class="social-icons">
						<div class="icon-btn">
							<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
						</div>
						<div class="icon-btn">
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
						</div>
					</li>
				</ul>
			</div>
    </div>

  </div>
</template>

<script>
import i18n from '@/i18n/i18n';

export default {
  name: "Navbar",
  data() {
    return {
      tel: "48 22 000 00 00",
      mobile: "48 888 000 000",
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'es', language: 'es', title: 'Español' },
        { flag: 'pl', language: 'pl', title: 'Polish' }
      ]
    }
  },
  computed: {

  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
}
</script>

<style lang="sass">
@import './Navbar'
</style>
