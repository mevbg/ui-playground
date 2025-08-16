<template>
  <div :class="$style.preloader">
    <div :class="$style.dot1" />
    <div :class="$style.dot2" />
  </div>
</template>

<script setup lang="ts">
//
</script>

<style module>
.preloader {
  position: relative;
  width: 1em;
  height: 1em;
  color: var(--mev-color-primitive-red50);
}

.dot1,
.dot2 {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  opacity: 0.6;
  background-color: currentColor;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
