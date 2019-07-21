<template>
  <div class="Navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/kontakt">
				<img src="../../assets/Beauforia_Logo_Poziom_cut.png" alt="logo" oncontextmenu="window.event.returnValue=false;" ondrag="window.event.returnValue=false;">
			</router-link>

      <div class="menu-list">
        <router-link to="/">Home</router-link>
        <router-link to="/cennik">Cennik</router-link>
        <router-link to="/galeria">Galeria</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
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
							<a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
						</div>
						<div class="icon-btn">
							<a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
						</div>
					</li>
				</ul>
			</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tel: "48 22 000 00 00",
      mobile: "48 888 000 000"
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
@import './Navbar'
</style>
