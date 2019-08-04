import Vue from "vue";
import VueI18n from "vue-i18n";
import pl from "./pl";
import en from "./en";
import es from "./es";

Vue.use(VueI18n);

const messages = {
  pl,
  en,
  es
}

const i18n = new VueI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages
});

export default i18n;