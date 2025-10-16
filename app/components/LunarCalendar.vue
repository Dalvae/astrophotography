<template>
  <section id="calendar" class="py-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Columna de Texto -->
        <div class="text-center md:text-left">
          <h2 class="text-4xl sm:text-5xl font-bold mb-6">
            {{ $t("calendar.section_title") }}
          </h2>
          <p
            class="text-lg text-[var(--color-secondary)] max-w-md mx-auto md:mx-0"
          >
            {{ $t("calendar.description") }}
          </p>
        </div>

        <!-- Columna del Calendario -->
        <div
          class="bg-[var(--color-surface)] rounded-3xl p-6 border border-[var(--color-border)] w-full max-w-md mx-auto"
        >
          <!-- Header de Navegación -->
          <div class="flex justify-between items-center mb-4">
            <button
              @click="prevMonth"
              class="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Icon name="heroicons:chevron-left" class="w-6 h-6" />
            </button>
            <div class="text-lg font-semibold capitalize">
              {{ currentMonthYear }}
            </div>
            <button
              @click="nextMonth"
              class="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Icon name="heroicons:chevron-right" class="w-6 h-6" />
            </button>
          </div>

          <!-- Días de la semana -->
          <div
            class="grid grid-cols-7 gap-1 text-center text-sm text-[var(--color-secondary)] mb-2"
          >
            <div v-for="day in weekdays" :key="day">{{ day }}</div>
          </div>

          <!-- Días del mes -->
          <div class="grid grid-cols-7 gap-1">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="relative group flex flex-col items-center justify-center aspect-square rounded-lg transition-colors text-sm"
              :class="{
                'text-[var(--color-secondary)]/30': !day.isCurrentMonth,
                'bg-white/10': day.isToday && day.isCurrentMonth,
                'border-2 border-[var(--color-accent-start)]': day.isOptimal,
                'cursor-pointer hover:bg-white/5': day.isCurrentMonth,
              }"
            >
              <span class="absolute top-1 right-2 text-xs">{{
                day.date.getDate()
              }}</span>
              <span class="text-4xl">{{ day.emoji }}</span>

              <!-- Tooltip para Noche Óptima -->
              <div
                v-if="day.isOptimal"
                class="absolute bottom-full mb-2 w-max bg-[var(--color-background)] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
              >
                {{ $t("calendar.optimal_day") }}
                <div
                  class="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[var(--color-background)]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Moon } from "lunarphase-js";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const currentDate = ref(new Date());

const weekdays = computed(() => [
  t("calendar.weekdays.sun"),
  t("calendar.weekdays.mon"),
  t("calendar.weekdays.tue"),
  t("calendar.weekdays.wed"),
  t("calendar.weekdays.thu"),
  t("calendar.weekdays.fri"),
  t("calendar.weekdays.sat"),
]);

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString(locale.value, {
    month: "long",
    year: "numeric",
  });
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const days = [];
  const startDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Días del mes anterior
  for (let i = startDayOfWeek; i > 0; i--) {
        const date = new Date(year, month, 1 - i);
    days.push({
          date,
          emoji: Moon.lunarPhaseEmoji(date),      isCurrentMonth: false,
    });
  }

  // Días del mes actual
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const moonPhase = Moon.lunarPhase(date);
    days.push({
      date,
      emoji: Moon.lunarPhaseEmoji(date),
      isCurrentMonth: true,
      isToday: date.toDateString() === today.toDateString(),
      // Luna nueva es ideal (fase ~0 o ~29.5)
      isOptimal: moonPhase < 2 || moonPhase > 28,
    });
  }

  // Días del mes siguiente
  const remainingCells = 42 - days.length; // 6 semanas para un layout consistente
  for (let i = 1; i <= remainingCells; i++) {
    const date = new Date(year, month, daysInMonth + i);
    days.push({
      date,
      emoji: Moon.lunarPhaseEmoji(date),
      isCurrentMonth: false,
    });
  }

  return days;
});

const prevMonth = () => {
  currentDate.value = new Date(
    currentDate.value.setMonth(currentDate.value.getMonth() - 1),
  );
};

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.setMonth(currentDate.value.getMonth() + 1),
  );
};
</script>

