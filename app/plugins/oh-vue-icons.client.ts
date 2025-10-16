import { defineNuxtPlugin } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiCheck, OiTelescope, WiStars, BiImageAlt } from "oh-vue-icons/icons";

addIcons(HiCheck, OiTelescope, WiStars, BiImageAlt);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
