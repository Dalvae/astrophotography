<template>
  <nav class="fixed top-0 w-full z-50 bg-[var(--color-surface)] backdrop-blur-sm border-b border-[var(--color-border)]">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-[var(--color-primary)]">
          {{ $t("title") }}
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="`#${item.key}`"
            class="text-[var(--color-primary)] hover:text-[var(--color-accent-start)] transition-colors duration-300"
          >
            {{ item.label }}
          </a>
          <div class="border-l border-[var(--color-border)] h-6"></div>
          <LanguageSelector />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-[var(--color-primary)]"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Panel -->
      <div v-if="isOpen" class="md:hidden mt-4 pt-4 border-t border-[var(--color-border)] space-y-4">
        <a v-for="item in navItems" :key="item.key" :href="`#${item.key}`" @click="isOpen = false" class="block text-lg text-[var(--color-primary)] hover:text-[var(--color-accent-start)] transition-colors duration-300">
          {{ item.label }}
        </a>
        <LanguageSelector />
      </div>
    </div>
  </nav>
</template>

<script setup>
const { t } = useI18n();
const isOpen = ref(false);

const navItems = computed(() => [
  { key: "home", label: t("nav.home") },
  { key: "about", label: t("nav.about") },
  { key: "tours", label: t("nav.tours") },
  { key: "gallery", label: t("nav.gallery") },
  { key: "contact", label: t("nav.contact") },
]);
</script>
