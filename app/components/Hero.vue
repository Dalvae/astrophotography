<template>
<section
id="home"
class="relative flex items-center justify-center min-h-screen text-center px-4 overflow-hidden"
>
<!-- Overlay difuminado para mejorar la legibilidad del texto -->
<div
class="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent"
></div>

<div class="relative z-10 max-w-4xl mx-auto">
  <h1
    class="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in-down"
    style="animation-delay: 0.2s"
  >
    <span
      class="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] animate-gradient"
    >
      {{ $t("title") }}
    </span>
  </h1>
  <p
    class="text-xl sm:text-2xl md:text-3xl text-[var(--color-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-down"
    style="animation-delay: 0.4s"
  >
    {{ $t("subtitle") }}
  </p>

  <div
    class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
    style="animation-delay: 0.6s"
  >
    <a
      href="#tours"
      class="w-full sm:w-auto relative bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 group overflow-hidden"
    >
      <span class="relative z-10">{{ $t("cta") }}</span>
    </a>
    <a
      href="#about"
      class="w-full sm:w-auto text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium py-4 px-10 rounded-xl transition-colors duration-300 border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface)]"
    >
      {{ $t("nav.about") }}
    </a>
  </div>
</div>

<!-- Overlay de montañas SVG en la parte inferior -->
<div
  class="absolute bottom-0 left-0 w-full h-1/4 md:h-1/3 text-[var(--color-background)] pointer-events-none"
  aria-hidden="true"
>
  <svg
    class="w-full h-full"
    fill="currentColor"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</div>

<!-- Overlay de difuminado para una transición suave -->
<div
  class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none"
></div>
</section>
</template>

<script setup>
// Nuxt 3 auto-importa 'useI18n', así que no es estrictamente necesario importarlo.
const { t } = useI18n();
</script>

<style>
@keyframes fade-in-down {
from {
opacity: 0;
transform: translateY(-20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

@keyframes fade-in-up {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

.animate-fade-in-down {
animation: fade-in-down 0.8s ease-out forwards;
opacity: 0;
}

.animate-fade-in-up {
animation: fade-in-up 0.8s ease-out forwards;
opacity: 0;
}
</style>
