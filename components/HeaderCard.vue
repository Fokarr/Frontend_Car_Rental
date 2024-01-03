<template>
  <div
    class="bg-information-500 rounded-lg shadow-md p-4 relative flex flex-col gap-4 max-w sm:max-w-sm lg:max-w-2xl lg:p-8"
  >
    <h3 class="text-white font-semibold lg:text-2xl lg:w-1/2">
      The Best Platform for Car Rental
    </h3>
    <div class="text-white text-sm w-4/5 lg:w-1/2">
      Ease of doing a car rental safely and reliably. Of course at a low price.
    </div>
    <div class="my-4 lg:mb-28">
      <button
        v-if="showCta"
        class="bg-primary-500 rounded-md p-4 px-8 text-primary-0 font-base"
      >
        Rental Now
      </button>
    </div>
    <img
      src="/placeholder.png"
      class="w-2/3 mx-auto lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:w-1/2"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showCta: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
