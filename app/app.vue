<template>
  <div class="min-h-screen text-[var(--color-primary)] overflow-hidden">
    <StarBackground />
    <NavBar />

    <div class="relative z-10">
      <Hero />

      <!-- About Section -->
      <section
        id="about"
        class="pt-28 pb-20 bg-[var(--color-surface)]/30 backdrop-blur-sm"
      >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">
            {{ $t("about.title") }}
          </h2>

          <div
            class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div>
              <p
                class="text-lg text-[var(--color-secondary)] leading-relaxed mb-8"
              >
                {{ $t("about.content") }}
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div
                  v-for="stat in stats"
                  :key="stat.value"
                  class="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]"
                >
                  <div
                    class="text-2xl font-bold text-[var(--color-accent-start)] mb-2"
                  >
                    {{ stat.value }}
                  </div>
                  <div class="text-sm text-[var(--color-secondary)]">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-[var(--color-surface)] rounded-3xl p-8 border border-[var(--color-border)] hover-lift"
            >
              <div
                class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center"
              >
                <div class="text-center text-[var(--color-secondary)]">
                  <v-icon
                    name="hi-globe-americas"
                    class="w-24 h-24 mx-auto opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dual Experience Section -->
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">
            {{ $t("experience.title") }}
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Scientific Promise -->
            <div
              class="bg-[var(--color-surface)] backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-border)] hover-lift group"
            >
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <v-icon name="oi-telescope" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                {{ $t("experience.science_title") }}
              </h3>
              <p
                class="text-[var(--color-secondary)] text-base leading-relaxed"
              >
                {{ $t("experience.science_description") }}
              </p>
            </div>

            <!-- Ancestral Connection -->
            <div
              class="bg-[var(--color-surface)] backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-border)] hover-lift group"
            >
              <div
                class="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <v-icon name="wi-stars" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                {{ $t("experience.ancestral_title") }}
              </h3>
              <p
                class="text-[var(--color-secondary)] text-base leading-relaxed"
              >
                {{ $t("experience.ancestral_description") }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tours Section -->
      <section
        id="tours"
        class="py-20 bg-[var(--color-surface)]/30 backdrop-blur-sm"
      >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">
            {{ $t("tours.title") }}
          </h2>

          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Premium Tour -->
            <div
              class="bg-[var(--color-surface)] rounded-3xl p-8 border border-[var(--color-border)] hover-lift"
            >
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  {{ $t("tours.premium.title") }}
                </h3>
                <p class="text-[var(--color-secondary)]">
                  {{ $t("tours.premium.description") }}
                </p>
              </div>

              <ul class="space-y-3 mb-6">
                <li
                  v-for="index in 5"
                  :key="index"
                  class="flex items-center text-[var(--color-secondary)]"
                >
                  <v-icon name="hi-check" class="w-5 h-5 text-[var(--color-accent-start)] mr-3" />
                  {{ $t(`tours.premium.features.${index - 1}`) }}
                </li>
              </ul>
            </div>

            <!-- Cultural Tour -->
            <div
              class="bg-[var(--color-surface)] rounded-3xl p-8 border border-[var(--color-border)] hover-lift"
            >
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  {{ $t("tours.cultural.title") }}
                </h3>
                <p class="text-[var(--color-secondary)]">
                  {{ $t("tours.cultural.description") }}
                </p>
              </div>

              <ul class="space-y-3 mb-6">
                <li
                  v-for="index in 5"
                  :key="index"
                  class="flex items-center text-[var(--color-secondary)]"
                >
                  <v-icon name="hi-check" class="w-5 h-5 text-[var(--color-accent-start)] mr-3" />
                  {{ $t(`tours.cultural.features.${index - 1}`) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Lunar Calendar Section -->
      <section id="calendar" class="py-20">
        <ClientOnly>
          <LunarCalendar />
          <template #fallback>
            <LunarCalendarPlaceholder />
          </template>
        </ClientOnly>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl sm:text-5xl font-bold text-center mb-4">
            {{ $t("gallery.title") }}
          </h2>
          <p
            class="text-xl text-[var(--color-secondary)] text-center mb-12 max-w-2xl mx-auto"
          >
            {{ $t("gallery.subtitle") }}
          </p>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div
              v-for="i in 6"
              :key="i"
              class="aspect-square bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover-lift flex items-center justify-center"
            >
              <div class="text-center text-[var(--color-secondary)]">
                <v-icon name="bi-image-alt" class="w-12 h-12 mx-auto mb-2 opacity-60" />
                <p class="text-sm">Astro Photo {{ i }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="contact" class="py-20 text-center">
        <div class="max-w-2xl mx-auto px-6">
          <h2 class="text-3xl sm:text-4xl font-bold mb-8">
            {{ $t("cta_title") }}
          </h2>
          <button
            class="relative bg-gradient-to-r from-[var(--color-accent-start)] to-[var(--color-accent-end)] hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50 group overflow-hidden"
          >
            <span class="relative z-10">{{ $t("cta") }}</span>
          </button>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="py-12 text-center border-t border-[var(--color-border)] bg-[var(--color-surface)]/30"
      >
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div class="text-left">
              <h3 class="text-lg font-bold text-[var(--color-primary)] mb-2">
                {{ $t("title") }}
              </h3>
              <p class="text-[var(--color-secondary)] text-sm">
                {{ $t("footer.location") }}
              </p>
            </div>

            <div class="text-center">
              <p class="text-[var(--color-secondary)]" id="contact">
                &copy; {{ new Date().getFullYear() }} {{ $t("footer.rights") }}
              </p>
            </div>

            <div class="text-right">
              <button
                class="text-[var(--color-accent-start)] hover:text-[var(--color-accent-end)] transition-colors"
              >
                {{ $t("footer.contact") }}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { t } = useI18n();

const stats = computed(() => [
  { value: t("about.stats.nights"), label: t("about.stats.nights_label") },
  { value: t("about.stats.altitude"), label: t("about.stats.altitude_label") },
  {
    value: t("about.stats.telescopes"),
    label: t("about.stats.telescopes_label"),
  },
]);
</script>