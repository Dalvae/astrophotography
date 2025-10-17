<template>
  <div
    class="fixed inset-0 overflow-hidden bg-gradient-to-b from-[#000033] to-black"
  >
    <div class="relative w-full h-full">
      <svg
        class="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="star-glow">
            <feGaussianBlur stdDeviation="0.04" />
          </filter>
        </defs>

        <g filter="url(#star-glow)">
          <circle
            v-for="(star, index) in stars"
            :key="`star-${index}`"
            :cx="star.x"
            :cy="star.y"
            :r="star.size"
            fill="white"
            :style="`opacity: ${star.opacity}`"
          />
        </g>

        <g v-if="fullAnimationPath">
          <path
            :d="constellationLinesPath"
            stroke="rgba(255, 255, 255, 0.15)"
            stroke-width="0.12"
            fill="none"
          />
          <g filter="url(#star-glow)">
            <circle
              v-for="star in allConstellationStars"
              :key="`c-star-${star.x}-${star.y}`"
              :cx="star.x"
              :cy="star.y"
              :r="star.size"
              fill="white"
            />
          </g>
          <path
            id="master-path"
            :d="fullAnimationPath"
            fill="none"
            stroke="none"
          />
        </g>
      </svg>

      <div
        v-if="fullAnimationPath"
        id="comet-tracer"
        :style="{ offsetPath: `path('${fullAnimationPath}')` }"
      ></div>
    </div>

    <div
      v-for="(star, index) in shootingStars"
      :key="star.id"
      class="shooting-star-container"
      :class="{ 'is-animating': star.isAnimating }"
      :style="star.containerStyle"
      @animationend="onShootingStarEnd(index)"
    >
      <div class="shooting-star" :style="star.starStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const stars = Array.from({ length: 150 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 0.12 + 0.06,
  opacity: Math.random() * 0.6 + 0.2,
}));

const shootingStars = ref([]);
let starIdCounter = 0;

const createRandomShootingStar = () => {
  starIdCounter++;
  const duration = Math.random() * 2 + 1;
  const rotation = Math.random() * 60 + 15;

  return {
    id: starIdCounter,
    isAnimating: false,
    containerStyle: {
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      transform: `rotate(${rotation}deg)`,
    },
    starStyle: {
      animationDuration: `${duration}s`,
    },
  };
};

const triggerShootingStarAnimation = (index) => {
  const delay = Math.random() * 5000 + 2000;
  setTimeout(() => {
    if (shootingStars.value[index]) {
      shootingStars.value[index].isAnimating = true;
    }
  }, delay);
};

const onShootingStarEnd = (index) => {
  const newStar = createRandomShootingStar();
  shootingStars.value.splice(index, 1, newStar);
  triggerShootingStarAnimation(index);
};

onMounted(() => {
  for (let i = 0; i < 2; i++) {
    shootingStars.value.push(createRandomShootingStar());
    triggerShootingStarAnimation(i);
  }
});

const constellationData = [
  {
    stars: [
      { x: 10, y: 12 },
      { x: 18, y: 15 },
      { x: 25, y: 13 },
      { x: 33, y: 16 },
      { x: 40, y: 14 },
      { x: 42, y: 22 },
      { x: 34, y: 20 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [3, 6],
    ],
  },
  {
    stars: [
      { x: 20, y: 75 },
      { x: 28, y: 80 },
      { x: 35, y: 76 },
      { x: 42, y: 81 },
      { x: 50, y: 77 },
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
      { x: 70, y: 40 },
      { x: 85, y: 45 },
      { x: 78, y: 55 },
      { x: 80, y: 56 },
      { x: 82, y: 57 },
      { x: 72, y: 65 },
      { x: 88, y: 70 },
    ],
    lines: [
      [0, 2],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [0, 1],
    ],
  },
];

const constellations = computed(() =>
  constellationData.map((c) => ({
    ...c,
    stars: (() => {
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;
      return c.stars.map((s) => ({
        ...s,
        x: s.x + offsetX,
        y: s.y + offsetY,
        size: Math.random() * 0.1 + 0.12,
      }));
    })(),
  })),
);

const allConstellationStars = computed(() =>
  constellations.value.flatMap((c) => c.stars),
);

const constellationLinesPath = computed(() => {
  let path = "";
  constellations.value.forEach((constellation) => {
    constellation.lines.forEach((line) => {
      const p1 = constellation.stars[line[0]];
      const p2 = constellation.stars[line[1]];
      path += ` M${p1.x},${p1.y} L${p2.x},${p2.y}`;
    });
  });
  return path;
});

const fullAnimationPath = computed(() => {
  let path = "";
  constellations.value.forEach((constellation) => {
    constellation.lines.forEach((line) => {
      const p1 = constellation.stars[line[0]];
      const p2 = constellation.stars[line[1]];
      path += ` M${p1.x},${p1.y} L${p2.x},${p2.y}`;
    });
  });
  return path;
});
</script>

<style>
@keyframes travel-path {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

@keyframes shooting-star-animation {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}

.shooting-star-container {
  position: absolute;
  opacity: 0;
  transform-origin: left;
}

.shooting-star-container.is-animating {
  opacity: 1;
}

.shooting-star {
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 8px 2px white;
}

.shooting-star-container.is-animating .shooting-star {
  animation-name: shooting-star-animation;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}

.shooting-star::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-100%);
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, white, transparent);
}

@media (max-width: 768px) {
  .shooting-star {
    display: none;
  }
}

#comet-tracer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    white 10%,
    rgba(255, 255, 255, 0.8) 40%,
    transparent 70%
  );
  width: 2px;
  height: 2px;
  border-radius: 50%;
  offset-rotate: auto;
  animation: travel-path 25s linear infinite;
}
</style>
