<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Columna de Texto Placeholder -->
    <div class="space-y-4">
      <div class="h-10 bg-gray-700 rounded w-3/4 animate-pulse"></div>
      <div
        class="h-4 bg-gray-700 rounded animate-pulse"
        style="animation-delay: 0.1s"
      ></div>
      <div
        class="h-4 bg-gray-700 rounded w-5/6 animate-pulse"
        style="animation-delay: 0.2s"
      ></div>
    </div>

    <!-- Columna del Calendario Placeholder -->
    <div
      class="bg-[var(--color-surface)] rounded-3xl p-6 border border-[var(--color-border)] w-full mx-auto animate-pulse"
    >
      <div class="flex justify-between items-center mb-4">
        <div class="h-8 w-8 bg-gray-700 rounded-full"></div>
        <div class="h-6 w-32 bg-gray-700 rounded-md"></div>
        <div class="h-8 w-8 bg-gray-700 rounded-full"></div>
      </div>
      <div
        class="grid grid-cols-7 gap-1 text-center text-sm text-[var(--color-secondary)] mb-2"
      >
        <div
          v-for="i in 7"
          :key="i"
          class="h-4 w-8 bg-gray-700 rounded-md mx-auto"
        ></div>
      </div>
      <div class="grid grid-cols-7 gap-1">
        <div
          v-for="i in 42"
          :key="i"
          class="aspect-square bg-gray-800 rounded-lg"
        ></div>
      </div>
    </div>
  </div>
</template>
