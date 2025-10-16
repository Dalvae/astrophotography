<template>
  <div class="relative">
    <div ref="dropdown">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-accent-start)] transition-colors duration-300"
      >
        <span>{{ currentLocale.name }}</span>
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-2 w-32 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)] overflow-hidden shadow-lg"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="changeLocale(locale.code)"
          class="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition-colors"
        >
          {{ locale.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)
const dropdown = ref(null)

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value)
)

const availableLocales = computed(() =>
  locales.value.filter(l => l.code !== locale.value)
)

const changeLocale = async (code) => {
  await setLocale(code)
  isOpen.value = false
}

const closeDropdown = (e) => {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
