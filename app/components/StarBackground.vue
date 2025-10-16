<template>
  <div
    class="fixed inset-0 overflow-hidden bg-gradient-to-b from-[#000033] to-black"
  >
    <svg
      class="absolute w-full h-full opacity-80"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <!-- Random Stars for depth -->
      <circle
        v-for="(star, index) in stars"
        :key="`star-${index}`"
        :cx="star.x"
        :cy="star.y"
        :r="star.size"
        fill="white"
        :style="`opacity: ${star.opacity}`"
      />

      <!-- Constellations -->
      <g
        v-for="(constellation, c_index) in constellations"
        :key="`constellation-${c_index}`"
        class="animate-twinkle"
        :style="`animation-delay: ${c_index * 1.5}s; animation-duration: 7s`"
      >
        <!-- Lines for constellation -->
        <line
          v-for="(line, l_index) in constellation.lines"
          :key="`line-${l_index}`"
          :x1="constellation.stars[line[0]].x"
          :y1="constellation.stars[line[0]].y"
          :x2="constellation.stars[line[1]].x"
          :y2="constellation.stars[line[1]].y"
          stroke="rgba(255, 255, 255, 0.4)"
          stroke-width="0.05"
        />
        <!-- Stars for constellation -->
        <circle
          v-for="(star, s_index) in constellation.stars"
          :key="`c-star-${s_index}`"
          :cx="star.x"
          :cy="star.y"
          :r="star.size"
          fill="white"
        />
      </g>
    </svg>
    <div
      v-for="(star, index) in shootingStars"
      :key="`shooting-${index}`"
      class="shooting-star"
      :style="{
        top: `${star.y}%`,
        left: `${star.x}%`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 0.1 + 0.05,
  opacity: Math.random() * 0.4 + 0.1,
}));

const shootingStars = Array.from({ length: 3 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 10 + 5,
  duration: Math.random() * 2 + 1,
}));

const constellations = ref([]);

const createConstellations = () => {
  const constellationData = [
    {
      stars: [
        { x: 15, y: 20 },
        { x: 25, y: 22 },
        { x: 30, y: 28 },
        { x: 38, y: 26 },
        { x: 45, y: 18 },
        { x: 39, y: 15 },
        { x: 31, y: 19 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [2, 6],
      ],
    },
    {
      stars: [
        { x: 70, y: 30 },
        { x: 75, y: 38 },
        { x: 80, y: 32 },
        { x: 85, y: 40 },
        { x: 90, y: 34 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    {
      stars: [
        { x: 50, y: 60 },
        { x: 58, y: 70 },
        { x: 45, y: 72 },
      ],
      lines: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
    },
    {
      stars: [
        { x: 20, y: 80 },
        { x: 22, y: 90 },
        { x: 18, y: 85 },
        { x: 26, y: 84 },
      ],
      lines: [
        [0, 1],
        [2, 3],
      ],
    },
  ];

  constellations.value = constellationData.map((c) => ({
    stars: c.stars.map((s) => ({
      ...s,
      size: Math.random() * 0.1 + 0.12,
    })),
    lines: c.lines,
  }));
};

onMounted(createConstellations);
</script>
