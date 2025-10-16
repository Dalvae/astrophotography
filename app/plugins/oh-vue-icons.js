import { defineNuxtPlugin } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiGlobeAmericas,
  HiCheck,
  OiTelescope,
  WiStars,
  BiImageAlt,
} from "oh-vue-icons/icons";

const icons = [
  { name: "hi-globe-americas", component: HiGlobeAmericas },
  { name: "hi-check", component: HiCheck },
  { name: "oi-telescope", component: OiTelescope },
  { name: "wi-stars", component: WiStars },
  { name: "bi-image-alt", component: BiImageAlt },
];

addIcons(...icons);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});